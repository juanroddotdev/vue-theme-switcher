<template>
  <div class="theme-switcher-landing-page">
    <div class="theme-switcher-landing-page-content">
      <div class="main-container">

        <!-- Hero Section -->
        <section class="text-center">
          <h1 class="hero-title">
            ✨ Unleash Your App's Inner Chameleon: Meet the Vue Theme Switcher! ✨
          </h1>
          <p class="hero-paragraph-lg">
            Ever wished your app could have a whole wardrobe of looks? Tired of the same old colors, day in and day out?
            Say goodbye to UI monotony and hello to effortless style transformations with the <strong>Vue Theme
              Switcher</strong>!
          </p>
          <p class="hero-paragraph-base">
            This isn't just a button; it's your app's personal stylist, ready to transform its entire vibe with a single
            click. Imagine going from a serene "Forest Green" to a vibrant "Sunset Orange" or a mysterious "Galaxy Blue"
            – instantly and beautifully.
          </p>
          <div class="cta-buttons">
            <a href="https://your-theme-switcher-demo-url.com" class="cta-button primary">
              Explore the Live Demo Here!
            </a>
            <a href="https://your-npm-package-link.com" class="cta-button secondary">
              Get the Vue Theme Switcher Package!
            </a>
          </div>
        </section>

        <!-- See Your Colors Come Alive! Section -->
        <section>
          <h2 class="text-center theme-section-title">
            🎨 See Your Colors Come Alive!
          </h2>
          <p class="text-center hero-paragraph-lg">
            The magic is in how effortlessly your app's personality can shift. Our Vue Theme Switcher is built to
            highlight the sheer joy of visual transformation.
          </p>
          <div class="theme-cards-grid">
            <div class="theme-card sunset">
              <h3>Sunset Theme</h3>
              <p>Warm tones that evoke the golden hour. Imagine your app bathed in these rich, inviting hues.</p>
            </div>
            <div class="theme-card forest">
              <h3>Forest Theme</h3>
              <p>Deep, earthy greens and calming tones for a natural, grounded feel.</p>
            </div>
            <div class="theme-card ocean">
              <h3>Ocean Theme</h3>
              <p>Cool blues and aquas that bring the refreshing serenity of the sea to your UI.</p>
            </div>
            <div class="theme-card galaxy">
              <h3>Galaxy Theme</h3>
              <p>Mysterious dark purples and deep blacks with hints of cosmic sparkle.</p>
            </div>
          </div>
          <ul class="feature-list">
            <li>
              <p><strong>Instant Makeovers:</strong> Watch as your app's buttons, backgrounds, text, and accents
                elegantly switch between vibrant color palettes.</p>
            </li>
            <li>
              <p><strong>A Rainbow of Choices:</strong> Dive into pre-designed themes like `sunset`, `forest`, `ocean`,
                and `galaxy`. It's like having multiple stunning outfits for your application!</p>
            </li>
            <li>
              <p><strong>Smooth as Silk:</strong> No jarring flashes here! Enjoy buttery-smooth transitions that make
                changing themes a delightful user experience.</p>
            </li>
          </ul>
        </section>

        <!-- Why Your Users (and You!) Will Love It Section -->
        <section>
          <h2 class="text-center theme-section-title">
            🚀 Why Your Users (and You!) Will Love It:
          </h2>
          <div class="feature-grid">
            <div class="feature-item">
              <h3>Plug-and-Play Brilliance</h3>
              <p>
                No deep diving into complex configurations. Our Theme Switcher is a ready-to-use Vue 3 package. Simply
                install it, integrate a sleek component, and watch your app come alive with new themes in minutes.
              </p>
            </div>
            <div class="feature-item">
              <h3>Remember Me!</h3>
              <p>
                Your users have preferences, and we respect that. Our Theme Switcher intelligently remembers their last
                chosen theme. No need to reset their favorite look every time they visit – their preference is saved
                right in their browser!
              </p>
            </div>
            <div class="feature-item">
              <h3>Your Brand, Your Rules</h3>
              <p>
                Want a theme that's perfectly aligned with your brand's unique colors? Absolutely! While we provide
                gorgeous defaults, you have full control to define custom color schemes. Make every button, every panel,
                every pixel sing your brand's song.
              </p>
            </div>
            <div class="feature-item">
              <h3>Under the Hood (Just a Peek!)</h3>
              <p>
                We've woven some clever Vue 3 Composition API magic behind the scenes to make all this seamless. It's
                built with modern best practices, ensuring your app stays lightweight, responsive, and a joy to develop
                with. We handle the complex theme management so you can focus on building amazing features.
              </p>
            </div>
          </div>
        </section>

        <!-- Call to Action Footer -->
        <section class="footer-section">
          <h2 class="theme-section-title">
            Ready to Let Your Vue App Show Its True Colors?
          </h2>
          <div class="cta-buttons">
            <a href="https://your-theme-switcher-demo-url.com" class="cta-button primary">
              Explore the Live Demo Here!
            </a>
            <a href="https://your-npm-package-link.com" class="cta-button secondary">
              Get the Vue Theme Switcher Package!
            </a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useTheme } from 'vue-theme-switcher';

type ThemeInstance = ReturnType<typeof useTheme>;
const theme = inject<ThemeInstance>('theme');
if (!theme) throw new Error('Theme not provided');
const { currentTheme } = theme;
</script>

<style lang="scss" scoped>
.theme-switcher-landing-page {
  color: var(--color-text-on-app-background);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--color-primary-accent);
}

.hero-paragraph-lg {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text-on-app-background);
}

.hero-paragraph-base {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--color-text-on-app-background);
}

.theme-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 3rem 0 2rem;
  color: var(--color-primary-accent);
}

.theme-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.theme-card {
  background: var(--color-bg-card);
  border: 2px solid var(--color-primary-accent);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-default);

  h3 {
    color: var(--color-primary-accent);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-text-on-card-bg);
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 3rem 0;

  li {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: var(--color-bg-card);
    border-radius: 8px;
    box-shadow: var(--shadow-default);

    p {
      color: var(--color-text-on-card-bg);
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0;

      strong {
        color: var(--color-primary-accent);
      }
    }
  }
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-item {
  background: var(--color-bg-card);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-default);

  h3 {
    color: var(--color-primary-accent);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-text-on-card-bg);
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &.primary {
    background: var(--color-primary-accent);
    color: var(--color-text-on-primary-accent);
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-default);
    }
  }

  &.secondary {
    background: var(--color-secondary-accent);
    color: var(--color-text-on-secondary-accent);
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-default);
    }
  }
}

.footer-section {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 0;
  background: var(--color-bg-card);
  border-radius: 12px;
  box-shadow: var(--shadow-default);
}

// High contrast mode support
@media (forced-colors: active) {
  .theme-card,
  .feature-item,
  .footer-section {
    border: 2px solid CanvasText;
  }

  .cta-button {
    border: 2px solid CanvasText;
  }
}
</style>