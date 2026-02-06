import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export interface LogEntry {
  timestamp: string;
  sessionId?: string;
  functionName: string;
  parameters: any;
  response?: any;
  error?: {
    message: string;
    stack?: string;
    line?: number;
  };
  duration?: number;
}

export class Logger {
  private logDir: string;
  private today: string;

  constructor(logDir?: string) {
    // 如果没有指定日志目录，使用相对于当前模块的路径
    if (!logDir) {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      // 从 dist/utils 目录回到项目根目录
      const projectRoot = path.resolve(__dirname, '../..');
      logDir = path.join(projectRoot, 'log');
    }

    this.logDir = logDir;
    this.today = this.getTodayString();

    // 确保日志目录存在
    this.ensureLogDirectory();
  }

  /**
   * 获取今天的日期字符串
   */
  private getTodayString(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * 确保日志目录存在
   */
  private ensureLogDirectory(): void {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  /**
   * 获取日志文件路径
   */
  private getLogFilePath(type: 'log' | 'error'): string {
    const extension = type === 'error' ? 'error.log' : 'log';
    return path.join(this.logDir, `${this.today}.${extension}`);
  }

  /**
   * 格式化日志条目
   */
  private formatLogEntry(entry: LogEntry): string {
    const logData = {
      timestamp: entry.timestamp,
      sessionId: entry.sessionId,
      functionName: entry.functionName,
      parameters: entry.parameters,
      response: entry.response,
      error: entry.error,
      duration: entry.duration,
    };

    return `${JSON.stringify(logData)}\n`;
  }

  /**
   * 写入日志文件
   */
  private writeToFile(filePath: string, content: string): void {
    try {
      fs.appendFileSync(filePath, content, 'utf8');
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  /**
   * 记录工具调用日志
   */
  logToolCall(
    functionName: string,
    parameters: any,
    response?: any,
    duration?: number,
    sessionId?: string,
  ): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      sessionId,
      functionName,
      parameters,
      response,
      duration,
    };

    const logContent = this.formatLogEntry(entry);
    const logFilePath = this.getLogFilePath('log');
    this.writeToFile(logFilePath, logContent);
  }

  /**
   * 记录错误日志
   */
  logError(
    functionName: string,
    parameters: any,
    error: Error,
    line?: number,
    sessionId?: string,
  ): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      sessionId,
      functionName,
      parameters,
      error: {
        message: error.message,
        stack: error.stack,
        line,
      },
    };

    const logContent = this.formatLogEntry(entry);
    const errorLogFilePath = this.getLogFilePath('error');
    this.writeToFile(errorLogFilePath, logContent);
  }

  /**
   * 记录工具调用开始
   */
  logToolStart(functionName: string, parameters: any, sessionId?: string): number {
    const startTime = Date.now();
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      sessionId,
      functionName,
      parameters,
      response: { status: 'START' },
    };

    const logContent = this.formatLogEntry(entry);
    const logFilePath = this.getLogFilePath('log');
    this.writeToFile(logFilePath, logContent);

    return startTime;
  }

  /**
   * 记录工具调用结束
   */
  logToolEnd(
    functionName: string,
    parameters: any,
    response: any,
    startTime: number,
    sessionId?: string,
  ): void {
    const duration = Date.now() - startTime;
    this.logToolCall(functionName, parameters, response, duration, sessionId);
  }

  /**
   * 获取今天的日志文件路径
   */
  getTodayLogPath(): string {
    return this.getLogFilePath('log');
  }

  /**
   * 获取今天的错误日志文件路径
   */
  getTodayErrorLogPath(): string {
    return this.getLogFilePath('error');
  }

  /**
   * 清理旧日志文件（保留最近N天）
   */
  cleanupOldLogs(daysToKeep: number = 7): void {
    try {
      const files = fs.readdirSync(this.logDir);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

      files.forEach(file => {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && stats.mtime < cutoffDate) {
          fs.unlinkSync(filePath);
          console.log(`Deleted old log file: ${file}`);
        }
      });
    } catch (error) {
      console.error('Failed to cleanup old logs:', error);
    }
  }
}

// 创建全局日志记录器实例
export const logger = new Logger();
