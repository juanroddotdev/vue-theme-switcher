# Vue Theme Switcher: Unleash Dynamic Styling in Your Vue 3 Apps

A highly customizable and contrast-safe theme switching solution for Vue 3 applications, built with TypeScript and SCSS. Effortlessly transform your app's visual identity while ensuring optimal readability across all themes.

## 🚀 Overview

The Vue Theme Switcher is a comprehensive NPM package designed to make adding dynamic, professional theme capabilities to your Vue applications a breeze. Go beyond simple dark/light modes and empower your users with a full spectrum of visual experiences – all while maintaining consistent design and accessibility.

## ✨ Key Features

* **Dynamic Theme Switching:** Effortlessly switch between multiple predefined or custom themes with smooth transitions.
* **Persistent Theme Selection:** Remembers user's preferred theme using `localStorage`, ensuring a consistent experience across sessions.
* **Semantic Color Roles:** Built on a robust system of semantic CSS Custom Properties that guarantee consistent styling and contrast.
* **Automated Text Contrast:** Includes a powerful SASS function (`set-text-color()`) to automatically choose black or white text for optimal readability on any background.
* **Framework-Agnostic Core Styling:** Themes are applied via CSS Custom Properties, making them easily consumable by any HTML/CSS element, regardless of complex component structures.
* **Customizable Theme Definitions:** Create and integrate your own unique themes with ease, guided by clear semantic roles.
* **Vue 3 & TypeScript Ready:** Modern, type-safe, and built with Vue 3's Composition API.
* **Lightweight & Performant:** Designed for minimal impact on your application's bundle size and runtime performance.

## 📦 Installation

To get started, install the package in your Vue 3 project:

```bash
pnpm add vue-theme-switcher # or npm install vue-theme-switcher
```

## 📚 Basic Usage

### Using the Theme Switcher

First, import the required styles and the theme composable:

```typescript
// main.ts or App.vue
import { useTheme, ThemeSwitcher } from 'vue-theme-switcher';

// Import base styles and themes
import 'vue-theme-switcher/style.css'; // Base styles
import 'vue-theme-switcher/themes/sunset.css'; // Default theme
// Optionally import additional themes
import 'vue-theme-switcher/themes/forest.css';
import 'vue-theme-switcher/themes/ocean.css';
import 'vue-theme-switcher/themes/galaxy.css';
```

Then in your components, use the theme composable:

```vue
<script setup lang="ts">
import { useTheme } from 'vue-theme-switcher';

const { currentTheme, setTheme, themes } = useTheme({
  defaultTheme: 'sunset', // Optional: Set default theme
  storageKey: 'my-app-theme', // Optional: Custom localStorage key
  themes: ['sunset', 'forest', 'ocean', 'galaxy'] // Optional: Custom theme list
});
</script>

<template>
  <div>
    <button @click="setTheme('sunset')">Sunset</button>
    <button @click="setTheme('forest')">Forest</button>
    <p>Current Theme: {{ currentTheme }}</p>
  </div>
</template>
```

### Using the ThemeSwitcher Component

Add the pre-built theme switcher UI component:

```vue
<script setup lang="ts">
import { ThemeSwitcher } from 'vue-theme-switcher';
</script>

<template>
  <ThemeSwitcher />
  <!-- Your application content -->
</template>
```

### Understanding the Theme System

The theme system is built using SCSS for development but delivers compiled CSS for production use:

1. **Development (SCSS)**: 
   - We write themes using SCSS features (variables, mixins, functions)
   - Source files are in `lib/styles/` and `lib/styles/themes/`
   - Uses semantic variables and automatic contrast calculation

2. **Production (CSS)**:
   - SCSS files are compiled to standard CSS during build
   - Compiled files are available in the package's `dist/` directory
   - Users import the compiled CSS files as shown in the examples above

This approach gives us the power of SCSS during development while providing simple, standard CSS for users.

---

## 🎨 **Understanding Semantic Color Roles: Build with Purpose**

Our theme switcher operates on a powerful concept: **Semantic Color Roles**. Instead of generic color names (like `primaryColor`), we define CSS Custom Properties that describe the *purpose* of a color within your UI. This ensures consistency and, critically, proper contrast across all themes.

When your application loads a theme, it simply sets these variables on the `<html>` element (`:root`). Your components then consume these semantic variables directly.

### Key Semantic Variables

Here are some of the core semantic CSS Custom Properties you'll work with:

* `--color-bg-app`: The main background color for your entire application.
* `--color-text-on-app-background`: The primary text color that ensures high contrast against `--color-bg-app`.
* `--color-bg-card`: The background color for distinct UI elements like cards, panels, or modals.
* `--color-text-on-card-bg`: The text color optimized for contrast on `--color-bg-card`.
* `--color-text-heading`: The color for `h1` to `h6` elements, designed for readability.
* `--color-primary-accent`: Your brand's main highlight/interactive color (e.g., for primary buttons, active states).
* `--color-text-on-primary-accent`: The text color that ensures high contrast when placed directly on `--color-primary-accent` backgrounds.
* `--color-button-default-bg`: The background color for standard, non-accented buttons.
* `--color-button-default-text`: The text color for standard buttons, contrasted against `--color-button-default-bg`.
* `--color-link-default`: The default color for hyperlinks.
* `--color-link-hover`: The color for hyperlinks when hovered over.
* `--color-status-success-bg`, `--color-status-error-bg`, etc.: Backgrounds for various status messages.
* `--color-status-success-text`, `--color-status-error-text`, etc.: Text colors contrasted against status backgrounds.
* ...and many more for borders, form elements, shadows, etc. (refer to `lib/styles/_variables.scss` for the full list).

**Your components should always use these semantic variables.** For example:

```scss
/* In your component's SCSS (e.g., MyButton.vue) */
.my-button {
    background-color: var(--color-primary-accent);
    color: var(--color-text-on-primary-accent); /* Always safe! */
    border: 1px solid var(--color-button-border);
    /* ... */
}
```

---

## 🔄 **Applying Themes: The `data-theme` Attribute**

The magic of theme switching is powered by the `data-theme` attribute on your `<html>` element. When `useTheme` detects a theme change, it simply updates this attribute:

```html
<!-- Example when 'sunset' theme is active -->
<html lang="en" data-theme="sunset">
  <head>...</head>
  <body>...</body>
</html>
```

Your compiled theme CSS files (e.g., `sunset.css`, `forest.css`) contain rules that target this attribute to set the corresponding CSS Custom Properties:

```css
/* Compiled sunset.css (simplified example) */
:root[data-theme="sunset"] {
  --color-bg-app: #FFF5F5;
  --color-text-on-app-background: #222222; /* Calculated for contrast */
  --color-primary-accent: #FF6B6B;
  --color-text-on-primary-accent: #FFFFFF; /* Calculated for contrast */
  /* ... all other semantic variables for sunset theme */
}
```

By importing your theme's compiled CSS (e.g., `import 'vue-theme-switcher/lib/styles/themes/sunset.css';`) and letting `useTheme` set the `data-theme` attribute, your application automatically picks up the correct color palette.

---

## 🎨 **Creating Your Own Contrast-Safe Themes**

You're not limited to our built-in themes! You can create entirely new, custom themes that seamlessly integrate with your application and guarantee contrast.

### 1. Define Your Theme SCSS

Create a new SCSS file for your custom theme (e.g., `src/my-app-themes/cool-vibe.scss`). This file must define values for **all** semantic CSS Custom Properties (as listed in `lib/styles/_variables.scss`) within a `:root[data-theme="your-theme-name"]` selector.

### 2. Leverage `set-text-color()` for Automatic Contrast!

Our built-in `set-text-color()` SASS function is your secret weapon for ensuring accessibility. Use it to automatically pick black or white text that contrasts perfectly with any background color you choose.

**Example `src/my-app-themes/cool-vibe.scss`:**

```scss
// Import the functions if not globally available through your main SCSS
@import 'vue-theme-switcher/lib/styles/functions'; // Adjust path if needed

:root[data-theme="cool-vibe"] {
  /* --- Backgrounds & Surfaces --- */
  --color-bg-app: #1A202C; /* Dark background */
  --color-text-on-app-background: #{set-text-color(#1A202C)}; /* Auto: white */

  --color-bg-card: #2D3748; /* Slightly lighter dark card */
  --color-text-on-card-bg: #{set-text-color(#2D3748)}; /* Auto: white */

  --color-text-heading: #EDF2F7; /* Light headings */

  /* --- Primary/Accent Colors --- */
  --color-primary-accent: #63B3ED; /* A vibrant blue */
  --color-text-on-primary-accent: #{set-text-color(#63B3ED)}; /* Auto: black */

  --color-secondary-accent: #F6AD55; /* A warm orange */
  --color-text-on-secondary-accent: #{set-text-color(#F6AD55)}; /* Auto: black */

  /* --- Buttons --- */
  --color-button-default-bg: #4A5568;
  --color-button-default-text: #{set-text-color(#4A5568)}; /* Auto: white */

  --color-button-hover-bg: #2D3748;
  --color-button-hover-text: #{set-text-color(#2D3748)}; /* Auto: white */

  --color-button-border: #718096;

  /* --- Links --- */
  --color-link-default: #81E6D9;
  --color-link-hover: #4FD1C5;

  /* --- Form Elements --- */
  --color-input-border: #4A5568;
  --color-input-bg: #2D3748;
  --color-input-text: #EDF2F7;

  /* --- Status Colors --- */
  --color-status-success-bg: #48BB78;
  --color-status-success-text: #{set-text-color(#48BB78)};
  --color-status-error-bg: #F56565;
  --color-status-error-text: #{set-text-color(#F56565)};
  --color-status-warning-bg: #ECC94B;
  --color-status-warning-text: #{set-text-color(#ECC94B)};
  --color-status-info-bg: #4299E1;
  --color-status-info-text: #{set-text-color(#4299E1)};

  /* --- Borders/Dividers --- */
  --color-border-subtle: #4A5568;
  --color-divider-line: #4A5568;

  /* --- Shadows --- */
  --shadow-default: rgba(0, 0, 0, 0.4);

  /* --- ThemeSwitcher Button Color (for demo only) --- */
  --theme-switcher-button-color: linear-gradient(45deg, #63B3ED, #F6AD55);
}
```

### 3. Compile Your Custom Theme

Ensure your build process (e.g., Vite, Webpack, or a simple SASS compiler) compiles this `.scss` file into a `.css` file (e.g., `my-app-themes/cool-vibe.css`).

### 4. Import & Use Your Custom Theme

In your `main.ts` or `App.vue`, import your compiled custom theme's CSS and update the list of available themes in `useTheme` options:

```typescript
// main.ts
// ... existing imports
import './my-app-themes/cool-vibe.css'; // Import your custom theme's compiled CSS

// ...
app.use(createThemeSwitcherPlugin({
  defaultTheme: 'sunset',
  themes: ['sunset', 'forest', 'ocean', 'galaxy', 'cool-vibe'] // Add your custom theme name
}));
// ...
```

Then, you can call `setTheme('cool-vibe')` just like any other theme!

---

## ⚙️ Customization Options

* **`storageKey`**: Customize the `localStorage` key used to store the theme.
* **`defaultTheme`**: Set the initial theme if no selection is found in `localStorage`.
* **`themes`**: Override the default list of theme names available in the switcher.
* **Custom Theme Definitions**: As detailed above, define your own themes in SCSS.

## 🤝 Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` for guidelines.

## 📝 License

This package is open-source and licensed under the [MIT License](LICENSE).

