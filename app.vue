<template>
  <div class="relative min-h-screen flex flex-col">
    <!-- Particle Background -->
    <ClientOnly>
      <LazyParticleCanvas />
    </ClientOnly>

    <!-- Scroll Progress -->
    <ScrollProgress />

    <Navbar />

    <!-- Page Content -->
    <div class="flex-grow">
      <NuxtPage />
    </div>

    <Footer />
  </div>
</template>

<script setup>
// Main app layout with particle background and scroll progress
</script>
