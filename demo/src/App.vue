<template>
  <div class="app" :class="currentTheme">
    <ThemeSwitcher />
    <main class="content">
      <!-- <h1>{{ themeContent[currentTheme].title }}</h1>
      <p>{{ themeContent[currentTheme].description }}</p> -->

      <ThemeSwitcherLandingPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import ThemeSwitcher from '../../lib/components/ThemeSwitcher.vue';
import ThemeSwitcherLandingPage from './ThemeSwitcherLandingPage.vue';
import { useTheme } from '../../lib/composables/useTheme';

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
@use '@lib/styles/themes' as themes;

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
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10vh;

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

.demo-section {
  margin-top: 4rem;

  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
  }
}

.demo-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.demo-card {
  background: var(--bg-color);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-color);
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
}

.demo-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>