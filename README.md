# Vue Theme Switcher

A beautiful and customizable theme switcher for Vue applications.

## Installation

```bash
npm install vue-theme-switcher
# or
yarn add vue-theme-switcher
```

## Usage

1. Register the plugin in your Vue app:

```javascript
import { createApp } from 'vue';
import VueThemeSwitcher from 'vue-theme-switcher';
import App from './App.vue';

const app = createApp(App);
app.use(VueThemeSwitcher);
app.mount('#app');
```

2. Use the theme switcher in your components:

```vue
<template>
  <div>
    <ThemeSwitcher />
    <h1>My App</h1>
    <!-- Your content here -->
  </div>
</template>

<script setup>
import { useTheme } from 'vue-theme-switcher';

const { currentTheme } = useTheme();
</script>
```

## Customization

You can customize the themes and options when installing the plugin:

```javascript
app.use(VueThemeSwitcher, {
  storageKey: 'my-theme-key',
  defaultTheme: 'forest',
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
```

## API

### useTheme

The `useTheme` composable provides access to the theme state and methods:

```javascript
const { currentTheme, setTheme, themes } = useTheme();
```

- `currentTheme`: Ref containing the current theme name
- `setTheme(themeName: string)`: Function to change the current theme
- `themes`: Array of available themes

### ThemeSwitcher Component

The `ThemeSwitcher` component provides a UI for switching themes. It can be customized using CSS variables and classes.

## License

MIT