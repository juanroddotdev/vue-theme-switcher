<template>
  <div class="theme-switcher" role="radiogroup" aria-label="Theme selection">
    <button
      v-for="theme in themes"
      :key="theme.name"
      :class="['theme-button', theme.name, { active: currentTheme === theme.name }]"
      :aria-label="`Switch to ${theme.name} theme`"
      :aria-pressed="currentTheme === theme.name"
      @click="setTheme(theme.name)"
      @keydown.enter="setTheme(theme.name)"
      @keydown.space="setTheme(theme.name)"
    ></button>
    <button
      v-if="allowSystemTheme"
      class="theme-button system"
      :class="{ active: isSystemTheme }"
      aria-label="Use system theme"
      :aria-pressed="isSystemTheme"
      @click="setSystemTheme"
      @keydown.enter="setSystemTheme"
      @keydown.space="setSystemTheme"
    >
      <span class="system-icon" aria-hidden="true">💻</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useTheme } from '../composables/useTheme';

type ThemeInstance = ReturnType<typeof useTheme>;
const theme = inject<ThemeInstance>('theme');
if (!theme) throw new Error('Theme not provided');
const { themes, currentTheme, setTheme, setSystemTheme, isSystemTheme } = theme;

// Get allowSystemTheme from the first theme's options
const allowSystemTheme = themes[0]?.name === 'system' || false;
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 1000;
}

.theme-button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform var(--theme-transition-duration, 0.3s) ease,
              border-color var(--theme-transition-duration, 0.3s) ease;
  padding: 0;
  background: var(--theme-switcher-button-color);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    border-color: white;
    transform: scale(1.2);
  }

  &.sunset {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  }

  &.forest {
    background: linear-gradient(45deg, #2D5A27, #A8E6CF);
  }

  &.ocean {
    background: linear-gradient(45deg, #003D5B, #00B4D8);
  }

  &.galaxy {
    background: linear-gradient(45deg, #2D00F7, #8900F2);
  }

  &.system {
    background: linear-gradient(45deg, #666666, #999999);
    
    .system-icon {
      font-size: 1.2rem;
    }
  }

  &:focus-visible {
    outline: 3px solid var(--color-primary-accent);
    outline-offset: 2px;
  }
}

// High contrast mode support
@media (forced-colors: active) {
  .theme-button {
    border: 2px solid CanvasText;
    
    &.active {
      border-color: Highlight;
    }
  }
}
</style>