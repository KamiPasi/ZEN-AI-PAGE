<script setup>
import { ref, onMounted } from 'vue'
import { useTypewriter } from '../composables/typewriter'

const props = defineProps({
  name: String,
  text: String,
  tagline: String,
  image: Object,
  actions: Array
})

// 直接传递 tagline 文本
const displayTagline = useTypewriter(props.tagline)
</script>

<template>
  <div class="VPHero">
    <div class="container">
      <div class="main">
        <h1 class="name" v-if="name" v-html="name" />
        <p class="text" v-if="text" v-html="text" />
        <p class="tagline animated" v-if="tagline">{{ displayTagline }}</p>
        <div class="actions">
          <div v-for="action in actions" :key="action.link" class="action">
            <a class="VPButton" :class="action.theme" :href="action.link" target="_self">
              {{ action.text }}
            </a>
          </div>
        </div>
      </div>
      <div class="image" v-if="image">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1152px;
  padding: 0 24px;
}

.main {
  text-align: center;
  margin-top: 2rem;
}

.tagline {
  font-size: 1.4rem;
  margin: 1rem 0;
  min-height: 2rem;
  color: var(--vp-c-text-1);
  background: linear-gradient(315deg, var(--primary-color) 25%, var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
}

.tagline.animated {
  display: inline-block;
  position: relative;
}

.actions {
  margin-top: 2rem;
}
</style>