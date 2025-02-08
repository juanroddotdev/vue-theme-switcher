import { ref, watchEffect } from 'vue';
import type { Theme } from '../index';

const DEFAULT_STORAGE_KEY = 'selected-theme';
const DEFAULT_THEMES: Theme[] = [
  {
    name: 'sunset',
    colors: {
      primaryColor: '#FF6B6B',
      secondaryColor: '#4ECDC4',
      accentColor: '#FFE66D',
      textColor: '#2C3E50',
      bgColor: '#FFF5F5'
    }
  },
  {
    name: 'forest',
    colors: {
      primaryColor: '#2D5A27',
      secondaryColor: '#A8E6CF',
      accentColor: '#DCC7AA',
      textColor: '#3D2C2E',
      bgColor: '#F3F8F2'
    }
  },
  {
    name: 'ocean',
    colors: {
      primaryColor: '#003D5B',
      secondaryColor: '#00B4D8',
      accentColor: '#90E0EF',
      textColor: '#CAF0F8',
      bgColor: '#012A4A'
    }
  },
  {
    name: 'galaxy',
    colors: {
      primaryColor: '#2D00F7',
      secondaryColor: '#8900F2',
      accentColor: '#BC00DD',
      textColor: '#F8F7FF',
      bgColor: '#1A1A2E'
    }
  }
];

export interface ThemeOptions {
  storageKey?: string;
  defaultTheme?: string;
  themes?: Theme[];
}

export function useTheme(options: ThemeOptions = {}) {
  const storageKey = options.storageKey || DEFAULT_STORAGE_KEY;
  const themes = options.themes || DEFAULT_THEMES;
  const defaultTheme = options.defaultTheme || 'sunset';

  const currentTheme = ref(localStorage.getItem(storageKey) || defaultTheme);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      currentTheme.value = themeName;
      localStorage.setItem(storageKey, themeName);
    }
  };

  // Initialize theme
  watchEffect(() => {
    const theme = themes.find(t => t.name === currentTheme.value);
    if (theme) {
      applyTheme(theme);
    }
  });

  return {
    currentTheme,
    setTheme,
    themes
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.style.setProperty('--primary-color', theme.colors.primaryColor);
  document.documentElement.style.setProperty('--secondary-color', theme.colors.secondaryColor);
  document.documentElement.style.setProperty('--accent-color', theme.colors.accentColor);
  document.documentElement.style.setProperty('--text-color', theme.colors.textColor);
  document.documentElement.style.setProperty('--bg-color', theme.colors.bgColor);
}