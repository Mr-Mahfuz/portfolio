<template>
  <div class="relative min-h-screen pt-28 pb-24" :style="{ background: 'var(--bg-primary)' }">
    <div class="section-container relative z-10">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 mb-8 text-sm font-semibold transition-all duration-300 hover:-translate-x-1"
        :style="{ color: 'var(--text-muted)' }"
      >
        <LucideArrowLeft :size="16" /> {{ $t('backToHome') }}
      </NuxtLink>

      <SectionHeading
        :text="$t('projectsTitle')"
        :accentText="$t('projectsTitleAccent')"
        class="mb-14"
      >
        <template #subtitle>
          {{ $t('allProjectsSubtitle') }}
        </template>
      </SectionHeading>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in allProjects"
          :key="index"
          v-bind="project"
          class="reveal"
          :style="{ animationDelay: `${(index % 3) * 80}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft as LucideArrowLeft } from 'lucide-vue-next'

const { $gsap } = useNuxtApp()
const { t } = useI18n()

onMounted(() => {
  if (import.meta.client) {
    window.scrollTo(0, 0)

    setTimeout(() => {
      $gsap.utils.toArray('.reveal').forEach((el, i) => {
        $gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          delay: (i % 3) * 0.08,
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
    title: t('allProj1Title'),
    description: t('allProj1Desc'),
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    link: 'https://homeschool.moonx.dev/',
    tags: ['React 19', 'LangChain.js', 'Neo4j'],
  },
  {
    title: t('allProj2Title'),
    description: t('allProj2Desc'),
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: 'http://techflix.com',
    tags: ['Nuxt 3', 'SSR', 'Stripe'],
  },
  {
    title: t('allProj3Title'),
    description: t('allProj3Desc'),
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://gkinstitutebd.com',
    tags: ['Nuxt 3', 'Supabase', 'Pinia'],
  },
  {
    title: t('allProj4Title'),
    description: t('allProj4Desc'),
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://fleet-ujjal.riggcorp.com',
    tags: ['Vue.js', 'Nuxt 3', 'Supabase'],
  },
  {
    title: t('allProj5Title'),
    description: t('allProj5Desc'),
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Inventory', 'RBAC', 'Nuxt'],
  },
  {
    title: t('allProj6Title'),
    description: t('allProj6Desc'),
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop',
    tags: ['NodeMCU', 'C++', 'Firebase'],
  },
  {
    title: t('allProj7Title'),
    description: t('allProj7Desc'),
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['Frontend', 'UI/UX', 'Enterprise'],
  },
  {
    title: t('allProj8Title'),
    description: t('allProj8Desc'),
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    tags: ['Mobile-First', 'Vue.js', 'Events'],
  },
  {
    title: t('allProj9Title'),
    description: t('allProj9Desc'),
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    tags: ['Nuxt 3', 'Vue.js', 'Supabase'],
  },
  {
    title: t('allProj10Title'),
    description: t('allProj10Desc'),
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    tags: ['Hono', 'Drizzle ORM', 'Bun'],
  },
])
</script>
