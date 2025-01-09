<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Logo'
  }
})

// 添加图片路径处理
const imgSrc = computed(() => {
  // 如果是完整URL则直接使用
  if (props.src.startsWith('http')) {
    return props.src
  }
  // 否则确保使用相对于根目录的路径
  return props.src.startsWith('/') ? props.src : `/${props.src}`
})
</script>

<template>
  <div class="logo-container">
    <div class="glow-effect"></div>
    <img :src="imgSrc" :alt="alt" class="logo-image">
  </div>
</template>

<style scoped>
.logo-container {
  position: absolute;
  left: 25%;
  width: 320px;  /* 增加 0.5 倍 */
  height: 320px;  /* 增加 0.5 倍 */
  margin: -4rem auto 0;  /* 增加负边距使其更靠近文字 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* 添加容器阴影效果 */
  filter: drop-shadow(0 0 40px rgba(100, 126, 255, 0.5));  /* 增强阴影 */
}

.glow-effect {
  position: absolute;
  width: 280px;
  height: 280px;
  background: rgba(100, 126, 255, 0.4);  /* 增加基础不透明度 */
  border-radius: 50%;
  filter: blur(25px);  /* 减小模糊半径 */
  animation: glowPulse 2s ease-in-out infinite;  /* 更快的动画 */
  /* 添加多层光晕 */
  box-shadow:
    0 0 40px rgba(100, 126, 255, 0.4),
    0 0 80px rgba(100, 126, 255, 0.3),
    0 0 120px rgba(100, 126, 255, 0.2);
}

.logo-image {
  position: relative;
  z-index: 2;
  width: 240px;  /* 增加图片尺寸 */
  height: 240px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(100, 126, 255, 0.5));  /* 增强阴影 */
  animation: imageGlow 1.5s ease-in-out infinite alternate;  /* 更快的交替动画 */
}

/* 响应式设计调整 */
@media (min-width: 640px) {
  .logo-container {
    margin-top: -5rem;  /* 调整间距 */
  }
}

@media (min-width: 960px) {
  .logo-container {
    margin-top: -6rem;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes gentlePulse {
  0% {
    transform: scale(0.98);
    opacity: 0.4;  /* 增加最小不透明度 */
    box-shadow:
      0 0 30px rgba(100, 126, 255, 0.3),
      0 0 60px rgba(100, 126, 255, 0.2),
      0 0 100px rgba(100, 126, 255, 0.1);
  }
  50% {
    transform: scale(1.02);
    opacity: 0.6;  /* 增加最大不透明度 */
    box-shadow:
      0 0 40px rgba(100, 126, 255, 0.4),
      0 0 80px rgba(100, 126, 255, 0.3),
      0 0 120px rgba(100, 126, 255, 0.2);
  }
  100% {
    transform: scale(0.98);
    opacity: 0.4;
    box-shadow:
      0 0 30px rgba(100, 126, 255, 0.3),
      0 0 60px rgba(100, 126, 255, 0.2),
      0 0 100px rgba(100, 126, 255, 0.1);
  }
}

@keyframes gentleGlow {
  from {
    filter: drop-shadow(0 0 15px rgba(100, 126, 255, 0.4));
  }
  to {
    filter: drop-shadow(0 0 30px rgba(100, 126, 255, 0.6));
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.98);
    box-shadow:
      0 0 30px rgba(100, 126, 255, 0.2),
      0 0 60px rgba(100, 126, 255, 0.1);
  }
  50% {
    opacity: 0.8;  /* 增加最大不透明度 */
    transform: scale(1.02);
    box-shadow:
      0 0 50px rgba(100, 126, 255, 0.6),
      0 0 100px rgba(100, 126, 255, 0.4);
  }
}

@keyframes imageGlow {
  from {
    filter: drop-shadow(0 0 10px rgba(100, 126, 255, 0.2));
  }
  to {
    filter: drop-shadow(0 0 30px rgba(100, 126, 255, 0.8));  /* 增加发光强度 */
  }
}
</style>
