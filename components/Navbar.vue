<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[scrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent']"
  >
    <div class="section-container flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-display font-bold tracking-tight group">
        <span :style="{ color: 'var(--text-primary)' }">mahfuz</span>
        <span :style="{ color: 'var(--accent)' }">.</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.to"
          class="nav-link"
          :class="{ active: activeSection === item.to }"
          @click.prevent="scrollToSection(item.to)"
        >
          {{ $t(item.label) }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <!-- Language Switcher -->
        <button
          @click="toggleLocale"
          class="px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
          :style="{
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            background: 'transparent',
          }"
        >
          {{ locale === 'en' ? 'BN' : 'EN' }}
        </button>

        <!-- Theme Switcher -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
          :style="{
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            background: 'transparent',
          }"
        >
          <div class="relative w-[16px] h-[16px] overflow-hidden">
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 rotate-90 scale-50"
              enter-to-class="opacity-100 rotate-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 -rotate-90 scale-50"
              mode="out-in"
            >
              <LucideSun v-if="$colorMode.value === 'dark'" :size="16" :style="{ color: 'var(--accent)' }" />
              <LucideMoon v-else :size="16" :style="{ color: 'var(--text-secondary)' }" />
            </Transition>
          </div>
        </button>

        <!-- CTA Button (desktop) -->
        <a
          href="mailto:mahfuz.raj.bd@gmail.com"
          class="hidden lg:inline-flex btn-primary text-xs px-5 py-2 rounded-lg"
        >
          {{ $t('getInTouch') }}
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg transition-all duration-300 cursor-pointer"
          :style="{
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
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
            <LucideX v-if="mobileMenuOpen" :size="18" />
            <LucideMenu v-else :size="18" />
          </Transition>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden fixed inset-0 top-[52px] z-40"
        :style="{ background: 'var(--bg-primary)', backdropFilter: 'blur(20px)' }"
      >
        <div class="flex flex-col items-center justify-center h-full gap-8">
          <a
            v-for="(item, i) in navItems"
            :key="item.label"
            :href="item.to"
            class="text-2xl font-display font-bold transition-all duration-300 animate-slide-up"
            :style="{
              color: activeSection === item.to ? 'var(--accent)' : 'var(--text-primary)',
              animationDelay: `${i * 80}ms`,
            }"
            @click.prevent="scrollToSection(item.to); mobileMenuOpen = false"
          >
            {{ $t(item.label) }}
          </a>

          <a
            href="mailto:mahfuz.raj.bd@gmail.com"
            class="btn-primary mt-4 animate-slide-up"
            :style="{ animationDelay: '320ms' }"
            @click="mobileMenuOpen = false"
          >
            {{ $t('getInTouch') }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { Sun as LucideSun, Moon as LucideMoon, Menu as LucideMenu, X as LucideX } from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'

const { y } = useWindowScroll()
const { locale, setLocale } = useI18n()
const mobileMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()
const activeSection = ref('/')

const scrolled = computed(() => y.value > 20)

// Track active section on scroll
const updateActiveSection = () => {
  if (route.path !== '/') return

  const sections = ['contact', 'about', 'skills', 'projects', 'experience']
  const scrollPos = y.value + 200

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && scrollPos >= el.offsetTop - 100) {
      activeSection.value = `#${id}`
      return
    }
  }
  activeSection.value = '/'
}

watch(y, updateActiveSection)

onMounted(() => {
  updateActiveSection()
})

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'bn' : 'en')
}

const toggleTheme = () => {
  const colorMode = useColorMode()
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = async (to) => {
  if (to === '/') {
    if (route.path !== '/') {
      await router.push('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  if (to.startsWith('#')) {
    if (route.path !== '/') {
      await router.push('/' + to)
    } else {
      const el = document.querySelector(to)
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }
  } else {
    router.push(to)
  }
}

const navItems = [
  { label: 'home', to: '/' },
  { label: 'experience', to: '#experience' },
  { label: 'projects', to: '#projects' },
  { label: 'about', to: '#about' },
  { label: 'contact', to: '#contact' },
]
</script>
