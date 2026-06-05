<template>
  <button 
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
      variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      size === 'sm' ? 'px-4 py-2 text-sm' : 'px-8 py-3.5 text-base'
    ]"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary' // 'primary' | 'secondary'
  },
  size: {
    type: String,
    default: 'md' // 'sm' | 'md'
  }
})
</script>
