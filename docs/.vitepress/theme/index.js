import './style.css'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import VPHero from './components/VPHero.vue'
import AnimationTitle from "./components/AnimationTitle.vue"
import LogoImage from './components/LogoImage.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar': () => null,
      'sidebar': () => null,
      "home-hero-info": () => h(AnimationTitle),
      "home-hero-image": () => h(LogoImage, { 
        src: '/logo.png',
        alt: 'ZEN AI'
      })
    })
  },
  enhanceApp({ app }) {
    app.component('VPHero', VPHero)
    app.component('LogoImage', LogoImage)
  }
}
