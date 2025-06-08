<template>
  <div class="theme-switcher">
    <button
      v-for="theme in themes"
      :key="theme"
      :class="['theme-button', theme, { active: currentTheme === theme }]"
      :aria-label="`Switch to ${theme} theme`"
      @click="setTheme(theme)"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const { themes, currentTheme, setTheme } = inject('theme');
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

  &:focus-visible {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
  }
}
</style>