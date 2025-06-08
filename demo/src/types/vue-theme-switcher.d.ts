declare module 'vue-theme-switcher' {
  import { Component } from 'vue';
  import { Ref } from 'vue';

  export interface Theme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      primaryAccent: string;
    };
  }

  export interface ThemeOptions {
    transitionDuration?: number;
    allowSystemTheme?: boolean;
    customThemes?: Theme[];
  }

  export interface ThemeInstance {
    themes: Theme[];
    currentTheme: Ref<string>;
    setTheme: (themeName: string) => void;
    setSystemTheme: () => void;
    isSystemTheme: Ref<boolean>;
  }

  export function useTheme(options?: ThemeOptions): ThemeInstance;
  
  const ThemeSwitcher: Component;
  export default ThemeSwitcher;
} 