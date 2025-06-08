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
import ThemeSwitcher from '@lib/components/ThemeSwitcher.vue';
import ThemeSwitcherLandingPage from './ThemeSwitcherLandingPage.vue';
import { useTheme } from '@lib/composables/useTheme';

type ThemeInstance = ReturnType<typeof useTheme>;
const theme = inject<ThemeInstance>('theme');
if (!theme) throw new Error('Theme not provided');
const { currentTheme } = theme;
</script>

<style lang="scss">
@import '@lib/styles/themes.scss';

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