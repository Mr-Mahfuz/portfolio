<template>
  <div class="text-reveal-wrapper">
    <div
      ref="textRef"
      class="text-reveal-inner"
      :class="{ 'text-revealed': revealed }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const textRef = ref(null)
const revealed = ref(false)
const { $gsap } = useNuxtApp()

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0.8
  },
  triggerOnScroll: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  // Safety fallback: if GSAP fails or takes too long, force reveal
  const safetyTimer = setTimeout(() => {
    revealed.value = true
  }, (props.delay * 1000) + 2000)

  if (!textRef.value || !$gsap) {
    revealed.value = true
    return
  }

  const animConfig = {
    y: '40px',
    opacity: 0,
    duration: props.duration,
    delay: props.delay,
    ease: 'power3.out',
    onComplete: () => {
      revealed.value = true
      clearTimeout(safetyTimer)
    }
  }

  if (props.triggerOnScroll) {
    $gsap.from(textRef.value, {
      ...animConfig,
      scrollTrigger: {
        trigger: textRef.value,
        start: 'top 90%',
      }
    })
  } else {
    $gsap.from(textRef.value, animConfig)
  }
})
</script>

<style scoped>
.text-reveal-wrapper {
  overflow: hidden;
}

.text-reveal-inner {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.text-reveal-inner.text-revealed {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
