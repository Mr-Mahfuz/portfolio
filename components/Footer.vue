<template>
  <footer class="py-12 relative mt-auto" :style="{ borderTop: '1px solid var(--border)' }">
    <!-- Gradient top line -->
    <div class="absolute top-0 left-0 right-0 h-[1px]" :style="{ background: 'var(--gradient-accent)', opacity: '0.3' }"></div>

    <div class="section-container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left">
          <div class="text-xl font-display font-bold mb-1" :style="{ color: 'var(--text-primary)' }">
            Mahfuz Ahmad
          </div>
          <p class="text-sm italic" :style="{ color: 'var(--text-muted)' }">
            {{ $t('footerTagline') }}
          </p>
        </div>

        <div class="flex items-center gap-5">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.link"
            target="_blank"
            class="p-2 rounded-lg transition-all duration-300"
            :style="{ color: 'var(--text-muted)' }"
            :title="social.label"
          >
            <component :is="social.icon" :size="20" class="hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        <div class="text-sm" :style="{ color: 'var(--text-muted)' }">
          &copy; {{ new Date().getFullYear() }} {{ $t('allRightsReserved') }}
        </div>
      </div>
    </div>

    <!-- Scroll to top button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 rounded-xl z-40 transition-all duration-300 hover:-translate-y-1"
      :style="{
        background: 'var(--glass-bg)',
        border: '1px solid var(--border)',
        color: 'var(--accent)',
        backdropFilter: 'blur(12px)',
      }"
    >
      <LucideArrowUp :size="20" />
    </button>
  </footer>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import {
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
  Mail as LucideMail,
  ArrowUp as LucideArrowUp
} from 'lucide-vue-next'

const { y } = useWindowScroll()
const showScrollTop = computed(() => y.value > 600)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const socials = [
  { label: 'GitHub', link: 'https://github.com/Mr-Mahfuz', icon: LucideGithub },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mahfuz-ahmad-a87328327/', icon: LucideLinkedin },
  { label: 'Email', link: 'mailto:mahfuz.raj.bd@gmail.com', icon: LucideMail },
]
</script>
