<template>
  <span class="inline-block font-mono">
    <span class="typing-text">{{ currentText }}</span>
    <span class="typing-cursor" :style="{ color: 'var(--accent)' }">|</span>
  </span>
</template>

<script setup>
const props = defineProps({
  words: {
    type: Array,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 100
  },
  deletingSpeed: {
    type: Number,
    default: 50
  },
  pauseTime: {
    type: Number,
    default: 2000
  }
})

const currentText = ref('')
const wordIndex = ref(0)
const isDeleting = ref(false)

const type = () => {
  const fullWord = props.words[wordIndex.value]

  if (isDeleting.value) {
    currentText.value = fullWord.substring(0, currentText.value.length - 1)
  } else {
    currentText.value = fullWord.substring(0, currentText.value.length + 1)
  }

  let delay = isDeleting.value ? props.deletingSpeed : props.typingSpeed

  if (!isDeleting.value && currentText.value === fullWord) {
    delay = props.pauseTime
    isDeleting.value = true
  } else if (isDeleting.value && currentText.value === '') {
    isDeleting.value = false
    wordIndex.value = (wordIndex.value + 1) % props.words.length
    delay = 500
  }

  setTimeout(type, delay)
}

onMounted(() => {
  type()
})
</script>

<style scoped>
.typing-text {
  color: var(--accent);
}

.dark .typing-text {
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.4),
               0 0 30px rgba(0, 240, 255, 0.15);
}

.typing-cursor {
  animation: cursor-blink 1s step-end infinite;
}

.dark .typing-cursor {
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
