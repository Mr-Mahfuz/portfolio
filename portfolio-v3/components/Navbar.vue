<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[scrolled ? 'py-3 glass-nav shadow-lg' : 'py-6 bg-transparent']"
  >
    <div class="section-container flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-display font-bold tracking-tight group relative">
        <span class="relative z-10">Mahfuz</span>
        <span class="gradient-text relative z-10">.</span>
        <span
          class="absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
          :style="{ background: 'var(--gradient-accent)', filter: 'blur(12px)', opacity: '0' }"
        ></span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-10">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.to"
          class="nav-link"
          @click.prevent="scrollToSection(item.to)"
        >
          {{ $t(item.label) }}
        </a>
      </div>

      <div class="flex items-center space-x-3">
        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-300"
          :style="{
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            background: 'var(--glass-bg)',
          }"
        >
          {{ locale === 'en' ? 'BN' : 'EN' }}
        </button>

        <!-- Theme Switcher -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-xl transition-all duration-300 group/theme"
          :style="{
            border: '1px solid var(--border)',
            background: 'var(--glass-bg)',
          }"
        >
          <div class="relative w-[18px] h-[18px] overflow-hidden">
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 rotate-90 scale-50"
              enter-to-class="opacity-100 rotate-0 scale-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 -rotate-90 scale-50"
              mode="out-in"
            >
              <LucideSun v-if="$colorMode.value === 'dark'" :size="18" style="color: var(--accent)" />
              <LucideMoon v-else :size="18" style="color: var(--accent)" />
            </Transition>
          </div>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-xl transition-all duration-300"
          :style="{
            border: '1px solid var(--border)',
            background: 'var(--glass-bg)',
          }"
        >
          <Transition
            enter-active-class="transition-all duration-200"
            enter-from-class="rotate-90 opacity-0"
            enter-to-class="rotate-0 opacity-100"
            leave-active-class="transition-all duration-200"
            leave-from-class="rotate-0 opacity-100"
            leave-to-class="-rotate-90 opacity-0"
            mode="out-in"
          >
            <LucideX v-if="mobileMenuOpen" :size="20" />
            <LucideMenu v-else :size="20" />
          </Transition>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 backdrop-blur-0"
      enter-to-class="opacity-100 backdrop-blur-xl"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden fixed inset-0 top-[60px] z-40"
        :style="{ background: 'var(--bg-primary)', opacity: '0.98' }"
      >
        <div class="flex flex-col items-center justify-center h-full gap-8">
          <a
            v-for="(item, i) in navItems"
            :key="item.label"
            :href="item.to"
            class="text-3xl font-display font-bold transition-all duration-300 animate-slide-up"
            :style="{
              color: 'var(--text-primary)',
              animationDelay: `${i * 100}ms`,
            }"
            @click.prevent="scrollToSection(item.to); mobileMenuOpen = false"
          >
            {{ $t(item.label) }}
          </a>
        </div>
      </div>
    </Transition>

    <!-- Bottom gradient line (when scrolled) -->
    <div
      v-if="scrolled"
      class="absolute bottom-0 left-0 right-0 h-[1px] opacity-50"
      :style="{ background: 'var(--gradient-accent)' }"
    ></div>
  </nav>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { Sun as LucideSun, Moon as LucideMoon, Menu as LucideMenu, X as LucideX } from 'lucide-vue-next'

const { y } = useWindowScroll()
const { locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)

const scrolled = computed(() => y.value > 20)

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'bn' : 'en')
}

const toggleTheme = () => {
  const colorMode = useColorMode()
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = (hash) => {
  const el = document.querySelector(hash)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}

const navItems = [
  { label: 'projects', to: '#projects' },
  { label: 'about', to: '#about' },
  { label: 'contact', to: '#contact' },
]
</script>
