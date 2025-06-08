# Vue Theme Switcher

A beautiful and customizable theme switcher for Vue applications. Easily add theme switching functionality to your Vue 3 projects with a simple, accessible, and customizable component.

## Features

- 🌈 Multiple built-in themes (Sunset, Forest, Ocean, Galaxy)
- 🎨 Fully customizable themes
- 💾 Theme persistence using localStorage
- ♿ Accessible with keyboard navigation
- 🎯 TypeScript support
- 🎭 Smooth transitions between themes
- 📱 Responsive design

## Installation

```bash
npm install vue-theme-switcher
# or
yarn add vue-theme-switcher
```

## Quick Start

1. Import and use the component:

```vue
<template>
  <div>
    <ThemeSwitcher />
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { ThemeSwitcher, useTheme } from 'vue-theme-switcher';

// Optional: Use the theme composable if you need theme state
const { currentTheme } = useTheme();
</script>
```

2. Add the styles to your main CSS file:

```javascript
// main.js or main.ts
import 'vue-theme-switcher/style.css';
```

## Customization

### Basic Theme Configuration

```javascript
import { createApp } from 'vue';
import { ThemeSwitcher, useTheme } from 'vue-theme-switcher';
import App from './App.vue';

const app = createApp(App);

// Optional: Configure default theme
const theme = useTheme({
  defaultTheme: 'forest', // 'sunset' | 'forest' | 'ocean' | 'galaxy'
  storageKey: 'my-theme-key' // Custom localStorage key
});

app.mount('#app');
```

### Custom Themes

You can define your own themes by extending the default ones:

```javascript
import { createApp } from 'vue';
import { ThemeSwitcher, useTheme } from 'vue-theme-switcher';
import App from './App.vue';

const app = createApp(App);

const theme = useTheme({
  themes: [
    {
      name: 'light',
      colors: {
        primaryColor: '#007AFF',
        secondaryColor: '#5856D6',
        accentColor: '#FF2D55',
        textColor: '#000000',
        bgColor: '#FFFFFF'
      }
    },
    {
      name: 'dark',
      colors: {
        primaryColor: '#0A84FF',
        secondaryColor: '#5E5CE6',
        accentColor: '#FF375F',
        textColor: '#FFFFFF',
        bgColor: '#000000'
      }
    }
  ]
});

app.mount('#app');
```

## API Reference

### ThemeSwitcher Component

The main component that renders the theme switcher UI.

```vue
<ThemeSwitcher />
```

### useTheme Composable

A composable that provides theme management functionality.

```javascript
const { currentTheme, setTheme, themes } = useTheme(options);
```

#### Parameters

- `options` (optional):
  - `defaultTheme`: string - The default theme name
  - `storageKey`: string - Custom localStorage key
  - `themes`: Theme[] - Custom theme definitions

#### Returns

- `currentTheme`: Ref<string> - The current theme name
- `setTheme`: (theme: string) => void - Function to change the theme
- `themes`: string[] - Available theme names

## CSS Variables

The component uses CSS variables for theming. You can use these in your own styles:

```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
  --accent-color: #FFE66D;
  --text-color: #2C3E50;
  --bg-color: #FFF5F5;
}
```

## Demo

Check out the [live demo](https://your-demo-url.com) or run it locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/vue-theme-switcher.git

# Install dependencies
cd vue-theme-switcher
npm install

# Run the demo
npm run dev:demo
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT