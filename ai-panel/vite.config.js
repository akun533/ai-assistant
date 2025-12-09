import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  server: {
    port: 3000
  },
  build: command === 'build' ? {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/components/AiPanel.vue'),
      name: 'AiPanel',
      fileName: 'ai-panel'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  } : {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}))