import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Add this for GitHub Pages compatibility
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'VueThemeSwitcher',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    fs: {
      strict: true
    }
  }
});