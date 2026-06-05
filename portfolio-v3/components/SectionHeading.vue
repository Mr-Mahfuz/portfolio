<template>
  <div ref="headingRef" class="section-heading mb-4">
    <div v-if="badge" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-wider uppercase badge-style animate-fade-in">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" :style="{ background: 'var(--accent)' }"></span>
        <span class="relative inline-flex rounded-full h-2 w-2" :style="{ background: 'var(--accent)' }"></span>
      </span>
      {{ badge }}
    </div>

    <h2 class="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
      <span v-if="preText" class="text-[var(--text-primary)]">{{ preText }} </span>
      <span class="gradient-text">{{ highlightText }}</span>
      <span v-if="postText" class="text-[var(--text-primary)]"> {{ postText }}</span>
    </h2>

    <div v-if="$slots.subtitle" class="mt-4 text-lg md:text-xl max-w-2xl" style="color: var(--text-muted)">
      <slot name="subtitle" />
    </div>

    <!-- Animated underline -->
    <div class="mt-6 h-[2px] w-0 underline-bar" :class="{ 'animate-draw-line': isVisible }" :style="{ background: 'var(--gradient-accent-vivid)' }"></div>
  </div>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' },
  preText: { type: String, default: '' },
  highlightText: { type: String, required: true },
  postText: { type: String, default: '' },
})

const headingRef = ref(null)
const isVisible = ref(false)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (headingRef.value && $gsap) {
    $gsap.from(headingRef.value, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.value,
        start: 'top 85%',
        onEnter: () => { isVisible.value = true }
      }
    })
  }
})
</script>

<style scoped>
.badge-style {
  background: var(--glass-bg);
  border: 1px solid var(--border);
  color: var(--accent);
}

.underline-bar {
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.underline-bar.animate-draw-line {
  width: 80px;
}
</style>
