<template>
  <div class="ai-panel">
    <!-- 对话头部 -->
    <div class="ai-header">
      <div class="ai-title">
        <RobotIcon />
        <span class="ai-name">{{ config.title }}</span>
      </div>
      <div class="ai-actions" v-if="messages.length">
        <div class="ai-action-btn" @click="clearChat" :title="config.clearChat">
          <TrashIcon />
        </div>
      </div>
    </div>

    <!-- 对话内容区域 -->
    <div class="ai-content" :class="{ 'ai-content--centered': messages.length === 0 }" ref="chatContent">
      <!-- 欢迎消息 -->
      <div class="ai-welcome" v-if="messages.length === 0">
        <div class="ai-welcome-icon"></div>
        <h3>{{ config.welcomeTitle }}</h3>
        <p>{{ config.welcomeMessage }}</p>

        <!-- 示例问题 -->
        <div class="ai-welcome-suggestions" v-if="suggestions.length">
          <div class="ai-suggestions-header">
            <span>{{ config.suggestionsTitle }}</span>
            <div class="ai-refresh-btn" @click="refreshSuggestions">
              <SyncIcon />
              {{ config.refreshSuggestions }}
            </div>
          </div>
          <div class="ai-suggestions-list">
            <div v-for="(suggestion, index) in suggestions" :key="index" class="ai-suggestion-item" @click="selectSuggestion(suggestion)">
              {{ suggestion }}
            </div>
          </div>
        </div>
      </div>

      <!-- 对话消息列表 -->
      <div class="ai-messages">
        <div v-for="(message, index) in messages" :key="index" :class="['ai-message', `ai-message--${message.role}`]">
          <!-- 用户消息 -->
          <div v-if="message.role === 'user'" class="ai-message-content">
            <div class="ai-message-bubble ai-message-bubble--user">
              <div class="ai-message-text">{{ message.content }}</div>
            </div>
            <!-- 底部操作按钮 -->
            <div class="ai-message-footer">
              <div class="ai-message-actions">
                <div class="ai-action-btn" @click="rmMessage(index)" :title="config.deleteMessage">
                  <TrashIcon />
                </div>
                <div class="ai-action-btn" @click="copyMessage(message.content)" :title="config.copyMessage">
                  <CopyIcon />
                </div>
              </div>
            </div>
          </div>

          <!-- AI 助手消息 -->
          <div v-else-if="message.role === 'assistant'" class="ai-message-content">
            <div class="ai-message-avatar"></div>
            <div class="ai-message-bubble ai-message-bubble--ai">
              <div v-if="message.status === 'thinking'" class="ai-thinking-status">
                <div class="ai-thinking-indicator">
                  <div class="ai-thinking-dot"></div>
                  <div class="ai-thinking-dot"></div>
                  <div class="ai-thinking-dot"></div>
                </div>
              </div>
              <div v-else-if="message.isError" class="ai-message-text ai-message-text--error">
                {{ message.errorMessage || '请求处理出错，请稍后重试' }}
              </div>
              <div v-else class="ai-message-text">
                <MarkdownRenderer :content="message.content" @import="importText" />
              </div>
            </div>
            <!-- 底部操作按钮 -->
            <div class="ai-message-footer" v-if="message.status !== 'thinking'">
              <div class="ai-message-actions">
                <div class="ai-action-btn" @click="rmMessage(index)" :title="config.deleteMessage">
                  <TrashIcon />
                </div>
                <div class="ai-action-btn" @click="copyMessage(message.content)" :title="config.copyMessage">
                  <CopyIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="ai-input">
      <!-- 已上传的图片 -->
      <div v-if="uploadedImages.length > 0" class="ai-uploaded-images">
        <div v-for="(img, index) in uploadedImages" :key="index" class="ai-uploaded-image-item">
          <img :src="img.preview" :alt="img.name" class="ai-image-thumbnail" />
          <span class="ai-image-name" :title="img.name">{{ img.name }}</span>
          <div class="ai-image-remove" @click="removeImage(index)" :title="config.deleteMessage || '删除'">
            <CloseIcon />
          </div>
        </div>
      </div>

      <div class="ai-input-container">
        <!-- 图片上传按钮 -->
        <div class="ai-image-upload-btn" @click="triggerImageUpload" :title="config.uploadImage">
          <FileImportIcon />
        </div>
        
        <!-- 隐藏的文件输入框 -->
        <input
          ref="fileInput"
          type="file"
          multiple
          accept="image/*"
          hidden
          @change="handleImageUpload"
        />

        <textarea
          v-model="inputText"
          @keydown="handleKeydown"
          @input="handleInput"
          :placeholder="config.inputPlaceholder"
          class="ai-input-field"
          :disabled="isThinking"
          rows="1"
        ></textarea>
        <div class="ai-send-btn" :class="{ 'ai-send-btn--disabled': !canSend }" @click="sendMessage">
          <PauseIcon v-if="isThinking" />
          <PaperPlaneIcon v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownRenderer from './MarkdownRenderer.vue';
import { copyTextToClipboard } from '../utils/utils.js';
import { RobotIcon, TrashIcon, SyncIcon, CopyIcon, PaperPlaneIcon, PauseIcon, FileImportIcon, CloseIcon } from './icons';

export default {
  name: 'AiPanel',
  components: {
    MarkdownRenderer,
    RobotIcon,
    TrashIcon,
    SyncIcon,
    CopyIcon,
    PaperPlaneIcon,
    PauseIcon,
    FileImportIcon,
    CloseIcon,
  },
  props: {
    // API 配置
    apiUrl: {
      type: String,
      default: 'http://localhost:3001/api/chat/completions',
    },
    apiToken: {
      type: String,
      default: '',
    },
    // 默认模型
    defaultModel: {
      type: String,
      default: 'deepseek-chat',
    },
    // 默认 Agent
    defaultAgent: {
      type: String,
      default: 'deepseek',
    },
    // 配置选项
    config: {
      type: Object,
      default: () => ({
        title: 'AI 助理',
        clearChat: '清空对话',
        deleteMessage: '删除消息',
        copyMessage: '复制',
        uploadImage: '上传图片',
        welcomeTitle: '欢迎使用 AI 助理',
        welcomeMessage: '有什么我可以帮助你的吗？',
        suggestionsTitle: '示例问题',
        refreshSuggestions: '换一批',
        inputPlaceholder: '请输入您的问题...',
        ocrRecognizing: '正在识别图片内容...',
        ocrComplete: '图片识别完成',
        ocrFailed: '图片识别失败',
      }),
    },
    // 初始消息（用于加载历史对话）
    initialMessages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      inputText: '',
      controller: null,
      isThinking: false,
      isUserAtBottom: true,
      suggestions: [],
      messages: [],
      // 图片上传相关
      uploadedImages: [],
    };
  },
  computed: {
    token() {
      let token = this.apiToken;
      if (token && !token.startsWith('Bearer ')) {
        token = `Bearer ${token}`;
      }
      return token;
    },
    
    // 判断是否可以发送消息
    canSend() {
      return (this.inputText.trim() || this.uploadedImages.length > 0) && !this.isThinking;
    },
  },
  methods: {
    // 触发图片上传
    triggerImageUpload() {
      this.$refs.fileInput.click();
    },
    
    // 处理图片上传
    async handleImageUpload(event) {
      const files = event.target.files;
      if (!files || files.length === 0) return;
      
      // 重置文件输入框，以便可以重复选择同一文件
      event.target.value = '';
      
      // 处理每个上传的文件
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        
        // 创建预览 URL
        const preview = URL.createObjectURL(file);
        
        // 将图片转为 base64
        const base64 = await this.fileToBase64(file);
        
        this.uploadedImages.push({
          file,
          name: file.name,
          preview,
          base64,
          id: Date.now() + Math.random(),
        });
      }
    },
    
    // 将文件转为 base64
    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    
    // 移除已上传的图片
    removeImage(index) {
      const image = this.uploadedImages[index];
      // 释放预览 URL
      if (image.preview) {
        URL.revokeObjectURL(image.preview);
      }
      this.uploadedImages.splice(index, 1);
    },
    
    // 发送消息
    async sendMessage() {
      if (this.isThinking) {
        this.isThinking = false;
        this.controller && this.controller.abort();
        return;
      }
      
      // 如果没有文本且没有图片，则不能发送
      if (!this.inputText.trim() && this.uploadedImages.length === 0) return;
      
      // 准备消息内容
      const content = this.inputText.trim();
      const images = this.uploadedImages.map(img => img.base64);
      
      // 添加用户消息
      const userMessage = {
        role: 'user',
        content,
        images,
        timestamp: new Date(),
      };
      
      this.messages.push(userMessage);
      this.inputText = '';
      
      // 清空已上传的图片
      this.uploadedImages.forEach(img => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
      this.uploadedImages = [];
      
      // 滚动到底部
      this.isUserAtBottom = true;
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      
      this.callAiApi();
    },

    async callAiApi() {
      const aiMessage = {
        role: 'assistant',
        content: '',
        status: 'thinking',
        timestamp: new Date(),
        isError: false,
        errorMessage: '',
      };

      this.messages.push(aiMessage);
      this.saveHistory();

      try {
        this.controller = new AbortController();

        // 准备消息（OpenAI 标准格式）
        const messagesPayload = this.messages
          .filter(m => m.role === 'user' || m.role === 'assistant')
          .map(m => ({
            role: m.role,
            content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content),
          }));

        const requestBody = {
          model: this.defaultModel,
          agent: this.defaultAgent,
          messages: messagesPayload,
        };

        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.token,
          },
          body: JSON.stringify(requestBody),
          signal: this.controller.signal,
        });

        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
          } catch (e) {}
          throw new Error(errorMessage);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          buffer += chunk;
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

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
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  aiMessage.content += content;
                  this.$forceUpdate();
                }
              } catch (e) {
                // 忽略解析错误
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
          aiMessage.status = 'completed';
          aiMessage.isError = true;
          aiMessage.errorMessage = error.message || '请求过程中发生未知错误';
        }
        this.$forceUpdate();
      }
      this.saveHistory();
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
      const text = typeof content === 'string' ? content : String(content);
      copyTextToClipboard(text);
    },

    rmMessage(index) {
      this.messages.splice(index, 1);
      this.saveHistory();
    },

    clearChat() {
      // 清理图片预览 URL
      this.uploadedImages.forEach(img => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
      this.messages = [];
      this.inputText = '';
      this.uploadedImages = [];
      this.isThinking = false;
      localStorage.removeItem('ai_chat_messages');
    },

    refreshSuggestions() {
      const allSuggestions = [
        '你好，请介绍一下你自己',
        '帮我写一个 Python 快速排序算法',
        '解释一下什么是 RESTful API',
        '用简单的话解释什么是机器学习',
      ];

      if (this.page * 4 < allSuggestions.length) {
        this.page++;
      } else {
        this.page = 1;
      }
      const startIndex = (this.page - 1) * 4;
      this.suggestions = allSuggestions.slice(startIndex, startIndex + 4);
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

    checkIfUserAtBottom() {
      const content = this.$refs.chatContent;
      if (content) {
        const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 20;
        this.isUserAtBottom = isAtBottom;
      }
    },

    handleScroll() {
      this.checkIfUserAtBottom();
    },

    saveHistory() {
      // 只保存 role 和 content，移除状态信息和图片
      const history = this.messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      localStorage.setItem('ai_chat_messages', JSON.stringify(history));
    },

    loadHistory() {
      const data = localStorage.getItem('ai_chat_messages');
      if (data) {
        try {
          const history = JSON.parse(data);
          this.messages = history.map(m => ({
            ...m,
            timestamp: new Date(),
            status: 'completed',
            isError: false,
            errorMessage: '',
          }));
        } catch (e) {
          this.messages = [];
        }
      } else if (this.initialMessages.length > 0) {
        this.messages = this.initialMessages.map(m => ({
          ...m,
          timestamp: new Date(),
          status: 'completed',
        }));
      }
    },

    importText(text) {
      this.$emit('importText', text);
    },

    // 公开方法：设置消息
    setMessages(messages) {
      this.messages = messages.map(m => ({
        ...m,
        timestamp: new Date(),
        status: 'completed',
        isError: false,
        errorMessage: '',
      }));
    },

    // 公开方法：添加消息
    addMessage(role, content) {
      this.messages.push({
        role,
        content,
        timestamp: new Date(),
        status: 'completed',
      });
      this.saveHistory();
    },

    // 公开方法：获取消息
    getMessages() {
      return this.messages.filter(m => m.role === 'user' || m.role === 'assistant');
    },
  },
  data() {
    return {
      page: 0,
      ...this.$options.data(),
    };
  },
  created() {
    this.loadHistory();
    this.refreshSuggestions();
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollToBottom();
      const content = this.$refs.chatContent;
      if (content) {
        content.addEventListener('scroll', this.handleScroll);
      }
    });
  },
  beforeUnmount() {
    // 清理资源
    this.uploadedImages.forEach(img => {
      if (img.preview) URL.revokeObjectURL(img.preview);
    });
    
    const content = this.$refs.chatContent;
    if (content) {
      content.removeEventListener('scroll', this.handleScroll);
    }
  },
  updated() {
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
};
</script>

<style scoped>
.ai-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.ai-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  border-bottom: 1px solid #ececec;
  background: #ffffff;
  flex-shrink: 0;
}

.ai-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ai-name {
  font-weight: 600;
  color: #262626;
  font-size: 14px;
}

.ai-actions {
  display: flex;
  gap: 8px;
}

.ai-action-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  border-radius: 3px;
  color: #666666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  opacity: 0.8;
}

.ai-action-btn:hover {
  background: #f5f5f5;
  color: #262626;
  opacity: 1;
}

.ai-content {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
}

.ai-content--centered {
  justify-content: center;
  align-items: center;
}

.ai-welcome {
  text-align: center;
  padding: 20px;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

.ai-welcome-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background-color: #f5f5f5;
  border-radius: 50%;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>');
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;
}

.ai-welcome h3 {
  margin: 0 0 12px;
  color: #262626;
  font-size: 24px;
  font-weight: 600;
}

.ai-welcome p {
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.6;
  color: #666666;
}

.ai-welcome-suggestions {
  text-align: left;
}

.ai-suggestions-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.ai-suggestions-header span {
  font-size: 14px;
  font-weight: 500;
  color: #262626;
}

.ai-refresh-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: #aaaaaa;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.ai-refresh-btn:hover {
  background: #f5f5f5;
  color: #262626;
}

.ai-suggestions-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.ai-suggestion-item {
  padding: 12px 16px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background: #f5f5f5;
  color: #262626;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.4;
}

.ai-suggestion-item:hover {
  border-color: #2e73ff;
  background: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ai-messages {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.ai-message {
  display: flex;
  flex-direction: column;
}

.ai-message-content {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  position: relative;
}

.ai-message-content:hover .ai-message-footer {
  display: flex;
}

.ai-message--user .ai-message-content,
.ai-message--user .ai-message-actions {
  flex-direction: row-reverse;
}

.ai-message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f5f5;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.ai-message-bubble {
  min-width: 40px;
  min-height: 21px;
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 12px;
  position: relative;
  word-wrap: break-word;
  margin-bottom: 35px;
}

.ai-message-bubble--user {
  background: #2e73ff;
  color: white;
  border-bottom-right-radius: 4px;
}

.ai-message-bubble--ai {
  background: #f5f5f5;
  color: #262626;
  border-bottom-left-radius: 4px;
}

.ai-message-text {
  font-size: 14px;
  line-height: 1.5;
}

.ai-message-text--error {
  color: #ff2e2e;
  font-weight: 500;
}

.ai-message-actions {
  display: flex;
  gap: 4px;
}

.ai-message-footer {
  position: absolute;
  bottom: 6px;
  left: 43px;
  display: none;
  align-items: center;
  gap: 8px;
}

.ai-message--user .ai-message-footer {
  right: 0;
  left: unset;
}

.ai-thinking-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ai-thinking-indicator {
  display: flex;
  gap: 3px;
}

.ai-thinking-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #666666;
  animation: thinking-pulse 1.4s ease-in-out infinite both;
}

.ai-thinking-dot:nth-child(1) { animation-delay: -0.32s; }
.ai-thinking-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes thinking-pulse {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

.ai-ocr-results {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.ai-ocr-item {
  margin-bottom: 8px;
  font-size: 13px;
}

.ai-ocr-label {
  font-weight: 600;
  margin-right: 8px;
}

.ai-ocr-text {
  opacity: 0.9;
}

.ai-input {
  padding: 20px 24px;
  background: #ffffff;
  flex-shrink: 0;
}

.ai-ocr-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #e8f5e9;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 13px;
  color: #2e7d32;
}

.ai-ocr-status-icon {
  width: 16px;
  height: 16px;
  border: 2px solid #2e7d32;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ai-uploaded-images {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.ai-uploaded-image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 8px;
  position: relative;
}

.ai-uploaded-image-item:hover {
  background: #ececec;
}

.ai-image-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid #ececec;
}

.ai-image-name {
  font-size: 11px;
  color: #666666;
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.ai-image-remove {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  background: rgba(255, 82, 82, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.ai-uploaded-image-item:hover .ai-image-remove {
  opacity: 1;
}

.ai-image-upload-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #666666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.ai-image-upload-btn:hover {
  background: #ececec;
  color: #262626;
}

.ai-input-container {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  background: #f5f5f5;
  border-radius: 15px;
  padding: 12px 16px;
  border: 1px solid #ececec;
  transition: all 0.2s ease;
}

.ai-input-container:focus-within {
  border-color: #2e73ff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.ai-input-field {
  flex: 1;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-size: 15px;
  line-height: 1.6;
  color: #262626;
  min-height: 24px;
  max-height: 120px;
  font-family: inherit;
  padding: 4px 0;
}

.ai-input-field::placeholder {
  color: #aaaaaa;
}

.ai-send-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #2e73ff;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.ai-send-btn:hover:not(.ai-send-btn--disabled) {
  transform: translateY(-1px);
}

.ai-send-btn--disabled {
  background: #aaaaaa;
  cursor: not-allowed;
  opacity: 0.5;
}

.ai-content {
  scrollbar-width: thin;
  scrollbar-color: #ececec transparent;
}

.ai-content::-webkit-scrollbar {
  width: 6px;
}

.ai-content::-webkit-scrollbar-track {
  background: transparent;
}

.ai-content::-webkit-scrollbar-thumb {
  background: #ececec;
  border-radius: 3px;
}

.ai-content::-webkit-scrollbar-thumb:hover {
  background: #aaaaaa;
}

.markdown-renderer {
  line-height: 1.6;
  color: #262626;
}
</style>
