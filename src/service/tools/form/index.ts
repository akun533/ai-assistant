import { applyJSONPatch } from '../../../core/json-patch-validator.js';
import { createResponse, removeRulePrefix } from '../../../utils';
import { ToolArgs, ToolContext, ToolRegistration, ValidateDetails } from '../types';
import featuresMap, { features } from './features';
import yinhaiFeaturesMap from './yinhai-features';

// 常量定义
const DEFAULT_UI_FRAMEWORK = 'element-plus';
const DEFAULT_VUE_VERSION = 'vue3';
const SUPPORTED_UI_FRAMEWORKS = ['element-plus', 'element-ui', 'ant-design-vue', 'vant', 'ta404-ui'] as const;
const SUPPORTED_VUE_VERSIONS = ['vue2', 'vue3', 'auto'] as const;

export const getComponentsDetailTool: ToolRegistration = {
  definition: {
    name: 'get_components_detail',
    title: '查看组件详细信息',
    description: '获取组件的配置项，包括使用方法、示例代码等',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        componentNames: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '需要获取配置项的可用组件名称列表',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型',
          default: DEFAULT_UI_FRAMEWORK,
        },
        vueVersion: {
          type: 'string',
          enum: SUPPORTED_VUE_VERSIONS,
          description: 'Vue版本，auto表示自动检测',
          default: 'auto',
        },
      },
      required: ['componentNames'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { componentNames = [], uiFramework = DEFAULT_UI_FRAMEWORK, vueVersion = 'auto' } = args || {};

    console.log('componentNames', componentNames);
    if (!Array.isArray(componentNames) || componentNames.length === 0) {
      return createResponse('componentNames 必须是一个非空的字符串数组');
    }

    const detectedVueVersion = vueVersion === 'auto' ? DEFAULT_VUE_VERSION : vueVersion;
    const allComponents = request.componentRegistry.getComponents(uiFramework, detectedVueVersion);

    // 根据组件名称筛选组件
    const requestedComponents = allComponents.filter((comp: any) =>
      componentNames.includes(comp.type),
    );

    // 检查是否有未找到的组件
    const foundComponentNames = requestedComponents.map((comp: any) => comp.type);
    const notFoundComponents = componentNames.filter(name => !foundComponentNames.includes(name));

    if (notFoundComponents.length > 0) {
      return createResponse(`错误: 不支持以下组件: ${notFoundComponents.join(', ')}，通过 get_component_specs 重新获取完整组件列表`);
    }

    return createResponse(`${requestedComponents.map((comp: any) => {
      (comp.examples || []).forEach((example: any) => {
        if (!example._fc_drag_tag) {
          example._fc_drag_tag = comp.type;
        }
      });
      // 生成配置项表格
      const propsTable = comp.props && comp.props.length > 0 ?
        `配置项:
|属性名 |类型| 默认值|说明|
|-------|----|-----|----|
${comp.props.map((prop: any) =>
    `|${prop.name} | ${prop.type} | ${prop.defaultValue !== undefined ? JSON.stringify(prop.defaultValue) : '-'} | ${prop.description || '-'} |`,
  ).join('\n')}` :
        '配置项: 无';

      // 生成事件表格
      const eventsTable = comp.events && comp.events.length > 0 ?
        `事件:
|事件名 |说明|
|-------|----|
${comp.events.map((event: any) =>
    `|${event.name} | ${event.description || '-'} |`,
  ).join('\n')}` :
        '事件: 无';

      return `**${comp.type}** - ${comp.label}

${propsTable}

${eventsTable}

**示例代码：**
\`\`\`json
${JSON.stringify(comp.examples?.[0] || {}, null, 2)}
\`\`\`

${comp.isField ? '表单组件：是' : ''}
${comp.isContainer ? '容器组件：是' : ''}
${comp.isAssist ? '辅助组件：是' : ''}
${comp.childrenPath ? `子组件路径：${comp.childrenPath}` : ''}
---`;
    }).join('\n\n')}

原则: 优先参考示例代码, 组件配置项与示例代码描述冲突时以示例代码为准。
请根据以上详细信息生成具体的表单组件。`);
  },
};

export const validateFormRuleTool: ToolRegistration = {
  definition: {
    name: 'validate_form_rule',
    private: true,
    title: '检查表单规则有效性',
    description: '根据规范校验表单规则，不对操作计划负责。支持全量与增量，增量校验时仅传入发生变化的组件规则`ComponentRule[]`，无需携带未变更部分\n输出包含错误、警告、修复建议与优化后的规则',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        rule: {
          type: 'array',
          description: '要校验的组件规则,不是补丁',
        },
        operationType: {
          type: 'string',
          enum: ['create', 'modify'],
          description: '操作类型：create(创建新表单)、modify(修改现有表单/修改现有组件)',
          default: 'create',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['rule'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { operationType, rule, option, sessionId = '', uiFramework = DEFAULT_UI_FRAMEWORK } = args || {};

    if (!rule) {
      return createResponse('缺少必需的 rule 参数');
    }
    if (typeof rule === 'string') {
      return createResponse('rule 参数必须是 Array 数据类型');
    }
    if (typeof option === 'string') {
      return createResponse('option 参数必须是 Object 数据类型');
    }

    // 处理新的参数结构：rule 可能是数组或对象
    const formRule: any = {
      rule: rule,
      option: option || getDefaultFormOptions(),
    };

    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule(formRule, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, formRule, uiFramework, request.componentRegistry);

    if (detailedValidate.isValid) {
      if (operationType === 'create') {
        request.context.newForm = detailedValidate.improvedRule;
      }
      return createResponse(`校验通过:
\`\`\`json
${JSON.stringify(detailedValidate.improvedRule, null, 2)}
\`\`\`

检查是否符合操作计划, 然后执行下一步
`);
    } else {
      return createResponse(`表单规则验证发现问题，需要修复：

**需要修复的错误：**
${detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n')}

${detailedValidate.warnings && detailedValidate.warnings.length > 0 ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}` : ''}

${detailedValidate.suggestions && detailedValidate.suggestions.length > 0 ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}` : ''}

请根据以上建议修改表单规则，然后重新验证。`);
    }
  },
};

export const applyPatchFormRuleTool: ToolRegistration = {
  definition: {
    name: 'apply_patch_form_rule',
    title: '调整表单规则',
    private: true,
    description: '应用JSONPatch补丁，必须全量传入。JSONPatch 操作规范 (RFC 6902)',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        summarize: {
          type: 'string',
          description: '总结概括本次任务(MarkDown 格式)',
        },
        jsonPatch: {
          type: 'array',
          description: 'JSONPatch补丁数组',
          items: {
            type: 'object',
            required: ['op', 'path'],
            properties: {
              op: {
                type: 'string',
                enum: ['add', 'remove', 'replace', 'move', 'copy', 'test'],
                description: '操作类型',
              },
              path: {
                type: 'string',
                description: 'JSON Pointer路径',
              },
              value: {
                description: '操作值',
              },
              from: {
                type: 'string',
                description: '源路径（move/copy操作）',
              },
            },
          },
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['jsonPatch'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { sessionId = '', uiFramework, summarize } = args || {};
    const jsonPatch = (args.jsonPatch || []).map(patch => {
      if (patch.from) {
        patch.from = removeRulePrefix(patch.from);
      }
      if (patch.path) {
        patch.path = removeRulePrefix(patch.path);
      }
      return patch;
    });

    if (!jsonPatch || !Array.isArray(jsonPatch)) {
      return createResponse('缺少必需的 jsonPatch 参数');
    }

    const data = request.context;

    const results = applyJSONPatch(data.form.rule, jsonPatch as any);

    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule({ rule: results.newDocument }, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, { rule: results.newDocument }, uiFramework as string, request.componentRegistry);

    if (!detailedValidate.isValid) {
      return createResponse(`推送失败，表单规则验证发现问题，需要修复：

**需要修复的错误：**
${detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n')}

${detailedValidate.warnings && detailedValidate.warnings.length > 0 ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}` : ''}

${detailedValidate.suggestions && detailedValidate.suggestions.length > 0 ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}` : ''}

请根据以上建议修改表单规则。`);
    }
    request.context.form = results.newDocument;

    return createResponse('完成执行', [`\`\`\`fcRuleDiff
${JSON.stringify(detailedValidate.improvedRule)}
\`\`\``, summarize as string], true);
  },
};

export const getFeatureTemplateTool: ToolRegistration = {
  definition: {
    name: 'get_feature_template',
    title: '查看框架功能信息',
    description: `获取表单功能说明，包括${features.map(feature => `${feature.label}`).join('、')}等功能的类型定义和使用示例`,
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于提供框架特定的示例',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { uiFramework = DEFAULT_UI_FRAMEWORK } = args || {};
    return createResponse(formatFeatureTemplateResponse({
      uiFramework,
    }));
  },
};

export const pushCurrentRuleTool: ToolRegistration = {
  definition: {
    name: 'push_current_rule',
    description: '推送当前会话的当前表单规则',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于获取指定会话的规则',
        },
        rule: {
          type: 'array',
          description: '表单完整规则,不是补丁',
        },
        summarize: {
          type: 'string',
          description: '总结概括本次任务(MarkDown 格式)',
        },
        isComplete: {
          type: 'boolean',
          description: '是否已经结束修改，true表示表单规则已确定，false表示还需要继续修改',
          default: false,
        },
        operationType: {
          type: 'string',
          enum: ['create', 'modify'],
          description: '操作类型：create(创建新表单)、modify(修改现有表单)',
          default: 'create',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['sessionId', 'rule', 'summarize', 'isComplete'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { sessionId, rule, summarize, isComplete = true, operationType, uiFramework } = args || {};

    if (!sessionId) {
      return createResponse('缺少必需的 sessionId 参数');
    }
    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule({ rule }, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, { rule }, uiFramework as string, request.componentRegistry);

    if (!detailedValidate.isValid) {
      return createResponse(`推送失败，表单规则验证发现问题，需要修复：

**需要修复的错误：**
${detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n')}

${detailedValidate.warnings && detailedValidate.warnings.length > 0 ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}` : ''}

${detailedValidate.suggestions && detailedValidate.suggestions.length > 0 ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}` : ''}

请根据以上建议修改表单规则。`);
    }

    return createResponse('完成执行', [`\`\`\`${operationType === 'create' ? 'fcRule' : 'fcRuleDiff'}
${JSON.stringify(detailedValidate.improvedRule)}
\`\`\``, summarize as string], isComplete);
  },
};

function getDefaultFormOptions() {
  return {
    form: {
      labelPosition: 'right',
      labelWidth: '120px',
    },
    submitBtn: true,
    resetBtn: true,
  };
}

function createDetailedValidate(validateAndImproveResult: any, rule: any, uiFramework: string, componentRegistry: any): ValidateDetails {
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

function formatFeatureTemplateResponse(data: {uiFramework: string} ): string {
  let response = '';
  let featuresMapTemp
  const { uiFramework } = data
  if (uiFramework === 'ta404-ui') {
    featuresMapTemp = yinhaiFeaturesMap
  } else {
    featuresMapTemp = featuresMap
  }
  Object.keys(featuresMapTemp).forEach((type: string, index: number) => {
    const featureData = featuresMapTemp[type];
    if (featureData.business && process.env.FORM_CREATE_BUSINESS !== 'true') {
      return;
    }
    if (featureData.business === false && process.env.FORM_CREATE_BUSINESS === 'true') {
      return;
    }
    response += `#${type}\n\n`;
    response += `${featureData.info}\n\n`;
    response += `${featureData.description}\n\n`;
    (featureData.templates || []).forEach((template: any) => {
      response += `- ${template.description}: \n\`\`\`\n${JSON.stringify(template.example, null, 2)}\n\`\`\`\n`;
    });
    response += `\n`;
  });

  return response;
}

export default [
  getComponentsDetailTool,
  validateFormRuleTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
  pushCurrentRuleTool,
];
