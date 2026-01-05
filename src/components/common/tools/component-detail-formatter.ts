/**
 * 组件工具 - 获取组件详细信息
 * 用于查询组件的配置项、示例代码等详细信息
 */

/**
 * 格式化组件详细信息
 */
export function formatComponentDetail(comp: any): string {
  // 确保示例有 _fc_drag_tag
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
}

/**
 * 格式化多个组件的详细信息
 */
export function formatComponentsDetail(components: any[]): string {
  const details = components.map(comp => formatComponentDetail(comp)).join('\n\n');
  
  return `${details}

原则: 优先参考示例代码, 组件配置项与示例代码描述冲突时以示例代码为准。
请根据以上详细信息生成具体的表单组件。`;
}

/**
 * 根据组件名称筛选组件
 */
export function filterComponentsByNames(
  allComponents: any[],
  componentNames: string[]
): { found: any[]; notFound: string[] } {
  const requestedComponents = allComponents.filter((comp: any) =>
    componentNames.includes(comp.type),
  );

  const foundComponentNames = requestedComponents.map((comp: any) => comp.type);
  const notFoundComponents = componentNames.filter(name => !foundComponentNames.includes(name));

  return {
    found: requestedComponents,
    notFound: notFoundComponents,
  };
}
