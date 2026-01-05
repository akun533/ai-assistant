/**
 * 表单工具常量定义
 */

export const DEFAULT_UI_FRAMEWORK = 'element-plus';
export const DEFAULT_VUE_VERSION = 'vue3';

export const SUPPORTED_UI_FRAMEWORKS = ['element-plus', 'element-ui', 'ant-design-vue', 'vant', 'ta404-ui'] as const;
export const SUPPORTED_VUE_VERSIONS = ['vue2', 'vue3', 'auto'] as const;

export type SupportedUIFramework = (typeof SUPPORTED_UI_FRAMEWORKS)[number];
export type SupportedVueVersion = (typeof SUPPORTED_VUE_VERSIONS)[number];
