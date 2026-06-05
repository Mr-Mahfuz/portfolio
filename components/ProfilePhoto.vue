<template>
  <div class="profile-photo-wrapper relative" ref="wrapperRef">
    <!-- Orbiting decorations -->
    <div class="orbit-container absolute inset-0 pointer-events-none">
      <div class="orbit-dot animate-orbit" style="--orbit-radius: 140px; --orbit-delay: 0s;"></div>
      <div class="orbit-dot animate-orbit-reverse" style="--orbit-radius: 130px; --orbit-delay: -4s; width: 6px; height: 6px; opacity: 0.5;"></div>
      <div class="orbit-ring animate-orbit" style="--orbit-radius: 150px; --orbit-delay: -8s;"></div>
    </div>

    <!-- Animated border frame -->
    <div class="photo-frame-outer relative group">
      <!-- Smooth ambient glowing border -->
      <div class="absolute -inset-[3px] rounded-[2rem] overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-0">
        <!-- Container that spins smoothly -->
        <div class="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite]">
          <!-- Colored glowing orbs that rotate along the edge -->
          <div class="absolute top-0 left-1/2 w-full h-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00f0ff] via-[#b44aff] to-[#ff2d7c] blur-[15px] opacity-70"></div>
          <div class="absolute bottom-0 right-1/2 w-full h-1/2 translate-x-1/2 bg-gradient-to-r from-[#ff2d7c] via-[#b8956a] to-[#00f0ff] blur-[15px] opacity-70"></div>
        </div>
      </div>
      
      <!-- Inner frame to mask the center and only reveal the glowing edge -->
      <div class="absolute -inset-[1px] rounded-[1.85rem]" :style="{ background: 'var(--bg-primary)' }"></div>

      <!-- Photo container -->
      <div class="relative bg-abyss-950 dark:bg-abyss-950 rounded-[1.85rem] overflow-hidden z-10 p-[2px]">
        <div class="w-full h-full rounded-[1.75rem] overflow-hidden relative">
          <img
            :src="src"
            :alt="alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>

    <!-- Background glow -->
    <div class="absolute -inset-10 -z-10 rounded-full opacity-30 blur-3xl transition-opacity duration-700"
      :class="isDark ? 'bg-neon-cyan/20' : 'bg-warm-gold/20'"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Profile Photo'
  }
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const wrapperRef = ref(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (wrapperRef.value && $gsap) {
    $gsap.from(wrapperRef.value, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: wrapperRef.value,
        start: 'top 85%',
      }
    })
  }
})
</script>

<style scoped>
.bg-gradient-animated {
  background: var(--gradient-accent-vivid);
  background-size: 300% 300%;
  animation: photo-gradient-spin 4s ease-in-out infinite;
}

@keyframes photo-gradient-spin {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

.orbit-container {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
}

.orbit-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
  animation: orbit-spin 12s linear infinite;
  animation-delay: var(--orbit-delay, 0s);
}

.animate-orbit-reverse .orbit-dot,
.orbit-dot.animate-orbit-reverse {
  animation-direction: reverse;
}

.orbit-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: transparent;
  opacity: 0.3;
  animation: orbit-spin 16s linear infinite;
  animation-delay: var(--orbit-delay, 0s);
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg) translateX(var(--orbit-radius, 120px)) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(var(--orbit-radius, 120px)) rotate(-360deg);
  }
}

@media (max-width: 768px) {
  .orbit-container {
    display: none;
  }
}
</style>
