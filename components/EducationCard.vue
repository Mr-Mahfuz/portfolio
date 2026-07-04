<template>
  <div
    class="card p-6 group"
    :class="{ 'border-l-2': highlight }"
    :style="highlight ? { borderLeftColor: 'var(--accent)' } : {}"
  >
    <div class="flex items-start justify-between gap-4 mb-3">
      <div>
        <h3 class="text-lg font-display font-bold" :style="{ color: 'var(--text-primary)' }">
          {{ degree }}
        </h3>
        <p class="text-sm font-medium" :style="{ color: 'var(--accent)' }">
          {{ institution }}
        </p>
      </div>
      <div class="text-right shrink-0">
        <div
          v-if="result"
          class="text-lg font-display font-bold"
          :style="{ color: 'var(--text-primary)' }"
        >
          {{ result }}
        </div>
        <div class="text-xs" :style="{ color: 'var(--text-muted)' }">
          {{ period }}
        </div>
      </div>
    </div>

    <div
      v-if="location"
      class="text-xs mb-3"
      :style="{ color: 'var(--text-muted)' }"
    >
      {{ location }}
    </div>

    <!-- Coursework or details -->
    <div v-if="details && details.length" class="mt-4 pt-3" :style="{ borderTop: '1px solid var(--border)' }">
      <p class="text-xs font-semibold uppercase tracking-wider mb-2" :style="{ color: 'var(--text-muted)' }">
        {{ detailsLabel }}
      </p>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="item in details"
          :key="item"
          class="px-2 py-1 text-[11px] font-medium rounded-md"
          :style="{
            background: 'var(--accent-subtle)',
            color: 'var(--text-secondary)',
          }"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  period: { type: String, required: true },
  result: { type: String, default: '' },
  location: { type: String, default: '' },
  details: { type: Array, default: () => [] },
  detailsLabel: { type: String, default: 'Coursework' },
  highlight: { type: Boolean, default: false },
})
</script>
