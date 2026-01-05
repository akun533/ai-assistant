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

/**
 * 获取默认表单配置（ta404-ui使用）
 */
export function getDefaultFormConfig() {
  return {
    layout: 'horizontal',
    layoutCol: 'auto',
    labelCol: 6,
    wrapperCol: 18,
    header: '0px',
    footer: '0px',
    left: '0px',
    right: '0px',
    gutter: 0,
    previewDrawerWidth: '95%',
    previewDrawerMinWidth: '',
    showButton: true,
    buttons: [],
    backgroundColor: 'white',
  };
}
