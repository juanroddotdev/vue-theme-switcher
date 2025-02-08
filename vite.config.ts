import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'VueThemeSwitcher',
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib')
    }
  }
});