<template>
    <div class="ai-panel">
        <!-- 对话头部 -->
        <div class="ai-header">
            <div class="ai-title">
                <i class="fas fa-robot"></i>
                <span class="ai-name">AI助理</span>
            </div>
            <div class="ai-actions" v-if="messages.length">
                <div class="ai-action-btn" @click="clearChat">
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>

        <!-- 对话内容区域 -->
        <div class="ai-content" :class="{ 'ai-content--centered': messages.length === 0 }" ref="chatContent">
            <!-- 欢迎消息 -->
            <div class="ai-welcome" v-if="messages.length === 0">
                <div class="ai-welcome-icon"></div>
                <h3>欢迎</h3>
                <p>使用我</p>

                <!-- 示例问题 -->
                <div class="ai-welcome-suggestions">
                    <div class="ai-suggestions-header">
                        <span>热门示例</span>
                        <div class="ai-refresh-btn" @click="refreshSuggestions">
                            <i class="fas fa-sync-alt"></i>
                            换一批
                        </div>
                    </div>
                    <div class="ai-suggestions-list">
                        <div
                            v-for="(suggestion, index) in suggestions"
                            :key="index"
                            class="ai-suggestion-item"
                            @click="selectSuggestion(suggestion)"
                        >
                            {{ suggestion }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 对话消息列表 -->
            <div class="ai-messages">
                <div v-for="(message, index) in messages" :key="index"
                     :class="['ai-message', `ai-message--${message.type}`]">
                    <!-- 用户消息 -->
                    <div v-if="message.type === 'user'" class="ai-message-content">
                        <div class="ai-message-bubble ai-message-bubble--user">
                            <div class="ai-message-text">{{ message.content }}</div>
                        </div>

                        <!-- 底部悬浮区域 -->
                        <div class="ai-message-footer">
                            <!-- 操作按钮 -->
                            <div class="ai-message-actions">
                                <div class="ai-action-btn" @click="rmMessage(index)">
                                    <i class="fas fa-trash-alt"></i>
                                </div>
                                <div class="ai-action-btn" @click="copyMessage(message.content)">
                                    <i class="fas fa-copy"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- AI 复合消息（包含文字、思考链、错误状态） -->
                    <div v-else-if="message.type === 'ai'" class="ai-message-content">
                        <div class="ai-message-avatar"
                             :class="{ 'ai-message-avatar--error': message.isError }"></div>
                        <div
                            class="ai-message-bubble"
                            :class="{
                                'ai-message-bubble--ai': !message.isError,
                                'ai-message-bubble--error': message.isError,
                                'ai-message-bubble--thinking': message.status === 'thinking',
                            }"
                        >
                            <template v-for="content in message.content">
                                <template v-if="content.type === 'tool'">
                                    <div v-if="content.steps && content.steps.length > 0"
                                         class="ai-thinking-section">
                                        <div class="ai-thinking-steps">
                                            <div
                                                v-for="(step, stepIndex) in content.steps"
                                                :key="stepIndex"
                                                :class="[
                                                    'ai-thinking-step',
                                                    { 'ai-thinking-step--active': isThinking && index === messages.length - 1 },
                                                ]"
                                            >
                                                <div
                                                    class="ai-thinking-step-icon"
                                                    :class="{
                                                        'ai-thinking-step-icon--executing':
                                                            step.status !== 'end' && isThinking && index === messages.length - 1,
                                                        'ai-thinking-step-icon--completed':
                                                            step.status === 'end' && isThinking && index === messages.length - 1,
                                                    }"
                                                >
                                                    <template v-if="messages.length - 1 === index && isThinking">
                                                        <svg v-if="step.status === 'end'" height="12"
                                                             viewBox="0 0 12 12" fill="none">
                                                            <path
                                                                d="M10 3L4.5 8.5L2 6"
                                                                stroke="currentColor"
                                                                stroke-width="1.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                        <div class="ai-thinking-step-loading" v-else></div>
                                                    </template>
                                                    <div class="ai-thinking-step-pending" v-else></div>
                                                </div>
                                                <span class="ai-thinking-step-text">{{ step.title }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="content.type === 'text'">
                                    <div v-if="content.text" class="ai-message-text">
                                        <MarkdownRenderer :content="content.text"/>
                                    </div>
                                </template>
                            </template>
                            <div v-if="message.isError" class="ai-message-text ai-message-text--error">
                              {{ message.errorMessage || '请求处理出错，请稍后重试' }}
                            </div>
                            <!-- 思考中状态 -->
                            <div class="ai-thinking-status" v-if="message.status === 'thinking'">
                                <div class="ai-thinking-indicator">
                                    <div class="ai-thinking-dot"></div>
                                    <div class="ai-thinking-dot"></div>
                                    <div class="ai-thinking-dot"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 底部悬浮区域 -->
                        <div class="ai-message-footer" v-if="!isThinking || index !== messages.length - 1">
                            <!-- 操作按钮 -->
                            <div class="ai-message-actions">
                                <div class="ai-action-btn" @click="rmMessage(index)">
                                    <i class="fas fa-trash-alt"></i>
                                </div>
                                <div class="ai-action-btn" @click="copyMessage(message.content)">
                                    <i class="fas fa-copy"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 输入区域 -->
        <div class="ai-input">
            <!-- 用户输入框 -->
            <div class="ai-input-container">
                <textarea
                    v-model="inputText"
                    @keydown="handleKeydown"
                    @input="handleInput"
                    placeholder="请输入您的问题..."
                    class="ai-input-field"
                    :disabled="isThinking"
                ></textarea>
                <div
                    class="ai-send-btn"
                    :class="{ 'ai-send-btn--disabled': !inputText.trim() && !isThinking }"
                    @click="sendMessage"
                >
                    <div class="fas fa-pause" v-if="isThinking"></div>
                    <div class="fas fa-paper-plane" v-else></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownRenderer from './MarkdownRenderer.vue';
import {copyTextToClipboard} from '../utils/utils.js';

export default {
    name: 'FcAiPanel',
    components: {
        MarkdownRenderer,
    },
    data() {
        return {
            page: 0,
            inputText: '',
            controller: null,
            isThinking: false,
            isUserAtBottom: true,
            suggestions: [],
            messages: [],
        };
    },

    computed: {
        api() {
          console.log(import.meta.env.VITE_API_URL)
            return  import.meta.env.VITE_API_URL ||  'https://api.form-create.com/ai/v2/chat/form';
        },
        token() {
            // 从环境变量获取 API 令牌
            let token = import.meta.env.VITE_AI_API_TOKEN || '';
            if (token && token.indexOf('Bearer') === -1) {
                token = `Bearer ${token}`;
            }
            return token;
        },
    },
    methods: {
        sendMessage() {
            if (this.isThinking) {
                this.isThinking = false;
                this.controller && this.controller.abort();
                return;
            }
            if (!this.inputText.trim()) return;

            const userMessage = {
                type: 'user',
                content: this.inputText.trim(),
                timestamp: new Date(),
            };

            this.messages.push(userMessage);
            this.inputText = '';

            // 发送消息后强制滚动到底部
            this.isUserAtBottom = true;
            this.$nextTick(() => {
                this.scrollToBottom();
            });

            this.simulateThinking();
        },

        async simulateThinking() {
            this.isThinking = true;

            const aiMessage = {
                type: 'ai',
                content: [],
                status: 'thinking',
                timestamp: new Date(),
            };

            this.messages.push(aiMessage);
            this.saveHistory();

            this.callAiApi(aiMessage);
        },

        async callAiApi(aiMessage) {
            try {
                aiMessage.status = 'thinking';
                aiMessage.errorMessage = '';

                // 获取最后一条用户消息
                const userMessages = this.messages.filter(msg => msg.type === 'user');
                const lastUserMessage = userMessages[userMessages.length - 1];

                // 检查是否有有效的API令牌
                if (!this.token) {
                    throw new Error('缺少API访问令牌');
                }

                this.controller = new AbortController();
                const response = await fetch(this.api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: this.token,
                    },
                    body: JSON.stringify({
                      "ui": "ta404ui@vue2",
                      "basic": true,
                      "form": {
                        "rule": "[]",
                        "option": "{\"form\":{\"inline\":false,\"hideRequiredAsterisk\":false,\"labelPosition\":\"right\",\"size\":\"default\",\"labelWidth\":\"125px\"},\"resetBtn\":{\"show\":false,\"innerText\":\"重置\"},\"submitBtn\":{\"show\":true,\"innerText\":\"提交\"}}"
                      },
                      "messages": [
                        {
                          "role": "user",
                          "content": "添加一个标签组件，显示文本为 \"Tag\""
                        }
                      ]
                    }),
                    signal: this.controller.signal,
                });

                if (!response.ok) {
                    let errorMessage = `HTTP error! status: ${response.status}`;
                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.message || errorData.error || errorMessage;
                    } catch (e) {
                        // 如果无法解析错误响应，则使用默认消息
                    }
                    throw new Error(errorMessage);
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let fullText = '';
                let buffer = '';

                while (true) {
                    const {done, value} = await reader.read();
                    if (done) {
                        break;
                    }

                    const chunk = decoder.decode(value, {stream: true});

                    buffer += chunk;
                    const lines = buffer.split('\n');
                    buffer = lines.pop() || ''; // 保留不完整的行

                    for (const line of lines) {
                        const trimmedLine = line.trim();
                        if (trimmedLine.startsWith('data: ')) {
                            const data = trimmedLine.slice(6);

                            if (data === '[DONE]') {
                                aiMessage.status = 'completed';
                                this.isThinking = false;
                                this.$forceUpdate();
                                this.saveHistory();
                                return;
                            }

                            try {
                                const parsed = JSON.parse(data);

                                let content = parsed.choices?.[0]?.delta?.content;
                                if (content) {
                                    if (content.startsWith('[FC_TOOL]')) {
                                        const tool = JSON.parse(content.replace('[FC_TOOL]', ''));
                                        this.updateStep(aiMessage, tool);
                                        fullText = '';
                                    } else {
                                        if (content.trim().startsWith('``fcRuleDiff')) {
                                            content = `\n\`\`\`fcRuleDiff\n${JSON.stringify({
                                                newJson: content.trim().slice(13, -3).trim(),
                                                oldJson: '{}',
                                            })}\n\`\`\`\n`;
                                        }
                                        fullText += content;
                                        let message = aiMessage.content[aiMessage.content.length - 1];
                                        if (!message || message.type !== 'text') {
                                            message = {type: 'text', text: ''};
                                            aiMessage.content.push(message);
                                        }
                                        message.text = fullText.trim();
                                    }

                                    this.$forceUpdate();
                                }
                            } catch (e) {
                                console.warn('解析流数据失败:', e, '数据:', data);
                            }
                        }
                    }
                }

                aiMessage.status = 'completed';
                this.isThinking = false;
                this.$forceUpdate();
            } catch (error) {
                console.error('AI API 调用失败:', error);
                this.isThinking = false;
                if (error.name === 'AbortError') {
                    aiMessage.status = 'completed';
                } else {
                    aiMessage.status = 'error';
                    aiMessage.isError = true;
                    aiMessage.errorMessage = error.message || '请求过程中发生未知错误';
                }
                this.$forceUpdate();
            }
            this.saveHistory();
        },
        updateStep(aiMessage, tool) {
            let flag = false;
            if (tool.id) {
                aiMessage.content.forEach(message => {
                    if (message.type === 'tool') {
                        message.steps.forEach(step => {
                            if (step.id === tool.id) {
                                step.title = tool.title;
                                step.status = tool.status;
                                flag = true;
                            }
                        });
                    }
                });
            }
            if (!flag) {
                let message = aiMessage.content[aiMessage.content.length - 1];
                if (!message || message.type !== 'tool') {
                    message = {type: 'tool', steps: []};
                    aiMessage.content.push(message);
                }
                message.steps.push({
                    title: tool.title,
                    status: tool.status,
                    id: tool.id,
                });
            }
        },
        handleKeydown(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                this.sendMessage();
            }
        },
        handleInput() {
            const textarea = event.target;
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
        },
        copyMessage(content) {
            if (typeof content === 'string') {
                copyTextToClipboard(content);
            } else {
                const textContent = content
                    .map(item => {
                        if (item.type === 'text') {
                            return item.text;
                        }
                        return '';
                    })
                    .filter(text => !!text)
                    .join('\n')
                    .trim();
                copyTextToClipboard(textContent);
            }
        },
        rmMessage(index) {
            this.messages.splice(index, 1);
        },
        clearChat() {
            this.messages = [];
            this.inputText = '';
            this.isThinking = false;
            localStorage.removeItem('fc_ai_chat');
        },
        refreshSuggestions() {
            const allSuggestions = [
                '生成一个就诊满意度问卷表单',
                '创建一个建议收集表单，包含联系人、联系邮箱、分类和建议内容',
                '追加一个用户信息表单',
                '添加一个标签组件，显示文本为 "Tag"',
                '生成一个Vue组件，实现金额输入框',
                '生成一个js版本的高精度加法',
                '添加一个日期选择器组件，用于选择出生日期',
                '删除商品简介字段',
                '当单选框选择 "选项1" 时，显示输入框组件',
                '设置输入框为必填，并限制长度必须大于13',
                '商品价格字段使用数字输入框组件',
                '给输入类组件补充占位提示文本（placeholder）',
                '添加手机号格式验证',
                '添加自定义验证：确认密码必须与密码一致',
                '将姓名和手机号并排显示在同一行',
            ];

            if (this.page * 4 < allSuggestions.length) {
                this.page++;
            } else {
                this.page = 1;
            }
            const startIndex = (this.page - 1) * 4;
            const endIndex = startIndex + 4;

            this.suggestions = allSuggestions.slice(startIndex, endIndex);
        },
        selectSuggestion(suggestion) {
            this.inputText = suggestion;
            this.sendMessage();
        },
        scrollToBottom() {
            const content = this.$refs.chatContent;
            if (content && this.isUserAtBottom) {
                content.scrollTop = content.scrollHeight;
            }
        },
        // 检查用户是否在滚动条底部
        checkIfUserAtBottom() {
            const content = this.$refs.chatContent;
            if (content) {
                const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 20;
                this.isUserAtBottom = isAtBottom;
            }
        },
        // 处理滚动事件
        handleScroll() {
            this.checkIfUserAtBottom();
        },
        getHistory() {
            const data = localStorage.getItem('fc_ai_chat');
            if (data) {
                this.messages = JSON.parse(data) || [];
            }
        },
        saveHistory() {
            localStorage.setItem('fc_ai_chat', JSON.stringify(this.messages));
        },
        importCode(blockId) {
            const container = document.querySelector(`[data-block-id="${blockId}"]`);
            if (container) {
                const codeElement = container.querySelector('code');
                if (codeElement) {
                    // 注释掉未使用的代码
                    // const rule = viewForm.parseJson(codeElement.innerText);
                    // if (Array.isArray(rule)) {
                    //     this.designer.setupState.setRule(rule);
                    // } else if (rule.rule) {
                    //     this.designer.setupState.setRule(rule.rule);
                    // }
                    console.log('Import code functionality would be implemented here');
                }
            }
        },
    },
    created() {
        this.getHistory();
        this.refreshSuggestions();
    },
    mounted() {
        this.$nextTick(() => {
            this.scrollToBottom();
            // 添加滚动事件监听
            const content = this.$refs.chatContent;
            if (content) {
                content.addEventListener('scroll', this.handleScroll);
            }
        });
    },

    beforeUnmount() {
        // 清理滚动事件监听
        const content = this.$refs.chatContent;
        if (content) {
            content.removeEventListener('scroll', this.handleScroll);
        }
        // 清理全局方法
        delete window._fd_copyCode;
        delete window._fd_importCode;
    },

    updated() {
        // 只在用户位于底部时才自动滚动
        this.$nextTick(() => {
            this.scrollToBottom();
        });
    },
};
</script>

<style scoped>
@import "../assets/ai-panel.css";
</style>