<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-[7px] top-3 bottom-3 w-px"
      :style="{ background: 'var(--border-hover)' }"
    ></div>

    <div class="space-y-10">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative pl-8 reveal-item"
      >
        <!-- Timeline dot -->
        <div
          class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-[3px] z-10"
          :style="{
            borderColor: index === 0 ? 'var(--accent)' : 'var(--text-muted)',
            background: index === 0 ? 'var(--accent)' : 'var(--bg-primary)',
          }"
        ></div>

        <!-- Current role indicator -->
        <div
          v-if="index === 0"
          class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full animate-ping opacity-30"
          :style="{ background: 'var(--accent)' }"
        ></div>

        <!-- Content -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
            <h3 class="text-lg font-display font-bold" :style="{ color: 'var(--text-primary)' }">
              {{ item.role }}
            </h3>
            <span
              v-if="item.current"
              class="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider w-fit"
              :style="{
                background: 'var(--accent-subtle)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-border)',
              }"
            >
              {{ $t('current') }}
            </span>
          </div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-semibold" :style="{ color: 'var(--accent)' }">{{ item.company }}</span>
            <span class="text-xs" :style="{ color: 'var(--text-muted)' }">•</span>
            <span class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ item.period }}</span>
            <span class="text-xs" :style="{ color: 'var(--text-muted)' }">•</span>
            <span class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ item.location }}</span>
          </div>
          <ul class="space-y-2">
            <li
              v-for="(point, pi) in item.points"
              :key="pi"
              class="flex items-start gap-2.5 text-sm leading-relaxed"
              :style="{ color: 'var(--text-secondary)' }"
            >
              <span
                class="mt-2 w-1 h-1 rounded-full shrink-0"
                :style="{ background: 'var(--accent)' }"
              ></span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (!$gsap) return
  $gsap.utils.toArray('.reveal-item').forEach((el, i) => {
    $gsap.from(el, {
      opacity: 0,
      x: -20,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      }
    })
  })
})
</script>
