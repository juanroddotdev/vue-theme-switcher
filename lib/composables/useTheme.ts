import { ref, watchEffect } from 'vue';

export interface Theme {
  name: string;
  colors?: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    textColor?: string;
    bgColor?: string;
  };
}

export interface ThemeOptions {
  storageKey?: string;
  defaultTheme?: string;
  themes?: Theme[];
  transitionDuration?: string;
  allowSystemTheme?: boolean;
  customThemes?: Record<string, Theme>;
}

const DEFAULT_STORAGE_KEY = 'selected-theme';
const DEFAULT_THEMES: Theme[] = [
  { name: 'sunset' },
  { name: 'forest' },
  { name: 'ocean' },
  { name: 'galaxy' }
];

// Theme validation
function validateTheme(theme: Theme): boolean {
  if (!theme.name) {
    console.error('Theme must have a name');
    return false;
  }
  return true;
}

// System theme detection
function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme(options: ThemeOptions = {}) {
  const storageKey = options.storageKey || DEFAULT_STORAGE_KEY;
  const themes = options.themes || DEFAULT_THEMES;
  const defaultTheme = options.defaultTheme || 'sunset';
  const transitionDuration = options.transitionDuration || '0.3s';
  const allowSystemTheme = options.allowSystemTheme || false;
  const customThemes = options.customThemes || {};

  // Validate all themes
  const allThemes = [...themes, ...Object.values(customThemes)];
  allThemes.forEach(theme => {
    if (!validateTheme(theme)) {
      console.warn(`Invalid theme configuration for theme: ${theme.name}`);
    }
  });

  // Initialize theme state
  const currentTheme = ref(localStorage.getItem(storageKey) || defaultTheme);
  const isSystemTheme = ref(allowSystemTheme && !localStorage.getItem(storageKey));

  // Watch for system theme changes if enabled
  if (allowSystemTheme) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (isSystemTheme.value) {
        const systemTheme = e.matches ? 'dark' : 'light';
        setTheme(systemTheme);
      }
    });
  }

  const setTheme = (themeName: string) => {
    const theme = allThemes.find(t => t.name === themeName);
    if (theme) {
      currentTheme.value = themeName;
      isSystemTheme.value = false;
      localStorage.setItem(storageKey, themeName);
      document.documentElement.setAttribute('data-theme', themeName);
    }
  };

  const setSystemTheme = () => {
    isSystemTheme.value = true;
    localStorage.removeItem(storageKey);
    const systemTheme = getSystemTheme();
    document.documentElement.setAttribute('data-theme', systemTheme);
  };

  // Initialize theme
  watchEffect(() => {
    if (isSystemTheme.value) {
      const systemTheme = getSystemTheme();
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme.value);
    }
  });

  // Set transition duration
  document.documentElement.style.setProperty('--theme-transition-duration', transitionDuration);

  return {
    currentTheme,
    setTheme,
    setSystemTheme,
    isSystemTheme,
    themes: allThemes
  };
}