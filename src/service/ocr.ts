import * as paddleocr from 'paddleocr';
const PaddleOcrService = paddleocr.PaddleOcrService;
// @ts-ignore
import { decode } from 'fast-png';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// 获取当前文件所在目录
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// 模型文件目录（绝对路径）
const MODEL_DIR = path.resolve(__dirname, '../models');

// 模型文件路径
const DET_MODEL = path.join(MODEL_DIR, 'PP-OCRv5_mobile_det_infer.onnx');
const REC_MODEL = path.join(MODEL_DIR, 'PP-OCRv5_mobile_rec_infer.onnx');
const DICT_FILE = path.join(MODEL_DIR, 'ppocrv5_dict.txt');

let ocrInstance: PaddleOcrService | null = null;

/**
 * 初始化 PaddleOCR 实例
 */
async function initOcr() {
  if (ocrInstance) return ocrInstance;

  try {
    // 检查模型文件是否存在
    const missing = [];
    if (!fs.existsSync(DET_MODEL)) missing.push('检测模型');
    if (!fs.existsSync(REC_MODEL)) missing.push('识别模型');
    if (!fs.existsSync(DICT_FILE)) missing.push('字典文件');

    if (missing.length > 0) {
      console.log(`⚠️ 缺少模型文件: ${missing.join(', ')}，OCR 功能不可用`);
      console.log(`📥 请下载模型文件到 ${MODEL_DIR} 目录`);
      return null;
    }

    console.log('🔧 初始化 PaddleOCR...');
    
    const ort = await import('onnxruntime-node');
    
    ocrInstance = await PaddleOcrService.createInstance({
      ort,
      detection: {
        modelBuffer: fs.readFileSync(DET_MODEL),
      },
      recognition: {
        modelBuffer: fs.readFileSync(REC_MODEL),
        charactersDictionary: fs.readFileSync(DICT_FILE, 'utf-8').split('\n'),
      },
    });

    console.log('✅ PaddleOCR 初始化完成');
    return ocrInstance;
  } catch (error) {
    console.error('❌ PaddleOCR 初始化失败:', error instanceof Error ? error.message : String(error));
    return null;
  }
}

/**
 * 将任意格式图片转换为 PNG Buffer
 * @param imageBuffer 原始图片 Buffer
 * @returns PNG Buffer
 */
async function convertToPng(imageBuffer: Buffer): Promise<Buffer> {
  return sharp(imageBuffer).png().toBuffer();
}

/**
 * 识别图片中的文字
 * @param imageBuffer 图片 Buffer
 * @returns 识别结果
 */
export async function recognizeImage(imageBuffer: Buffer) {
  const ocr = await initOcr();
  
  if (!ocr) {
    return {
      success: false,
      text: '',
      confidence: 0,
      regions: [],
      error: 'OCR 服务未初始化',
    };
  }

  try {
    // 将图片转换为 PNG 格式（支持 JPEG、PNG、GIF、WebP 等）
    const pngBuffer = await convertToPng(imageBuffer);
    
    // 使用 fast-png 解码图片
    const image = decode(pngBuffer);
    
    const startTime = Date.now();
    
    const result = await ocr.recognize({
      data: image.data,
      width: image.width,
      height: image.height,
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    // 格式化结果
    const regions = result.map((item, i) => ({
      index: i + 1,
      text: item.text,
      confidence: Math.round(item.confidence * 100) / 100,
    }));

    // 合并所有文本
    const fullText = result.map(item => item.text).join('\n');
    
    // 计算平均置信度
    const avgConfidence = result.length > 0
      ? result.reduce((sum, item) => sum + item.confidence, 0) / result.length
      : 0;

    console.log(`📸 OCR 识别完成: ${result.length} 个区域, 耗时 ${duration}s`);

    return {
      success: true,
      text: fullText,
      confidence: Math.round(avgConfidence * 100) / 100,
      regions,
      duration: parseFloat(duration),
    };
  } catch (error) {
    console.error('❌ OCR 识别失败:', error instanceof Error ? error.message : String(error));
    return {
      success: false,
      text: '',
      confidence: 0,
      regions: [],
      error: error instanceof Error ? error.message : '未知错误',
    };
  }
}

/**
 * 关闭 OCR 服务
 */
export async function shutdownOcr() {
  if (ocrInstance) {
    await ocrInstance.destroy();
    ocrInstance = null;
    console.log('🔒 PaddleOCR 已关闭');
  }
}

export default {
  initOcr,
  recognizeImage,
  shutdownOcr,
};
