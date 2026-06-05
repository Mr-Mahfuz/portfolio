<template>
  <GlowCard class="flex flex-col h-full overflow-hidden group">
    <!-- Image area -->
    <div class="relative aspect-[16/10] -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-3xl">
      <img
        :src="image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'"
        class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        :alt="title"
        loading="lazy"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      <!-- Accent line at bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" :style="{ background: 'var(--gradient-accent)' }"></div>
    </div>

    <div class="flex flex-col flex-grow">
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in tags" :key="tag" class="tag-pill">
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-display font-bold mb-3 transition-colors duration-300" :style="{ color: 'var(--text-primary)' }">
        <span class="group-hover:gradient-text transition-all duration-300">{{ title }}</span>
      </h3>

      <!-- Description -->
      <p class="text-sm leading-relaxed mb-6 flex-grow" :style="{ color: 'var(--text-muted)' }">
        {{ description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-4" :style="{ borderTop: '1px solid var(--border-card)' }">
        <a
          v-if="link"
          :href="link"
          target="_blank"
          class="text-sm font-bold flex items-center gap-1.5 transition-all duration-300 group/link"
          :style="{ color: 'var(--accent)' }"
        >
          {{ $t('viewProjects') }}
          <LucideArrowRight :size="16" class="group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
        <div v-else class="text-xs font-medium italic" :style="{ color: 'var(--text-muted)' }">
          {{ $t('enterprise') }}
        </div>
      </div>
    </div>
  </GlowCard>
</template>

<script setup>
import { ArrowRight as LucideArrowRight } from 'lucide-vue-next'

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  tags: Array
})
</script>
