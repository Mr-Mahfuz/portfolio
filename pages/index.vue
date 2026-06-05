<template>
  <div class="min-h-screen noise-bg" :style="{ background: 'var(--bg-primary)' }">
    <Navbar />

    <main>
      <!-- ========== HERO SECTION ========== -->
      <section id="hero" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <!-- Background effects -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <!-- Gradient orbs -->
          <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full translate-x-1/3 -translate-y-1/3 blur-[120px] opacity-30"
            :class="isDark ? 'bg-neon-cyan/20' : 'bg-warm-gold/20'"
          ></div>
          <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/3 translate-y-1/3 blur-[100px] opacity-20"
            :class="isDark ? 'bg-neon-purple/20' : 'bg-warm-caramel/15'"
          ></div>
          <!-- Grid pattern -->
          <div class="absolute inset-0 opacity-[0.03]"
            :style="{
              backgroundImage: `radial-gradient(${isDark ? '#e8e8f0' : '#2c2419'} 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }"
          ></div>
        </div>

        <div class="section-container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Left: Text Content -->
            <div class="order-2 lg:order-1">
              <!-- Available badge -->
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 animate-fade-in"
                :style="{
                  background: isDark ? 'rgba(57, 255, 20, 0.08)' : 'rgba(184, 149, 106, 0.1)',
                  border: `1px solid ${isDark ? 'rgba(57, 255, 20, 0.2)' : 'rgba(184, 149, 106, 0.25)'}`,
                  color: isDark ? '#39ff14' : 'var(--accent)',
                }"
              >
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    :style="{ background: isDark ? '#39ff14' : 'var(--accent)' }"
                  ></span>
                  <span class="relative inline-flex rounded-full h-2 w-2"
                    :style="{ background: isDark ? '#39ff14' : 'var(--accent)' }"
                  ></span>
                </span>
                Available for new projects
              </div>

              <!-- Main heading -->
              <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight leading-[1.08] animate-slide-up"
                :style="{ color: 'var(--text-primary)' }"
              >
                {{ $t('welcome') }}
              </h1>

              <!-- Subtitle with typing -->
              <p class="text-lg md:text-xl mb-10 leading-relaxed animate-slide-up [animation-delay:100ms]"
                :style="{ color: 'var(--text-muted)' }"
              >
                {{ $t('subtitle') }} I specialize in
                <TypingText
                  :words="['Vue.js', 'Nuxt 3', 'TypeScript', 'Modern UI/UX']"
                  class="font-bold"
                />
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap gap-4 animate-slide-up [animation-delay:200ms]">
                <MagneticButton variant="primary" @click="scrollTo('#projects')">
                  {{ $t('viewProjects') }}
                  <template #icon-right>
                    <LucideArrowRight :size="18" />
                  </template>
                </MagneticButton>
                <a href="/Mahfuz_Ahmad_CV.pdf" download="Mahfuz_Ahmad_CV.pdf">
                  <MagneticButton variant="secondary">
                    {{ $t('downloadResume') }}
                    <template #icon-right>
                      <LucideDownload :size="18" />
                    </template>
                  </MagneticButton>
                </a>
              </div>

              <!-- Social links -->
              <div class="mt-12 flex items-center gap-6 animate-slide-up [animation-delay:300ms]">
                <a
                  v-for="social in socials"
                  :key="social.label"
                  :href="social.link"
                  target="_blank"
                  class="p-2.5 rounded-xl transition-all duration-300 group/social"
                  :style="{
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }"
                  :title="social.label"
                >
                  <component
                    :is="social.icon"
                    :size="20"
                    class="group-hover/social:scale-110 transition-all duration-300"
                    :style="{ color: 'inherit' }"
                  />
                </a>
              </div>
            </div>

            <!-- Right: Profile Photo -->
            <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in [animation-delay:200ms]">
              <div class="w-[280px] h-[340px] md:w-[340px] md:h-[420px] lg:w-[380px] lg:h-[460px]">
                <ProfilePhoto
                  :src="mahfuzPhoto"
                  alt="Mahfuz Ahmad - Software Engineer"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
          <span class="text-[10px] uppercase tracking-[0.3em] font-medium" :style="{ color: 'var(--text-muted)' }">Scroll</span>
          <div class="w-[1px] h-8" :style="{ background: 'var(--gradient-accent)' }"></div>
        </div>
      </section>

      <!-- ========== PROJECTS SECTION ========== -->
      <section id="projects" class="py-24 md:py-32 relative">
        <!-- Section background -->
        <div class="absolute inset-0 -z-10" :style="{ background: 'var(--gradient-section)' }"></div>
        <div class="section-divider"></div>

        <div class="section-container pt-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              preText="Selected"
              highlightText="Work"
            >
              <template #subtitle>
                A collection of projects ranging from enterprise systems to personalized client experiences.
              </template>
            </SectionHeading>

            <NuxtLink
              to="/projects"
              class="group flex items-center gap-2 text-sm font-bold transition-all duration-300 shrink-0"
              :style="{ color: 'var(--text-muted)' }"
            >
              Explore All
              <LucideArrowUpRight
                :size="18"
                class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="index"
              v-bind="project"
              :style="{ animationDelay: `${index * 100}ms` }"
            />
          </div>
        </div>
      </section>

      <!-- ========== ABOUT & SKILLS SECTION ========== -->
      <section id="about" class="py-24 md:py-40 relative">
        <div class="section-container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <!-- Left: About text -->
            <div class="reveal">
              <SectionHeading
                highlightText="About Me"
                postText="& My Work"
              >
                <template #subtitle>
                  Building the future of the web, one pixel at a time.
                </template>
              </SectionHeading>

              <div class="space-y-5 text-lg leading-relaxed mt-8" :style="{ color: 'var(--text-muted)' }">
                <p class="reveal">
                  I'm a Software Engineer dedicated to crafting high-performance web applications that provide exceptional user experiences. My approach combines technical excellence with a keen eye for design.
                </p>
                <p class="reveal">
                  With a background in building complex enterprise systems and real-time management portals, I bring a wealth of experience to every project I undertake.
                </p>
              </div>

              <!-- Beyond the Code -->
              <div class="pt-8 mt-8 reveal" :style="{ borderTop: '1px solid var(--border)' }">
                <h3 class="text-sm font-bold uppercase tracking-[0.2em] mb-6" :style="{ color: 'var(--text-muted)' }">
                  {{ $t('beyondCode') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="hobby in hobbies"
                    :key="hobby"
                    class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    :style="{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }"
                  >
                    {{ hobby }}
                  </span>
                </div>
              </div>

              <!-- Experience -->
              <div class="pt-8 mt-8 reveal" :style="{ borderTop: '1px solid var(--border)' }">
                <h3 class="text-sm font-bold uppercase tracking-[0.2em] mb-6" :style="{ color: 'var(--text-muted)' }">
                  Experience
                </h3>
                <div class="space-y-6">
                  <div class="relative pl-6" :style="{ borderLeft: '2px solid var(--border)' }">
                    <div class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full" :style="{ background: 'var(--accent)' }"></div>
                    <h4 class="font-bold text-lg" :style="{ color: 'var(--text-primary)' }">Rigg Technologies</h4>
                    <p class="text-sm mb-2" :style="{ color: 'var(--accent)' }">Junior Software Engineer (Jan 2026 - Present)</p>
                    <p class="text-sm leading-relaxed" :style="{ color: 'var(--text-muted)' }">
                      Developing and maintaining enterprise web applications using Nuxt 3, Vue.js, and Supabase. Building multi-tenant POS platforms, fleet management portals, and event apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Skills Grid -->
            <div class="grid grid-cols-2 gap-4">
              <GlowCard v-for="skill in skills" :key="skill.name" class="group/skill">
                <div
                  class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover/skill:scale-110"
                  :style="{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--accent)',
                  }"
                >
                  <component :is="skill.icon" :size="24" />
                </div>
                <h4 class="font-bold text-lg mb-1.5" :style="{ color: 'var(--text-primary)' }">
                  {{ skill.name }}
                </h4>
                <p class="text-xs uppercase tracking-[0.15em]" :style="{ color: 'var(--text-muted)' }">
                  {{ skill.category }}
                </p>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== CONTACT / CTA SECTION ========== -->
      <section id="contact" class="pb-24 md:pb-40 relative">
        <div class="section-container">
          <div
            class="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden"
            :style="{
              background: isDark
                ? 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(180,74,255,0.08), rgba(255,45,124,0.05))'
                : 'linear-gradient(135deg, rgba(184,149,106,0.12), rgba(212,184,150,0.08))',
              border: '1px solid var(--border)',
            }"
          >
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-80 h-80 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 opacity-40"
              :class="isDark ? 'bg-neon-purple/20' : 'bg-warm-gold/20'"
            ></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3 opacity-30"
              :class="isDark ? 'bg-neon-cyan/15' : 'bg-warm-caramel/15'"
            ></div>

            <!-- Floating decorative dots -->
            <div class="absolute top-12 left-12 w-2 h-2 rounded-full animate-float opacity-40" :style="{ background: 'var(--accent)' }"></div>
            <div class="absolute top-24 right-20 w-3 h-3 rounded-full animate-float-delayed opacity-30" :style="{ background: 'var(--accent)' }"></div>
            <div class="absolute bottom-20 left-1/4 w-2 h-2 rounded-full animate-float opacity-25" :style="{ background: 'var(--accent)' }"></div>

            <div class="relative z-10">
              <h2 class="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 reveal"
                :style="{ color: 'var(--text-primary)' }"
              >
                Start a <span class="gradient-text">project</span>.
              </h2>
              <p class="text-lg md:text-xl max-w-xl mx-auto mb-10 reveal" :style="{ color: 'var(--text-muted)' }">
                Have a vision in mind? Let's turn it into reality with modern technologies and professional design.
              </p>

              <div class="reveal">
                <MagneticButton variant="primary" size="md">
                  <a href="mailto:mahfuz.raj.bd@gmail.com" class="inline-flex items-center gap-3">
                    Get in Touch <LucideMail :size="20" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== FOOTER ========== -->
      <footer class="py-12 relative" :style="{ borderTop: '1px solid var(--border)' }">
        <!-- Gradient top line -->
        <div class="absolute top-0 left-0 right-0 h-[1px]" :style="{ background: 'var(--gradient-accent)', opacity: '0.3' }"></div>

        <div class="section-container">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="text-center md:text-left">
              <div class="text-xl font-display font-bold mb-1" :style="{ color: 'var(--text-primary)' }">
                Mahfuz Ahmad
              </div>
              <p class="text-sm italic" :style="{ color: 'var(--text-muted)' }">
                Crafting experiences, not just code.
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
              &copy; {{ new Date().getFullYear() }} All Rights Reserved.
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
    </main>
  </div>
</template>

<script setup>
import {
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
  Mail as LucideMail,
  ArrowRight as LucideArrowRight,
  Download as LucideDownload,
  ArrowUpRight as LucideArrowUpRight,
  ArrowUp as LucideArrowUp,
  Code2 as LucideCode,
  Layers as LucideLayers,
  Cpu as LucideCpu,
  Monitor as LucideMonitor,
  Database as LucideDatabase
} from 'lucide-vue-next'
import { useWindowScroll } from '@vueuse/core'

import mahfuzPhoto from '~/assets/images/Mahfuz.jpg'

const { $gsap } = useNuxtApp()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const { y } = useWindowScroll()
const showScrollTop = computed(() => y.value > 600)

onMounted(() => {
  // Reveal animations on scroll
  $gsap.utils.toArray('.reveal').forEach((el, i) => {
    $gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: i * 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      }
    })
  })
})

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const socials = [
  { label: 'GitHub', link: 'https://github.com/Mr-Mahfuz', icon: LucideGithub },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mahfuz-ahmad-a87328327/', icon: LucideLinkedin },
  { label: 'Email', link: 'mailto:mahfuz.raj.bd@gmail.com', icon: LucideMail },
]

const projects = [
  {
    title: 'GK International Training Institute',
    description: 'Developed an automated certificate engine and student management pipeline, processing thousands of enrollments efficiently.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://gkinstitutebd.com',
    tags: ['Nuxt 3', 'Automation', 'EdTech']
  },
  {
    title: 'Fleet Logistics Suite',
    description: 'A comprehensive fleet management solution with real-time tracking, maintenance scheduling, and fuel monitoring.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://fleet-ujjal.riggcorp.com',
    tags: ['Supabase', 'Logistics', 'Vue']
  },
  {
    title: 'Enterprise POS',
    description: 'Modern Point of Sale system designed for high-traffic retail environments with offline sync capabilities.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Inventory', 'FinTech', 'Nuxt']
  }
]

const skills = [
  { name: 'Frontend', category: 'Vue.js, Nuxt 3, Tailwind', icon: LucideMonitor },
  { name: 'Backend', category: 'Node/Hono, PostgreSQL, Supabase', icon: LucideDatabase },
  { name: 'Languages', category: 'JS/TS, Python, SQL, Java', icon: LucideCode },
  { name: 'Tools', category: 'Git, VS Code, Vercel', icon: LucideLayers },
]

const hobbies = ['Hafiz-e-Quran', 'PC Gaming', 'Boxing', 'Running', 'Swimming']
</script>
