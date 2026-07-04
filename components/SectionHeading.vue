<template>
  <div ref="headingRef" class="mb-4">
    <!-- Section number label with decorative line -->
    <div
      v-if="number"
      class="flex items-center gap-3 mb-4"
    >
      <span class="section-label">{{ number }} — {{ label }}</span>
      <span
        class="flex-grow max-w-[60px] h-px"
        :style="{ background: 'var(--accent-border)' }"
      ></span>
    </div>
    <div
      v-else-if="label"
      class="section-label mb-4"
    >
      {{ label }}
    </div>

    <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1]">
      <span :style="{ color: 'var(--text-primary)' }">{{ text }}</span>
      <span v-if="accentText" class="accent-text"> {{ accentText }}</span>
    </h2>

    <div
      v-if="$slots.subtitle"
      class="mt-4 text-base md:text-lg max-w-2xl leading-relaxed"
      :style="{ color: 'var(--text-muted)' }"
    >
      <slot name="subtitle" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: { type: String, default: '' },
  label: { type: String, default: '' },
  text: { type: String, required: true },
  accentText: { type: String, default: '' },
})

const headingRef = ref(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (headingRef.value && $gsap) {
    $gsap.from(headingRef.value, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.value,
        start: 'top 88%',
      }
    })
  }
})
</script>
