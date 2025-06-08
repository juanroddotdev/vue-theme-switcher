import ThemeSwitcher from './components/ThemeSwitcher.vue';
import { useTheme } from './composables/useTheme';
import './styles/base.scss';

export { ThemeSwitcher, useTheme };
export default ThemeSwitcher;

export interface Theme {
  name: string;
  colors: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    textColor: string;
    bgColor: string;
  };
}

export interface ThemeConfig {
  storageKey?: string;
  defaultTheme?: string;
  themes?: Theme[];
}

export default {
  install: (app: App, options: ThemeConfig = {}) => {
    app.component('ThemeSwitcher', ThemeSwitcher);
    
    // Provide theme configuration at the app level
    app.provide('themeConfig', options);
  }
};