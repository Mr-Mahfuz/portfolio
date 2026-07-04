<template>
  <footer class="py-16 mt-auto" :style="{ borderTop: '1px solid var(--border)' }">
    <div class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
        <!-- Brand -->
        <div>
          <div class="text-lg font-display font-bold mb-2" :style="{ color: 'var(--text-primary)' }">
            mahfuz<span :style="{ color: 'var(--accent)' }">.</span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" :style="{ color: 'var(--text-muted)' }">
            {{ $t('footerTagline') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] mb-4" :style="{ color: 'var(--text-muted)' }">
            {{ $t('quickLinks') }}
          </h4>
          <div class="flex flex-col gap-2.5">
            <a
              v-for="item in quickLinks"
              :key="item.label"
              :href="item.to"
              class="text-sm transition-colors duration-300"
              :style="{ color: 'var(--text-secondary)' }"
              @click.prevent="scrollToSection(item.to)"
            >
              {{ $t(item.label) }}
            </a>
          </div>
        </div>

        <!-- Connect -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] mb-4" :style="{ color: 'var(--text-muted)' }">
            {{ $t('connect') }}
          </h4>
          <div class="flex flex-col gap-2.5">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.link"
              target="_blank"
              class="text-sm flex items-center gap-2 transition-colors duration-300"
              :style="{ color: 'var(--text-secondary)' }"
            >
              <component :is="social.icon" :size="14" />
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        :style="{ borderTop: '1px solid var(--border)' }"
      >
        <div class="text-xs" :style="{ color: 'var(--text-muted)' }">
          &copy; {{ new Date().getFullYear() }} Mahfuz Ahmad. {{ $t('allRightsReserved') }}
        </div>
        <div class="text-xs" :style="{ color: 'var(--text-muted)' }">
          {{ $t('builtWith') }}
        </div>
      </div>
    </div>

    <!-- Scroll to top button -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 p-2.5 rounded-xl z-40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        :style="{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          color: 'var(--accent)',
          boxShadow: 'var(--shadow-card)',
        }"
      >
        <LucideArrowUp :size="18" />
      </button>
    </Transition>
  </footer>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import {
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
  Mail as LucideMail,
  ArrowUp as LucideArrowUp,
  Phone as LucidePhone
} from 'lucide-vue-next'

const { y } = useWindowScroll()
const router = useRouter()
const route = useRoute()
const showScrollTop = computed(() => y.value > 600)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = async (to) => {
  if (to.startsWith('#')) {
    if (route.path !== '/') {
      await router.push('/' + to)
    } else {
      const el = document.querySelector(to)
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
      }
    }
  }
}

const quickLinks = [
  { label: 'experience', to: '#experience' },
  { label: 'projects', to: '#projects' },
  { label: 'about', to: '#about' },
  { label: 'contact', to: '#contact' },
]

const socials = [
  { label: 'GitHub', link: 'https://github.com/Mr-Mahfuz', icon: LucideGithub },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mahfuz-ahmad-a87328327/', icon: LucideLinkedin },
  { label: 'mahfuz.raj.bd@gmail.com', link: 'mailto:mahfuz.raj.bd@gmail.com', icon: LucideMail },
  { label: '+880 1890-411110', link: 'tel:+8801890411110', icon: LucidePhone },
]
</script>
