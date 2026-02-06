/**
 * 组件工具 - 表单配置
 * 提供不同UI框架的默认表单配置
 */

/**
 * 获取默认表单选项（element-plus等框架使用）
 */
export function getDefaultFormOptions() {
  return {
    form: {
      labelPosition: 'right',
      labelWidth: '120px',
    },
    submitBtn: true,
    resetBtn: true,
  };
}