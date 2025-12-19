/**
 * 生成事件函数文档的Markdown表格
 * @param {Array} quickMethodCodeList - 快速方法代码列表
 * @returns {string} - Markdown表格字符串
 */
export function generateEventDocsTable(quickMethodCodeList) {
  // 表头
  let markdown = `
\r\n

---

## 可用函数列表

| 函数名称 | 功能描述 | 参数支持 | 参数说明 |
|---------|---------|---------|---------|
`;

  // 遍历所有函数并添加到表格中
  quickMethodCodeList.forEach(method => {
    // 处理函数名称
    const functionName = method.value || 'custom';

    // 处理功能描述
    const description = method.desc || method.name || '';

    // 处理参数支持
    let paramsSupported = '';
    if (method.param === null) {
      paramsSupported = '无';
    } else if (typeof method.param === 'string') {
      paramsSupported = method.param;
    } else {
      paramsSupported = '未知';
    }

    // 处理参数说明
    let paramDescription = '';
    if (method.param === null) {
      paramDescription = '该方法无需参数';
    } else {
      // 按优先级收集参数说明
      if (method.desc) {
        paramDescription = method.desc;
      }

      if (method.placeHolder1) {
        paramDescription += (paramDescription ? ' ' : '') + method.placeHolder1;
      }

      if (method.placeHolder2) {
        paramDescription += (paramDescription ? ' ' : '') + method.placeHolder2;
      }

      if (method.placeHolder3) {
        paramDescription += (paramDescription ? ' ' : '') + method.placeHolder3;
      }

      // 如果还没有参数说明，尝试构建一个
      if (!paramDescription && typeof method.param === 'string') {
        if (method.param.includes(',')) {
          paramDescription = '多个参数: ' + method.param;
        } else {
          paramDescription = '参数类型: ' + method.param;
        }
      }

      // 特殊处理一些参数说明
      if (method.isMultiple) {
        paramDescription += (paramDescription ? ' ' : '') + '(支持多选)';
      }
    }

    // 清理多余的空格
    paramDescription = paramDescription.trim();

    // 添加行到表格，确保没有语法错误
    markdown += `| ${functionName} | ${description} | ${paramsSupported} | ${paramDescription || 'N/A'} |\n`;
  });

  return markdown;
}
