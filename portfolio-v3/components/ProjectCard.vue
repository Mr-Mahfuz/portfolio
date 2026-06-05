<template>
  <div class="card-standard group flex flex-col h-full overflow-hidden">
    <div class="relative aspect-[16/10] -mx-6 -mt-6 mb-6 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
      <img 
        :src="image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'" 
        class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        :alt="title"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    
    <div class="flex flex-col flex-grow">
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in tags" :key="tag" class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg">
          {{ tag }}
        </span>
      </div>

      <h3 class="text-xl font-display font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {{ title }}
      </h3>
      
      <p class="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
        {{ description }}
      </p>
      
      <div class="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <a v-if="link" :href="link" target="_blank" class="text-sm font-bold flex items-center gap-1.5 text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
          {{ $t('viewProjects') }} 
          <LucideArrowRight :size="16" />
        </a>
        <div v-else class="text-xs text-zinc-400 font-medium italic">
          {{ $t('enterprise') }}
        </div>
      </div>
    </div>
  </div>
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
