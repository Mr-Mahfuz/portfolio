<template>
  <div class="overflow-hidden py-4 select-none" ref="marqueeRef">
    <!-- Row 1: Left to right -->
    <div class="flex mb-3">
      <div class="flex shrink-0 gap-3 marquee-track-left" :style="{ '--marquee-duration': duration }">
        <span
          v-for="(skill, i) in [...row1, ...row1]"
          :key="'r1-' + i"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Row 2: Right to left -->
    <div class="flex">
      <div class="flex shrink-0 gap-3 marquee-track-right" :style="{ '--marquee-duration': duration }">
        <span
          v-for="(skill, i) in [...row2, ...row2]"
          :key="'r2-' + i"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row1: {
    type: Array,
    required: true,
  },
  row2: {
    type: Array,
    required: true,
  },
  duration: {
    type: String,
    default: '35s',
  },
})

const marqueeRef = ref(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (!marqueeRef.value || !$gsap) return
  $gsap.from(marqueeRef.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: marqueeRef.value,
      start: 'top 90%',
    }
  })
})
</script>

<style scoped>
.skill-tag {
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  border-radius: 10px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  background: var(--bg-card);
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--accent-border);
  color: var(--accent);
  background: var(--accent-subtle);
}
</style>
