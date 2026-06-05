<template>
  <span class="inline-block">
    {{ currentText }}<span class="animate-pulse text-neon-cyan">|</span>
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
