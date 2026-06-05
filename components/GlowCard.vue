<template>
  <div
    ref="cardRef"
    class="glow-card-wrapper relative rounded-3xl p-6 overflow-hidden transition-all duration-500 group"
    :class="[elevated ? 'hover:-translate-y-2' : 'hover:-translate-y-1']"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Mouse-tracking glow -->
    <div
      class="glow-spotlight absolute pointer-events-none z-[1] w-[350px] h-[350px] rounded-full transition-opacity duration-500"
      :style="{
        left: `${glowX}px`,
        top: `${glowY}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isHovering ? 1 : 0,
        background: isDark
          ? 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(184, 149, 106, 0.1) 0%, transparent 70%)'
      }"
    />

    <!-- Animated border gradient (visible on hover) -->
    <div
      class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-[1]"
      :style="{
        background: 'var(--gradient-accent-vivid)',
        padding: '1px',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
      }"
    />

    <!-- Card background -->
    <div class="absolute inset-[1px] rounded-[calc(1.5rem-1px)] -z-[0]"
      :style="{ background: 'var(--bg-card)' }"
    />

    <!-- Card border (default state) -->
    <div class="absolute inset-0 rounded-3xl border transition-colors duration-500 z-[0]"
      :style="{ borderColor: isHovering ? 'var(--border-hover)' : 'var(--border-card)' }"
    />

    <!-- Content -->
    <div class="relative z-[2]">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  elevated: {
    type: Boolean,
    default: true
  }
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const cardRef = ref(null)
const glowX = ref(0)
const glowY = ref(0)
const isHovering = ref(false)

const onMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  glowX.value = e.clientX - rect.left
  glowY.value = e.clientY - rect.top
  isHovering.value = true
}

const onMouseLeave = () => {
  isHovering.value = false
}

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (cardRef.value && $gsap) {
    $gsap.from(cardRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 90%',
      }
    })
  }
})
</script>

<style scoped>
.glow-card-wrapper {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-card);
}

.glow-card-wrapper:hover {
  box-shadow: var(--shadow-card-hover);
}
</style>
