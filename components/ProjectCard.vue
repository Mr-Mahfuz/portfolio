<template>
  <div
    class="card overflow-hidden group"
    :class="[horizontal ? 'flex flex-col md:flex-row' : 'flex flex-col']"
  >
    <!-- Image area -->
    <div
      class="relative overflow-hidden shrink-0"
      :class="[
        horizontal
          ? 'md:w-[45%] aspect-[16/10] md:aspect-auto'
          : 'aspect-[16/10]'
      ]"
    >
      <img
        :src="image"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        :alt="title"
        loading="lazy"
      />
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
      ></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-grow p-6">
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span v-for="tag in tags" :key="tag" class="tag-pill">
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3
        class="text-xl font-display font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]"
        :style="{ color: 'var(--text-primary)' }"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p
        class="text-sm leading-relaxed mb-5 flex-grow"
        :style="{ color: 'var(--text-secondary)' }"
      >
        {{ description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-4" :style="{ borderTop: '1px solid var(--border)' }">
        <a
          v-if="link"
          :href="link"
          target="_blank"
          class="text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 group/link"
          :style="{ color: 'var(--accent)' }"
        >
          {{ $t('viewLive') }}
          <LucideArrowUpRight :size="15" class="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
        </a>
        <div v-else class="text-xs font-medium" :style="{ color: 'var(--text-muted)' }">
          {{ $t('enterprise') }}
        </div>

        <a
          v-if="github"
          :href="github"
          target="_blank"
          class="text-sm flex items-center gap-1 transition-colors duration-300"
          :style="{ color: 'var(--text-muted)' }"
        >
          <LucideGithub :size="15" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRight as LucideArrowUpRight, Github as LucideGithub } from 'lucide-vue-next'

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  github: String,
  tags: Array,
  horizontal: {
    type: Boolean,
    default: false,
  },
})
</script>
