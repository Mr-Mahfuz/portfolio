<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 pointer-events-none z-0"
    :style="{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease' }"
  />
</template>

<script setup>
const canvasRef = ref(null)
const visible = ref(false)
const colorMode = useColorMode()

onMounted(() => {
  visible.value = true
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let animationId = null
  let particles = []
  let mouse = { x: -1000, y: -1000 }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const getThemeConfig = () => {
    const isDark = colorMode.value === 'dark'
    return {
      particleCount: isDark ? 80 : 40,
      particleColor: isDark ? { r: 0, g: 240, b: 255 } : { r: 184, g: 149, b: 106 },
      particleColorAlt: isDark ? { r: 180, g: 74, b: 255 } : { r: 212, g: 184, b: 150 },
      lineColor: isDark ? 'rgba(0, 240, 255,' : 'rgba(184, 149, 106,',
      maxAlpha: isDark ? 0.6 : 0.35,
      lineMaxAlpha: isDark ? 0.12 : 0.06,
      speed: isDark ? 0.4 : 0.25,
      connectionDistance: 150,
      mouseRadius: 200,
      particleMinSize: isDark ? 1 : 0.8,
      particleMaxSize: isDark ? 3 : 2,
    }
  }

  class Particle {
    constructor(config) {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = config.particleMinSize + Math.random() * (config.particleMaxSize - config.particleMinSize)
      this.speedX = (Math.random() - 0.5) * config.speed
      this.speedY = (Math.random() - 0.5) * config.speed
      this.alpha = 0.1 + Math.random() * (config.maxAlpha - 0.1)
      this.targetAlpha = this.alpha
      this.useAlt = Math.random() > 0.6
      this.pulseOffset = Math.random() * Math.PI * 2
    }

    update(config) {
      this.x += this.speedX
      this.y += this.speedY

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0

      // Mouse interaction
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < config.mouseRadius) {
        const force = (config.mouseRadius - dist) / config.mouseRadius
        this.x -= dx * force * 0.02
        this.y -= dy * force * 0.02
        this.targetAlpha = config.maxAlpha
      } else {
        this.targetAlpha = 0.1 + Math.random() * 0.3
      }

      this.alpha += (this.targetAlpha - this.alpha) * 0.02

      // Subtle pulse
      const pulse = Math.sin(Date.now() * 0.001 + this.pulseOffset) * 0.15
      this.currentAlpha = Math.max(0, this.alpha + pulse)
    }

    draw(config) {
      const color = this.useAlt ? config.particleColorAlt : config.particleColor
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.currentAlpha})`
      ctx.fill()

      // Glow effect in dark mode
      if (colorMode.value === 'dark' && this.size > 2) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.currentAlpha * 0.1})`
        ctx.fill()
      }
    }
  }

  const initParticles = () => {
    const config = getThemeConfig()
    particles = []
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle(config))
    }
  }

  const drawConnections = (config) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < config.connectionDistance) {
          const alpha = (1 - dist / config.connectionDistance) * config.lineMaxAlpha
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `${config.lineColor} ${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }

  const animate = () => {
    const config = getThemeConfig()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {
      p.update(config)
      p.draw(config)
    })

    drawConnections(config)
    animationId = requestAnimationFrame(animate)
  }

  const onMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const onMouseLeave = () => {
    mouse.x = -1000
    mouse.y = -1000
  }

  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)

  resize()
  initParticles()
  animate()

  // Re-init particles when theme changes
  watch(() => colorMode.value, () => {
    initParticles()
  })

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
  })
})
</script>
