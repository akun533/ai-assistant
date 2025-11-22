export function generateSessionId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `session_${timestamp}_${random}`;
}

export function createResponse(text: string, answer?: string | string[], end = false) {
  return {
    content: [
      {
        end,
        answer,
        type: 'text',
        text,
      },
    ],
  };
}

/**
 * 移除字符串最前面的'/rule'前缀
 * @param str 需要处理的字符串
 * @returns 移除'/rule'前缀后的字符串，如果原字符串不以'/rule'开头则返回原字符串
 */
export function removeRulePrefix(str: string): string {
  if (!str || typeof str !== 'string') {
    return str;
  }

  // 检查字符串是否以'/rule'开头
  if (str.startsWith('/rule/')) {
    return str.substring(5); // 移除'/rule'
  }

  return str;
}
