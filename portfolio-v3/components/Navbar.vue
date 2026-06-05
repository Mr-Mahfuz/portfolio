<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[y > 20 ? 'py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800' : 'py-6 bg-transparent']"
  >
    <div class="section-container flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-display font-bold tracking-tight">
        Mahfuz<span class="text-primary-600">.</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-10">
        <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">
          {{ $t(item.label) }}
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-3">
        <!-- Language Switcher -->
        <button 
          @click="toggleLocale"
          class="px-3 py-1.5 text-xs font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          {{ locale === 'en' ? 'BN' : 'EN' }}
        </button>

        <!-- Theme Switcher -->
        <button 
          @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
          class="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <LucideSun v-if="$colorMode.value === 'dark'" :size="18" />
          <LucideMoon v-else :size="18" />
        </button>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <LucideX v-if="mobileMenuOpen" :size="20" />
          <LucideMenu v-else :size="20" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-2xl">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.label" 
          :to="item.to" 
          class="block text-lg font-medium py-2"
          @click="mobileMenuOpen = false"
        >
          {{ $t(item.label) }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { Sun as LucideSun, Moon as LucideMoon, Menu as LucideMenu, X as LucideX } from 'lucide-vue-next'

const { y } = useWindowScroll()
const { locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'bn' : 'en')
}

const navItems = [
  { label: 'projects', to: '#projects' },
  { label: 'about', to: '#about' },
  { label: 'contact', to: '#contact' },
]
</script>
