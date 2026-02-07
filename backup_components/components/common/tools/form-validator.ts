/**
 * 组件工具 - 表单验证器
 * 提供表单规则验证和详细结果生成功能
 */

/**
 * 验证详情接口
 */
export interface ValidateDetails {
  isValid: boolean;
  answer: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  framework: string;
  availableComponents: string[];
  improvedRule: any;
  changes?: string[];
}

/**
 * 创建详细的验证结果
 */
export function createDetailedValidate(
  validateAndImproveResult: any,
  rule: any,
  uiFramework: string,
  componentRegistry: any,
): ValidateDetails {
  const components = componentRegistry.getComponents(uiFramework);
  const componentNames = components.map((c: any) => c.type);

  const detailedValidate: ValidateDetails = {
    isValid: validateAndImproveResult.isValid,
    answer: validateAndImproveResult.isValid,
    errors: validateAndImproveResult.errors,
    warnings: validateAndImproveResult.warnings || [],
    suggestions: validateAndImproveResult.suggestions || [],
    framework: uiFramework,
    availableComponents: componentNames,
    improvedRule: validateAndImproveResult.improvedRule,
    changes: [],
  };

  // 检查是否有改进
  const hasChanges = JSON.stringify(rule) !== JSON.stringify(validateAndImproveResult.improvedRule);
  if (hasChanges) {
    detailedValidate.changes?.push('自动推断并添加了容器组件的 children');
  }

  // 添加总体建议
  if (!validateAndImproveResult.isValid) {
    detailedValidate.suggestions.push('请根据上述错误信息和建议修改表单规则');
    detailedValidate.suggestions.push('可调用 get_component_specs 查看详细的组件规范和使用示例');
  }

  // 如果有改进，添加改进建议
  if (hasChanges) {
    detailedValidate.suggestions.push('已自动改进规则，可以使用 improvedRule 字段中的优化后规则');
  }

  return detailedValidate;
}

/**
 * 格式化验证错误消息
 */
export function formatValidationErrors(detailedValidate: ValidateDetails): string {
  const errorMessages: string[] = [];

  if (detailedValidate.errors.length > 0) {
    errorMessages.push('**需要修复的错误：**');
    errorMessages.push(detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n'));
  }

  if (detailedValidate.warnings && detailedValidate.warnings.length > 0) {
    errorMessages.push('\n**警告信息：**');
    errorMessages.push(detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n'));
  }

  if (detailedValidate.suggestions && detailedValidate.suggestions.length > 0) {
    errorMessages.push('\n**修复建议：**');
    errorMessages.push(detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n'));
  }

  return errorMessages.join('\n');
}
