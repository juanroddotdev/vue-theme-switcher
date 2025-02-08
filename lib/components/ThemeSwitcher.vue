<template>
  <div class="theme-switcher">
    <button
      v-for="theme in themes"
      :key="theme.name"
      :class="['theme-button', theme.name, { active: currentTheme === theme.name }]"
      :aria-label="`Switch to ${theme.name} theme`"
      @click="setTheme(theme.name)"
      :style="{
        background: `linear-gradient(45deg, ${theme.colors.primaryColor}, ${theme.colors.secondaryColor})`
      }"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { Theme } from '../index';

interface ThemeContext {
  themes: Theme[];
  currentTheme: string;
  setTheme: (theme: string) => void;
}

const { themes, currentTheme, setTheme } = inject('theme') as ThemeContext;
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
}

.theme-button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-color: white;
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
  }
}
</style>