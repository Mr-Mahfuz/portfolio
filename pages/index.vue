<template>
  <div class="min-h-screen" :style="{ background: 'var(--bg-primary)' }">
    <main>
      <!-- ========== HERO SECTION ========== -->
      <section id="hero" class="relative pt-28 pb-16 md:pt-36 md:pb-24 min-h-[90vh] flex items-center overflow-hidden">
        <!-- Ambient glow orbs -->
        <div class="hero-glow hero-glow--primary"></div>
        <div class="hero-glow hero-glow--secondary"></div>

        <div class="section-container relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <!-- Left: Text Content (3 cols) -->
            <div class="order-2 lg:order-1 lg:col-span-3">
              <!-- Available badge -->
              <div
                class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide mb-8 animate-fade-in"
                :style="{
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                }"
              >
                <span class="relative flex h-1.5 w-1.5">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    :style="{ background: 'var(--accent)' }"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-1.5 w-1.5"
                    :style="{ background: 'var(--accent)' }"
                  ></span>
                </span>
                {{ $t('availableForWork') }}
              </div>

              <!-- Main heading -->
              <div class="mb-6">
                <TextReveal :delay="0.1">
                  <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.05]">
                    <span :style="{ color: 'var(--text-muted)' }">{{ $t('heroGreeting') }}</span><br />
                    <span class="gradient-name">{{ $t('heroName') }}</span>
                  </h1>
                </TextReveal>
              </div>

              <!-- Role tag with typing effect -->
              <TextReveal :delay="0.25">
                <div class="flex items-center gap-3 mb-5">
                  <span
                    class="inline-block w-8 h-px"
                    :style="{ background: 'var(--accent)' }"
                  ></span>
                  <p
                    class="text-lg md:text-xl font-semibold font-mono tracking-wide"
                    :style="{ color: 'var(--accent)' }"
                  >
                    {{ $t('heroRole') }}
                  </p>
                </div>
              </TextReveal>

              <!-- Summary -->
              <TextReveal :delay="0.35">
                <p
                  class="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                  :style="{ color: 'var(--text-secondary)' }"
                >
                  {{ $t('heroSummary') }}
                </p>
              </TextReveal>

              <!-- CTA Buttons -->
              <TextReveal :delay="0.45">
                <div class="flex flex-wrap gap-3">
                  <MagneticButton variant="primary" @click="scrollTo('#projects')">
                    {{ $t('viewProjects') }}
                    <template #icon-right>
                      <LucideArrowDown :size="16" />
                    </template>
                  </MagneticButton>
                  <a href="/Mahfuz_Ahmad_CV.pdf" download="Mahfuz_Ahmad_CV.pdf">
                    <MagneticButton variant="secondary">
                      {{ $t('downloadResume') }}
                      <template #icon-right>
                        <LucideDownload :size="16" />
                      </template>
                    </MagneticButton>
                  </a>
                </div>
              </TextReveal>

              <!-- Social links -->
              <TextReveal :delay="0.55">
                <div class="mt-10 flex items-center gap-3">
                  <a
                    v-for="social in socials"
                    :key="social.label"
                    :href="social.link"
                    target="_blank"
                    class="social-link p-2.5 rounded-lg"
                    :style="{
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }"
                    :title="social.label"
                  >
                    <component :is="social.icon" :size="18" />
                  </a>
                </div>
              </TextReveal>
            </div>

            <!-- Right: Profile Photo (2 cols) -->
            <div class="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end animate-scale-in [animation-delay:200ms]">
              <div class="w-[240px] h-[300px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[400px]">
                <ProfilePhoto
                  :src="mahfuzPhoto"
                  alt="Mahfuz Ahmad — Software Engineer"
                />
              </div>
            </div>
          </div>

          <!-- Scroll indicator -->
          <div class="hidden lg:flex justify-center mt-16">
            <div class="scroll-indicator cursor-pointer" @click="scrollTo('#experience')">
              <span class="text-[10px] font-bold uppercase tracking-[0.3em]" :style="{ color: 'var(--text-muted)' }">
                {{ $t('scroll') }}
              </span>
              <div class="scroll-indicator__line"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== EXPERIENCE SECTION ========== -->
      <section id="experience" class="py-20 md:py-28">
        <div class="section-container">
          <SectionHeading
            number="01"
            :label="$t('expLabel')"
            :text="$t('expTitle')"
            :accentText="$t('expTitleAccent')"
          />

          <div class="mt-12 max-w-3xl">
            <ExperienceTimeline :items="experiences" />
          </div>
        </div>
      </section>

      <!-- ========== PROJECTS SECTION ========== -->
      <section id="projects" class="py-20 md:py-28" :style="{ background: 'var(--bg-secondary)' }">
        <div class="section-container">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              number="02"
              :label="$t('projLabel')"
              :text="$t('projTitle')"
              :accentText="$t('projTitleAccent')"
            >
              <template #subtitle>
                {{ $t('projSubtitle') }}
              </template>
            </SectionHeading>

            <NuxtLink
              to="/projects"
              class="group flex items-center gap-2 text-sm font-semibold transition-all duration-300 shrink-0"
              :style="{ color: 'var(--accent)' }"
            >
              {{ $t('exploreAll') }}
              <LucideArrowRight
                :size="16"
                class="group-hover:translate-x-1 transition-transform duration-300"
              />
            </NuxtLink>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              v-for="(project, index) in featuredProjects"
              :key="index"
              v-bind="project"
              class="reveal"
              :horizontal="index === 0"
              :class="{ 'md:col-span-2': index === 0 }"
            />
          </div>
        </div>
      </section>

      <!-- ========== SKILLS MARQUEE ========== -->
      <section id="skills" class="py-16 md:py-20 overflow-hidden">
        <div class="section-container mb-8">
          <SectionHeading
            number="03"
            :label="$t('skillsLabel')"
            :text="$t('skillsTitle')"
            :accentText="$t('skillsTitleAccent')"
          />
        </div>
        <SkillMarquee :row1="skillRow1" :row2="skillRow2" />
      </section>

      <!-- ========== ABOUT SECTION ========== -->
      <section id="about" class="py-20 md:py-28" :style="{ background: 'var(--bg-secondary)' }">
        <div class="section-container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <!-- Left: About text -->
            <div>
              <SectionHeading
                number="04"
                :label="$t('aboutLabel')"
                :text="$t('aboutTitle')"
                :accentText="$t('aboutTitleAccent')"
              />

              <div class="space-y-4 text-base leading-relaxed mt-8 reveal" :style="{ color: 'var(--text-secondary)' }">
                <p>{{ $t('aboutP1') }}</p>
                <p>{{ $t('aboutP2') }}</p>
              </div>

              <!-- Beyond the Code -->
              <div class="pt-6 mt-8 reveal" :style="{ borderTop: '1px solid var(--border)' }">
                <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-4" :style="{ color: 'var(--text-muted)' }">
                  {{ $t('beyondCode') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="hobby in hobbies"
                    :key="hobby"
                    class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                    :style="{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }"
                  >
                    {{ hobby }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right: Education -->
            <div>
              <SectionHeading
                number="05"
                :label="$t('eduLabel')"
                :text="$t('eduTitle')"
                :accentText="$t('eduTitleAccent')"
              />

              <div class="mt-8 space-y-4">
                <EducationCard
                  :degree="$t('eduDegree1')"
                  :institution="$t('eduInst1')"
                  :period="$t('eduPeriod1')"
                  :result="$t('eduResult1')"
                  location="Rajshahi, Bangladesh"
                  :details="coursework"
                  :detailsLabel="$t('eduCoursework')"
                  :highlight="true"
                />
                <EducationCard
                  :degree="$t('eduDegree2')"
                  :institution="$t('eduInst2')"
                  :period="$t('eduPeriod2')"
                  :result="$t('eduResult2')"
                  location="Rajshahi, Bangladesh"
                />
                <EducationCard
                  :degree="$t('eduDegree3')"
                  :institution="$t('eduInst3')"
                  :period="$t('eduPeriod3')"
                  :result="$t('eduResult3')"
                  location="Rajshahi, Bangladesh"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== CONTACT SECTION ========== -->
      <section id="contact" class="py-20 md:py-28 relative overflow-hidden">
        <!-- Subtle background glow -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          :style="{ background: 'var(--hero-glow-1)', filter: 'blur(120px)' }"
        ></div>

        <div class="section-container relative z-10">
          <div class="max-w-2xl mx-auto text-center">
            <div class="section-label mb-4">{{ $t('contactLabel') }}</div>
            <h2
              class="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-6 reveal"
              :style="{ color: 'var(--text-primary)' }"
            >
              {{ $t('contactTitle') }}
              <span class="accent-text"> {{ $t('contactTitleAccent') }}</span>.
            </h2>
            <p class="text-base md:text-lg mb-10 reveal" :style="{ color: 'var(--text-muted)' }">
              {{ $t('contactSubtitle') }}
            </p>

            <div class="flex flex-col items-center gap-4 reveal">
              <a href="mailto:mahfuz.raj.bd@gmail.com">
                <MagneticButton variant="primary" size="md">
                  {{ $t('getInTouch') }}
                  <template #icon-right>
                    <LucideMail :size="18" />
                  </template>
                </MagneticButton>
              </a>
              <p class="text-sm" :style="{ color: 'var(--text-muted)' }">
                {{ $t('orEmailMe') }}
                <a
                  href="mailto:mahfuz.raj.bd@gmail.com"
                  class="font-medium transition-colors duration-300"
                  :style="{ color: 'var(--accent)' }"
                >
                  mahfuz.raj.bd@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {
  ArrowDown as LucideArrowDown,
  ArrowRight as LucideArrowRight,
  Download as LucideDownload,
  Mail as LucideMail,
  Github as LucideGithub,
  Linkedin as LucideLinkedin,
  Phone as LucidePhone,
} from 'lucide-vue-next'

const mahfuzPhoto = '/images/Mahfuz_HD.jpeg'

const { $gsap } = useNuxtApp()
const { t } = useI18n()

onMounted(() => {
  // Reveal animations on scroll
  $gsap.utils.toArray('.reveal').forEach((el, i) => {
    $gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: i * 0.04,
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
      top: el.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

// --- DATA ---

const socials = [
  { label: 'GitHub', link: 'https://github.com/Mr-Mahfuz', icon: LucideGithub },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/mahfuz-ahmad-a87328327', icon: LucideLinkedin },
  { label: 'Email', link: 'mailto:mahfuz.raj.bd@gmail.com', icon: LucideMail },
  { label: 'Phone', link: 'tel:+8801890411110', icon: LucidePhone },
]

const experiences = computed(() => [
  {
    role: t('exp1Role'),
    company: t('exp1Company'),
    period: t('exp1Period'),
    location: t('exp1Location'),
    current: true,
    points: [
      t('exp1Point1'),
      t('exp1Point2'),
      t('exp1Point3'),
      t('exp1Point4'),
      t('exp1Point5'),
    ]
  },
  {
    role: t('exp2Role'),
    company: t('exp2Company'),
    period: t('exp2Period'),
    location: t('exp2Location'),
    current: false,
    points: [
      t('exp2Point1'),
      t('exp2Point2'),
      t('exp2Point3'),
    ]
  }
])

const featuredProjects = computed(() => [
  {
    title: t('proj1Title'),
    description: t('proj1Desc'),
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    link: 'https://homeschool.moonx.dev/',
    tags: ['React 19', 'TypeScript', 'LangChain.js', 'Neo4j', 'pgvector'],
  },
  {
    title: t('proj2Title'),
    description: t('proj2Desc'),
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: 'http://techflix.com',
    tags: ['Nuxt 3', 'SSR', 'Stripe', 'RBAC'],
  },
  {
    title: t('proj3Title'),
    description: t('proj3Desc'),
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://gkinstitutebd.com',
    tags: ['Nuxt 3', 'Supabase', 'Pinia', 'Multi-tenant'],
  },
  {
    title: t('proj4Title'),
    description: t('proj4Desc'),
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop',
    tags: ['NodeMCU', 'C++', 'Firebase', 'IoT'],
  },
])

const skillRow1 = [
  'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt 3', 'React.js', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Supabase', 'Python', 'LangChain.js',
  'REST APIs', 'Firebase', 'Pinia',
]

const skillRow2 = [
  'Git', 'GitHub', 'VS Code', 'Vercel', 'pgvector', 'Neo4j',
  'MySQL', 'C++', 'Java', 'SQL', 'Zod', 'n8n', 'Nitro',
  'Mobile-Responsive Design',
]

const coursework = computed(() => [
  t('eduCourse1'), t('eduCourse2'), t('eduCourse3'), t('eduCourse4'),
  t('eduCourse5'), t('eduCourse6'), t('eduCourse7'),
])

const hobbies = computed(() => [
  t('hobby1'), t('hobby2'), t('hobby3'), t('hobby4'), t('hobby5')
])
</script>
