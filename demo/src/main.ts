import { createApp } from 'vue'
import App from './App.vue'
import ThemeSwitcher from '@lib/components/ThemeSwitcher.vue'
import { useTheme } from '@lib/composables/useTheme'
import './style.scss'
// import './landing.scss'

const app = createApp(App)

// Configure theme options
const themeOptions = {
  storageKey: 'demo-theme',
  defaultTheme: 'sunset',
  themes: [
    { name: 'sunset' },
    { name: 'forest' },
    { name: 'ocean' },
    { name: 'galaxy' }
  ]
}

// Initialize theme
const theme = useTheme(themeOptions)
app.provide('theme', theme)

app.mount('#app') 