import { ref, watchEffect } from 'vue';

const STORAGE_KEY = 'selected-theme';
const themes = ['sunset', 'forest', 'ocean', 'galaxy'];

export function useTheme() {
  const currentTheme = ref(localStorage.getItem(STORAGE_KEY) || 'sunset');

  const setTheme = (theme) => {
    if (themes.includes(theme)) {
      currentTheme.value = theme;
      localStorage.setItem(STORAGE_KEY, theme);
    }
  };

  return {
    currentTheme,
    setTheme,
    themes
  };
} 