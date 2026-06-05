<template>
  <div class="min-h-screen noise-bg pt-32 pb-24" :style="{ background: 'var(--bg-primary)' }">
    <div class="section-container">
      <NuxtLink to="/" class="inline-flex items-center gap-2 mb-8 text-sm font-bold transition-all duration-300 hover:-translate-x-1" :style="{ color: 'var(--text-muted)' }">
        <LucideArrowLeft :size="18" /> Back to Home
      </NuxtLink>

      <SectionHeading
        preText="All"
        highlightText="Projects"
        class="mb-16"
      >
        <template #subtitle>
          A comprehensive list of enterprise platforms, IoT solutions, and mobile-responsive applications I've built.
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

const allProjects = [
  {
    title: 'GK International Training Institute',
    description: 'Developed an automated certificate engine and student management pipeline, processing thousands of enrollments efficiently with 1-click bulk issuance.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://gkinstitutebd.com',
    tags: ['Nuxt 3', 'Supabase', 'Pinia']
  },
  {
    title: 'Fleet Management System',
    description: 'A comprehensive fleet management solution with operational dashboards and voucher management workflows for transportation operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://fleet-ujjal.riggcorp.com',
    tags: ['Vue.js', 'Nuxt 3', 'Supabase']
  },
  {
    title: 'Enterprise POS',
    description: 'Modern Point of Sale system designed for high-traffic retail environments with offline sync capabilities and strict role-based access control.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://pos.riggcorp.com',
    tags: ['Inventory', 'FinTech', 'Nuxt']
  },
  {
    title: 'Precision Engine (Repair SaaS)',
    description: 'A modern multi-tenant SaaS platform for repair shops. Built with a high-performance backend using Hono, Drizzle ORM, BullMQ, and PostgreSQL on Bun.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    tags: ['Hono', 'Drizzle ORM', 'Bun']
  },
  {
    title: 'Student Management System',
    description: 'Scalable multi-tenant portal streamlining administrative tracking for coaching centers and Madrasahs. Includes attendance and result management.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    tags: ['Nuxt 3', 'Vue.js', 'Supabase']
  },
  {
    title: 'SmartPark: IoT Urban Parking',
    description: 'IoT-based urban parking solution. Configured firmware for ESP8266 microcontrollers and integrated sensor data transmission via Firebase.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop',
    tags: ['NodeMCU', 'C++', 'Firebase']
  },
  {
    title: 'REB Auction Portal',
    description: 'Engineered a mobile-first, responsive user interface for an enterprise auction platform with complex inventory workflows.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['Frontend', 'UI/UX', 'Enterprise']
  },
  {
    title: 'Norway Event App',
    description: 'Mobile-responsive client application bridging real-time event data with elegant UI components for seamless attendee experiences.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    tags: ['Mobile-First', 'Vue.js', 'Events']
  }
]
</script>
