<script setup>
import { ref, onMounted } from 'vue'

const stats = ref({
  users: 0,
  requests: 0,
  uptime: 0
})

onMounted(() => {
  // 添加数字增长动画
  animateNumber(stats.value, 'users', 10000)
  animateNumber(stats.value, 'requests', 1000000)
  animateNumber(stats.value, 'uptime', 99.9)
})

function animateNumber(obj, prop, target) {
  let start = 0
  const duration = 2000
  const step = 16
  
  const increment = (target * step) / duration
  
  const handle = setInterval(() => {
    start += increment
    obj[prop] = Math.min(start, target)
    
    if (start >= target) {
      clearInterval(handle)
    }
  }, step)
}
</script>

<template>
  <div class="stats-bar">
    <div class="stat-item">
      <div class="stat-value">{{ Math.round(stats.users).toLocaleString() }}+</div>
      <div class="stat-label">活跃用户</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ Math.round(stats.requests).toLocaleString() }}+</div>
      <div class="stat-label">每日请求</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">{{ stats.uptime.toFixed(1) }}%</div>
      <div class="stat-label">服务可用率</div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(315deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: var(--text-light);
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .stats-bar {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
