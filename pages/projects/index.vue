<template>
  <div class="relative min-h-screen noise-bg pt-32 pb-24 overflow-hidden" :style="{ background: 'var(--bg-primary)' }">
    <!-- Background effects -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <!-- Gradient orbs -->
      <div class="absolute top-0 left-0 w-[600px] h-[600px] rounded-full -translate-x-1/3 -translate-y-1/3 blur-[120px] opacity-30"
        :class="isDark ? 'bg-neon-cyan/20' : 'bg-warm-gold/20'"
      ></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] opacity-20"
        :class="isDark ? 'bg-neon-purple/20' : 'bg-warm-caramel/15'"
      ></div>
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-[0.03]"
        :style="{
          backgroundImage: `radial-gradient(${isDark ? '#e8e8f0' : '#2c2419'} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }"
      ></div>
    </div>

    <div class="section-container relative z-10">
      <NuxtLink to="/" class="inline-flex items-center gap-2 mb-8 text-sm font-bold transition-all duration-300 hover:-translate-x-1" :style="{ color: 'var(--text-muted)' }">
        <LucideArrowLeft :size="18" /> {{ $t('backToHome') }}
      </NuxtLink>

      <SectionHeading
        :preText="$t('all')"
        :highlightText="$t('projectsTitle2')"
        class="mb-16"
      >
        <template #subtitle>
          {{ $t('allProjectsSubtitle') }}
        </template>
      </SectionHeading>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in allProjects"
          :key="index"
          v-bind="project"
          class="reveal"
          :style="{ animationDelay: `${(index % 3) * 100}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft as LucideArrowLeft } from 'lucide-vue-next'

const { $gsap } = useNuxtApp()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const { t } = useI18n()

onMounted(() => {
  if (process.client) {
    window.scrollTo(0, 0)
    
    // Reveal animations on scroll
    setTimeout(() => {
      $gsap.utils.toArray('.reveal').forEach((el, i) => {
        $gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          delay: (i % 3) * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
          }
        })
      })
    }, 100)
  }
})

const allProjects = computed(() => [
  {
    title: 'GK International Training Institute',
    description: t('allProj1Desc'),
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://gkinstitutebd.com',
    tags: ['Nuxt 3', 'Supabase', 'Pinia']
  },
  {
    title: 'Fleet Management System',
    description: t('allProj2Desc'),
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://fleet-ujjal.riggcorp.com',
    tags: ['Vue.js', 'Nuxt 3', 'Supabase']
  },
  {
    title: 'Enterprise POS',
    description: t('allProj3Desc'),
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://pos.riggcorp.com',
    tags: ['Inventory', 'FinTech', 'Nuxt']
  },
  {
    title: 'Precision Engine (Repair SaaS)',
    description: t('allProj4Desc'),
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    tags: ['Hono', 'Drizzle ORM', 'Bun']
  },
  {
    title: 'Student Management System',
    description: t('allProj5Desc'),
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    tags: ['Nuxt 3', 'Vue.js', 'Supabase']
  },
  {
    title: 'SmartPark: IoT Urban Parking',
    description: t('allProj6Desc'),
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop',
    tags: ['NodeMCU', 'C++', 'Firebase']
  },
  {
    title: 'REB Auction Portal',
    description: t('allProj7Desc'),
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['Frontend', 'UI/UX', 'Enterprise']
  },
  {
    title: 'Norway Event App',
    description: t('allProj8Desc'),
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    tags: ['Mobile-First', 'Vue.js', 'Events']
  }
])
</script>
