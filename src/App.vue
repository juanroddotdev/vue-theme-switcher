<template>
  <div class="app" :class="currentTheme">
    <ThemeSwitcher />
    <main class="content">
      <h1>{{ themeContent[currentTheme].title }}</h1>
      <p>{{ themeContent[currentTheme].description }}</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import { useTheme } from './composables/useTheme';

const theme = useTheme();
provide('theme', theme);
const { currentTheme } = theme;

const themeContent = {
  sunset: {
    title: "Warm Sunset Vibes",
    description: "Experience the calming warmth of a beautiful sunset, where coral meets turquoise in perfect harmony."
  },
  forest: {
    title: "Forest Serenity",
    description: "Immerse yourself in the tranquil greens of a lush forest, where nature's palette brings peace to your screen."
  },
  ocean: {
    title: "Deep Ocean Dreams",
    description: "Dive into the mysterious depths of the ocean, where dark blues and bright aquas create an aquatic atmosphere."
  },
  galaxy: {
    title: "Cosmic Adventure",
    description: "Journey through the cosmos with vibrant purples and deep space blues that spark your imagination."
  }
};
</script>

<style lang="scss">
@use './styles/themes' as themes;

.app {
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.3s ease;

  &.sunset {
    @include themes.apply-theme(themes.$sunset-theme);
  }

  &.forest {
    @include themes.apply-theme(themes.$forest-theme);
  }

  &.ocean {
    @include themes.apply-theme(themes.$ocean-theme);
  }

  &.galaxy {
    @include themes.apply-theme(themes.$galaxy-theme);
  }
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20vh;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
    transition: all 0.3s ease;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--text-color);
    max-width: 600px;
    margin: 0 auto;
    transition: all 0.3s ease;
  }
}
</style>