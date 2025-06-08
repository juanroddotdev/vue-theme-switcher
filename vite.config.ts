import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/index.ts'),
        'style': resolve(__dirname, 'lib/styles/main.scss'),
        'themes': resolve(__dirname, 'lib/styles/themes.scss'),
        'themes/sunset': resolve(__dirname, 'lib/styles/themes/sunset.scss'),
        'themes/forest': resolve(__dirname, 'lib/styles/themes/forest.scss'),
        'themes/ocean': resolve(__dirname, 'lib/styles/themes/ocean.scss'),
        'themes/galaxy': resolve(__dirname, 'lib/styles/themes/galaxy.scss')
      },
      name: 'VueThemeSwitcher',
      fileName: (format, entryName) => {
        if (entryName.startsWith('themes/') || entryName === 'style' || entryName === 'themes') {
          return `${entryName}.css`;
        }
        return `index.js`;
      },
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          if (assetInfo.name === 'themes.css') return 'themes.css';
          if (assetInfo.name && assetInfo.name.startsWith('sunset.css')) return 'themes/sunset.css';
          if (assetInfo.name && assetInfo.name.startsWith('forest.css')) return 'themes/forest.css';
          if (assetInfo.name && assetInfo.name.startsWith('ocean.css')) return 'themes/ocean.css';
          if (assetInfo.name && assetInfo.name.startsWith('galaxy.css')) return 'themes/galaxy.css';
          return assetInfo.name || 'unknown.css';
        }
      }
    },
    cssCodeSplit: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib')
    }
  }
});