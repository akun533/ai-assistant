<template>
    <div class="markdown-renderer" v-html="renderedMarkdown"></div>
</template>

<script>
import {marked} from 'marked';
import hljs from 'highlight.js';
import {copyTextToClipboard} from '../utils/utils.js';
import {generateLineDiff} from '../utils/jsonDiff.js';

export default {
    name: 'MarkdownRenderer',
    props: {
        content: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        renderedMarkdown() {
            if (!this.content) return '';

            // 配置 marked
            const renderer = new marked.Renderer();

            // 重写代码块渲染器
            renderer.code = ({text, lang}) => {
                // 如果是 diff 语言，使用特殊的差异渲染
                if (lang === 'fcRuleDiff') {
                    return this.renderDiffCode(text, lang);
                }

                const highlighted = this.highlightCode(text, lang);
                return `<pre><code class="language-${lang || 'text'}">${highlighted}</code></pre>`;
            };

            // 重写链接渲染器，让链接在新窗口打开
            renderer.link = ({href, title, text}) => {
                const titleAttr = title ? ` title="${title}"` : '';
                return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
            };

            // 配置 marked 选项
            marked.setOptions({
                renderer: renderer,
                breaks: true,
                gfm: true,
            });

            // 渲染 markdown
            const html = marked.parse(this.content);

            // 后处理，添加交互功能
            return this.postprocessHtml(html);
        },
    },
    methods: {
        // 后处理HTML，添加复制功能
        postprocessHtml(html) {
            // 为代码块添加复制按钮和语言显示
            return html.replace(/<pre><code[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/code><\/pre>/g, (match, className, codeContent) => {
                const blockId = this.generateBlockId();
                
                // 从 className 中提取语言信息
                const languageMatch = className.match(/language-(\w+)/);
                const language = languageMatch ? languageMatch[1] : 'text';
                return `
                    <div class="code-block-container" data-block-id="${blockId}">
                        <div class="code-block-header">
                            <span class="code-language">${language}</span>
                            <div class="code-block-actions">
                                <div class="code-action-item" onclick="_fd_copyCode('${blockId}')">
                                    <i class="fas fa-copy"></i>
                                    <span class="code-action-text">复制</span>
                                </div>
                                ${
                        language === 'fcRule'
                            ? `<div class="code-action-item is-primary" onclick="_fd_importCode('${blockId}')">
                                    <i class="fas fa-file-import"></i>
                                    <span class="code-action-text">导入</span>
                                </div>`
                            : ''
                    }
                            </div>
                        </div>
                        <pre><code class="${className}">${codeContent}</code></pre>
                    </div>
                `;
            });
        },

        // 代码高亮
        highlightCode(code, language) {
            if (language && hljs.getLanguage(language)) {
                try {
                    return hljs.highlight(code, {language}).value;
                } catch (err) {
                    console.warn('代码高亮失败:', err);
                }
            }
            return hljs.highlightAuto(code).value;
        },

        // 生成唯一的代码块ID
        generateBlockId() {
            return 'code-block-' + Math.random().toString(36).substr(2, 9);
        },

        // 复制代码
        copyCode(blockId) {
            const container = document.querySelector(`[data-block-id="${blockId}"]`);
            if (container) {
                const codeElement = container.querySelector('code');
                if (codeElement) {
                    copyTextToClipboard(codeElement.innerText);
                    
                    // 显示复制成功的反馈
                    const copyButton = container.querySelector('.code-action-item[onclick*="_fd_copyCode"]');
                    if (copyButton) {
                        const originalText = copyButton.innerHTML;
                        copyButton.innerHTML = '<i class="fas fa-check"></i><span class="code-action-text">已复制</span>';
                        setTimeout(() => {
                            copyButton.innerHTML = originalText;
                        }, 2000);
                    }
                }
            }
        },

        // 导入数据
        importCode(blockId) {
            const container = document.querySelector(`[data-block-id="${blockId}"]`);
            if (container) {
                const codeElement = container.querySelector('code');
                if (codeElement) {
                    // const rule = viewForm.parseJson(codeElement.innerText);
                    // if (Array.isArray(rule)) {
                    //     this.designer.setupState.setRule(rule);
                    // } else if (rule.rule) {
                    //     this.designer.setupState.setRule(rule.rule);
                    // }
                }
            }
        },

        // 渲染差异代码
        renderDiffCode(text, lang) {
            try {
                // 尝试解析 JSON 差异数据
                const diffData = JSON.parse(text);

                if (diffData.oldJson && diffData.newJson) {
                    // 生成差异信息
                    const lineDiff = generateLineDiff(JSON.parse(diffData.oldJson), JSON.parse(diffData.newJson));

                    // 生成差异 HTML
                    return this.generateDiffHtml(lineDiff, diffData.newJson);
                }
            } catch (e) {
                // 如果不是有效的 JSON，按普通代码处理
                console.warn('解析差异数据失败:', e);
            }

            // 回退到普通代码渲染
            const highlighted = this.highlightCode(text, 'text');
            return `<pre><code class="language-text">${highlighted}</code></pre>`;
        },

        // 生成差异 HTML
        generateDiffHtml(lineDiff, newJSON) {
            const blockId = this.generateBlockId();
            
            let html = `
                <div class="code-block-container" data-block-id="${blockId}">
                    <div class="code-block-header">
                        <span class="code-language">DIFF</span>
                            <div class="code-block-actions">
                                <div class="code-action-item" onclick="_fd_copyCode('${blockId}')">
                                    <i class="fas fa-copy"></i>
                                    <span class="code-action-text">复制</span>
                                </div>
                                <div class="code-action-item is-primary" onclick="_fd_importCode('${blockId}')">
                                    <i class="fas fa-file-import"></i>
                                    <span class="code-action-text">导入</span>
                                </div>
                            </div>
                    </div>
                    <div class="diff-content">
                        <div class="diff-view diff-line-view" id="diff-line-${blockId}">
                            ${this.generateLineDiffHtml(lineDiff)}
                        </div>
                    </div>
                    <code style="display: none;">${newJSON}</code>
                </div>
            `;
            
            return html;
        },

        // 生成行级差异 HTML
        generateLineDiffHtml(lineDiff) {
            let html = '<div class="diff-lines">';

            lineDiff.forEach((line, index) => {
                let lineClass = `diff-line diff-line-${line.type}`;

                // 如果是上下文行，添加特殊样式
                if (line.isContext) {
                    lineClass += ' diff-context';
                }

                const lineNumber = line.lineNumber;

                // 如果是相同内容，只显示一行
                if (line.isSame) {
                    html += `
                        <div class="${lineClass}">
                            <div class="diff-line-number">${lineNumber}</div>
                            <div class="diff-line-content">
                                <div class="diff-same-line">${this.escapeHtml(line.oldLine)}</div>
                            </div>
                        </div>
                    `;
                } else {
                    // 有差异的内容，显示两行
                    html += `
                        <div class="${lineClass}">
                            <div class="diff-line-number">${lineNumber}</div>
                            <div class="diff-line-content">
                                ${line.oldLine ? `<div class="diff-old-line">${this.escapeHtml(line.oldLine)}</div>` : ''}
                                ${line.newLine ? `<div class="diff-new-line">${this.escapeHtml(line.newLine)}</div>` : ''}
                            </div>
                        </div>
                    `;
                }
            });

            html += '</div>';
            return html;
        },

        // HTML 转义
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        },
    },

    mounted() {
        // 将方法绑定到全局，供HTML中的onclick使用
        window._fd_copyCode = this.copyCode;
        window._fd_importCode = this.importCode;
    },
};
</script>

<style scoped>
</style>
