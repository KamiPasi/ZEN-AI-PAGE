<script setup lang="ts"></script>

<template>
  <div class="animation-title">
    <h1 class="name">
      <p><span class="gradient-text">欢迎来到ZEN AI</span></p>
      <p><span class="gradient-text">您的GPT API服务专家</span></p>
    </h1>
    <p class="tagline typewriter">一起开启智能化的未来之旅 🚀</p>
  </div>
</template>

<style scoped>
.animation-title {
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}

.gradient-text {
  background: -webkit-linear-gradient(
    315deg,
    #6A92CB 0%,    
    #0074f2 25%,
    #87CAF6 50%,   
    #ff795c 75%,  
    #CACED6 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 300%;
  animation: gradient 8s ease infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.name,
.text {
  margin: 0;
  max-width: 392px;
  letter-spacing: 0.5px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 800;
  white-space: pre-wrap;
  transform: scale(1);
  transition: transform 0.3s ease;
}

.name:hover {
  transform: scale(1.02);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}
@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }
}

.tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}
@media (min-width: 640px) {
  .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
  }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  width: 0;
  animation: typing 4s ease-in-out infinite;
  animation-delay: 1s;
  animation-fill-mode: both;
}

@keyframes typing {
  0%, 10% { width: 0 }
  40%, 60% { width: 100% }
  90%, 100% { width: 0 }
}
</style>