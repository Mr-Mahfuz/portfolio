<template>
  <button
    ref="btnRef"
    :class="[
      'magnetic-btn inline-flex items-center justify-center gap-2.5 font-semibold active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
      variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      size === 'sm' ? 'px-5 py-2.5 text-sm rounded-lg' : 'px-7 py-3 text-sm rounded-xl'
    ]"
    @mousemove="onMove"
    @mouseleave="onLeave"
    @click="onRipple"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />

    <!-- Ripple effects container -->
    <span
      v-for="ripple in ripples"
      :key="ripple.id"
      class="ripple"
      :style="{
        left: `${ripple.x}px`,
        top: `${ripple.y}px`,
        width: `${ripple.size}px`,
        height: `${ripple.size}px`,
      }"
    />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
})

const btnRef = ref(null)
const ripples = ref([])
let rippleId = 0

const onMove = (e) => {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  btnRef.value.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`
}

const onLeave = () => {
  if (!btnRef.value) return
  btnRef.value.style.transform = 'translate(0, 0)'
}

const onRipple = (e) => {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2

  const id = rippleId++
  ripples.value.push({ id, x, y, size })

  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== id)
  }, 600)
}
</script>

<style scoped>
.magnetic-btn {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
}
</style>
