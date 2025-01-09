import { ref, onMounted } from 'vue'

export function useTypewriter(text, delay = 100) {
  const displayText = ref('')

  onMounted(() => {
    if (!text) return
    
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        displayText.value = text.slice(0, currentIndex)
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, delay)
  })

  return displayText
}
