<template>
  <div class="profile-photo relative" ref="wrapperRef">
    <!-- Animated gradient border -->
    <div class="relative rounded-2xl overflow-hidden group">
      <!-- Rotating gradient border -->
      <div class="absolute -inset-[2px] rounded-2xl z-0 overflow-hidden">
        <div
          class="absolute inset-0 rotating-border"
          :style="{
            background: 'conic-gradient(from 0deg, var(--accent), transparent 30%, transparent 70%, var(--accent))',
            opacity: '0.7',
          }"
        ></div>
      </div>

      <!-- Static subtle border fallback -->
      <div
        class="absolute -inset-[1.5px] rounded-2xl z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700"
        :style="{ background: 'var(--gradient-accent)' }"
      ></div>

      <!-- Photo container -->
      <div class="relative rounded-2xl overflow-hidden z-10 bg-[var(--bg-card)]">
        <NuxtImg
          :src="src"
          :alt="alt"
          format="webp"
          quality="85"
          sizes="sm:280px md:340px lg:380px"
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="eager"
        />
        <!-- Gradient overlay on hover -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background: linear-gradient(to top, rgba(0,0,0,0.15), transparent 60%)"
        ></div>
      </div>
    </div>

    <!-- Glow effect behind photo -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full -z-10 blur-[60px] opacity-20 transition-opacity duration-700 group-hover:opacity-30"
      :style="{ background: 'var(--accent)' }"
    ></div>

    <!-- Decorative accent square -->
    <div
      class="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl -z-10 opacity-15"
      :style="{ background: 'var(--accent)' }"
    ></div>
    <div
      class="absolute -top-3 -left-3 w-12 h-12 rounded-lg -z-10 opacity-10"
      :style="{ border: '2px solid var(--accent)' }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Profile Photo'
  }
})

const wrapperRef = ref(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (wrapperRef.value && $gsap) {
    $gsap.from(wrapperRef.value, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: wrapperRef.value,
        start: 'top 85%',
      }
    })
  }
})
</script>
