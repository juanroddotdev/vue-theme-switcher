<template>
  <div class="app" :class="currentTheme">
    <ThemeSwitcher />
    <main class="content">
      <ThemeSwitcherLandingPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import ThemeSwitcher from 'vue-theme-switcher';
import ThemeSwitcherLandingPage from './ThemeSwitcherLandingPage.vue';
import { useTheme } from 'vue-theme-switcher';

type ThemeInstance = ReturnType<typeof useTheme>;
const theme = inject<ThemeInstance>('theme');
if (!theme) throw new Error('Theme not provided');
const { currentTheme } = theme;
</script>

<style lang="scss">
@import 'vue-theme-switcher/dist/style.css';

.app {
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.3s ease;
  background-color: var(--color-background);
  color: var(--color-text);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10vh;
}
</style>