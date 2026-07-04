<template>
  <div class="scroll-progress" :style="{ width: `${progress}%` }" />
</template>

<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { y } = useWindowScroll()
const { height: windowHeight } = useWindowSize()

const progress = computed(() => {
  if (!import.meta.client) return 0
  const docHeight = document.documentElement.scrollHeight - windowHeight.value
  if (docHeight <= 0) return 0
  return Math.min((y.value / docHeight) * 100, 100)
})
</script>
