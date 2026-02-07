/**
 * 提示词构建器
 * 提供通用的系统提示词构建功能
 * 移除了表单组件相关的提示词
 */

export class PromptBuilder {
  private defaultPrompt = `你是一个通用的 AI 助手，具备以下能力：

## 核心能力
1. **智能对话** - 能够理解和回应用户的各种问题
2. **工具调用** - 可以使用 MCP 工具来执行特定任务
3. **代码编写** - 能够编写、解释和调试代码
4. **问题分析** - 能够分析复杂问题并提供解决方案

## 工具使用规范
- 当需要执行特定任务时，请使用可用的工具
- 工具调用格式：function_call
- 确保传递正确的参数
- 工具调用结果会返回给你，你可以基于结果继续对话

## 交互原则
- 回答要清晰、准确、有条理
- 如果不确定答案，请明确说明
- 遇到错误时，提供有用的错误信息和建议

## 会话信息
- 会话 ID：{sessionId}
- 当前时间：{timestamp}

请根据用户的问题，提供最有帮助的回答。`;

  constructor() {}

  /**
   * 构建系统提示词
   */
  buildSystemPrompt(
    sessionId: string,
    context?: Record<string, any>,
  ): string {
    const timestamp = new Date().toISOString();

    let prompt = this.defaultPrompt
      .replace('{sessionId}', sessionId)
      .replace('{timestamp}', timestamp);

    // 如果有上下文信息，添加到提示词中
    if (context) {
      const contextStr = JSON.stringify(context, null, 2);
      prompt += `\n\n## 上下文信息\n\`\`\`json\n${contextStr}\n\`\`\``;
    }

    return prompt;
  }

  /**
   * 构建会话提示词
   */
  buildConversationPrompt(
    userInput: string,
    history?: Array<{ role: string; content: string }>,
  ): string {
    let prompt = '## 当前对话\n\n';
    prompt += `用户输入：${userInput}\n`;

    if (history && history.length > 0) {
      prompt += '\n## 对话历史\n';
      history.forEach((msg, index) => {
        prompt += `${index + 1}. **${msg.role}**: ${msg.content}\n`;
      });
    }

    return prompt;
  }

  /**
   * 构建工具调用提示词
   */
  buildToolPrompt(
    toolName: string,
    toolDescription: string,
    parameters: Record<string, any>,
  ): string {
    return `请使用工具 "${toolName}" 执行以下任务：

**工具描述**：${toolDescription}

**参数**：
${JSON.stringify(parameters, null, 2)}

请根据工具的返回结果，提供适当的回答。`;
  }

  /**
   * 获取系统提示词模板
   */
  getDefaultPrompt(): string {
    return this.defaultPrompt;
  }

  /**
   * 自定义系统提示词
   */
  setCustomPrompt(prompt: string): void {
    this.defaultPrompt = prompt;
  }
}

export default PromptBuilder;
