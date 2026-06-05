<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main>
      <!-- Hero Section -->
      <section id="hero" class="relative pt-44 pb-24 md:pt-60 md:pb-40 overflow-hidden">
        <!-- Subtle Background Pattern -->
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:40px_40px] opacity-25"></div>
        <div class="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div class="section-container">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold mb-8 animate-fade-in">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 class="text-5xl md:text-8xl font-display font-extrabold mb-8 tracking-tight text-zinc-900 dark:text-white leading-[1.1] animate-slide-up">
              {{ $t('welcome') }}
            </h1>
            
            <p class="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed animate-slide-up [animation-delay:100ms]">
              {{ $t('subtitle') }} I specialize in 
              <TypingText :words="['Vue.js', 'Nuxt 3', 'TypeScript', 'Modern UI/UX']" class="text-primary-600 dark:text-primary-400 font-bold" />
            </p>
            
            <div class="flex flex-wrap gap-4 animate-slide-up [animation-delay:200ms]">
              <NeonButton variant="primary" @click="scrollTo('#projects')">
                {{ $t('viewProjects') }}
                <template #icon-right>
                  <LucideArrowRight :size="18" />
                </template>
              </NeonButton>
              <NeonButton variant="secondary">
                {{ $t('downloadResume') }}
                <template #icon-right>
                  <LucideDownload :size="18" />
                </template>
              </NeonButton>
            </div>

            <!-- Social Quick Links -->
            <div class="mt-16 flex items-center gap-8 animate-slide-up [animation-delay:300ms]">
              <a v-for="social in socials" :key="social.label" :href="social.link" target="_blank" class="text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <component :is="social.icon" :size="22" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-zinc-100 dark:border-zinc-800/50">
        <div class="section-container">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div class="max-w-2xl">
              <h2 class="text-3xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white">Selected <span class="text-primary-600">Work</span></h2>
              <p class="text-zinc-500 dark:text-zinc-400">A collection of projects ranging from enterprise systems to personalized client experiences.</p>
            </div>
            <NuxtLink to="/projects" class="group flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Explore All <LucideArrowUpRight :size="18" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              v-for="(project, index) in projects" 
              :key="index"
              v-bind="project"
              class="reveal"
            />
          </div>
        </div>
      </section>

      <!-- About & Skills -->
      <section id="about" class="py-24 md:py-40">
        <div class="section-container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-block px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold mb-6">
                {{ $t('about') }}
              </div>
              <h2 class="text-3xl md:text-5xl font-display font-bold mb-8 text-zinc-900 dark:text-white">Building the future of the <span class="text-primary-600">web</span></h2>
              <div class="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-10">
                <p>
                  I'm a Software Engineer dedicated to crafting high-performance web applications that provide exceptional user experiences. My approach combines technical excellence with a keen eye for design.
                </p>
                <p>
                  With a background in building complex enterprise systems and real-time management portals, I bring a wealth of experience to every project I undertake.
                </p>
              </div>

              <div class="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <h3 class="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">{{ $t('beyondCode') }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="hobby in hobbies" :key="hobby" class="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-medium">
                    {{ hobby }}
                  </span>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills" :key="skill.name" class="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 group hover:border-primary-500/30 transition-colors">
                  <div class="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-primary-600 shadow-sm group-hover:scale-110 transition-transform">
                    <component :is="skill.icon" :size="24" />
                  </div>
                  <h4 class="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{{ skill.name }}</h4>
                  <p class="text-xs text-zinc-400 uppercase tracking-widest">{{ skill.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA / Contact -->
      <section id="contact" class="pb-24 md:pb-40">
        <div class="section-container">
          <div class="bg-primary-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-600/20">
            <!-- Decorative circle -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 class="text-4xl md:text-7xl font-display font-extrabold mb-8 relative z-10">Start a project.</h2>
            <p class="text-primary-100 text-xl max-w-xl mx-auto mb-12 relative z-10">
              Have a vision in mind? Let's turn it into reality with modern technologies and professional design.
            </p>
            
            <a href="mailto:mahfuz.raj.bd@gmail.com" class="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-600 font-bold rounded-2xl hover:bg-zinc-50 transition-all shadow-xl active:scale-95 relative z-10">
              Get in Touch <LucideMail :size="20" />
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 border-t border-zinc-100 dark:border-zinc-800">
        <div class="section-container">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="text-center md:text-left">
              <div class="text-xl font-display font-bold mb-2">Mahfuz Ahmad</div>
              <p class="text-zinc-400 text-sm italic">Crafting experiences, not just code.</p>
            </div>

            <div class="flex items-center gap-8">
              <a v-for="social in socials" :key="social.label" :href="social.link" target="_blank" class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <component :is="social.icon" :size="20" />
              </a>
            </div>

            <div class="text-zinc-400 text-sm">
              &copy; {{ new Date().getFullYear() }} All Rights Reserved.
            </div>
          </div>
        </div>
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
  Code2 as LucideCode,
  Layers as LucideLayers,
  Cpu as LucideCpu,
  Monitor as LucideMonitor
} from 'lucide-vue-next'

const { $gsap } = useNuxtApp()

onMounted(() => {
  // Reveal animations on scroll
  $gsap.utils.toArray('.reveal').forEach((el) => {
    $gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1,
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
    link: 'https://pos.riggcorp.com',
    tags: ['Inventory', 'FinTech', 'Nuxt']
  }
]

const skills = [
  { name: 'Frontend', category: 'Vue / Nuxt 3', icon: LucideCode },
  { name: 'Core', category: 'TypeScript', icon: LucideCpu },
  { name: 'Systems', category: 'Architecture', icon: LucideLayers },
  { name: 'Design', category: 'UI/UX', icon: LucideMonitor },
]

const hobbies = ['PC Gaming', 'Boxing', 'Running', 'Swimming', 'Riverside Relaxing']
</script>
