<template>
  <div class="relative min-h-screen flex flex-col">
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
// Main app layout — clean, no particle backgrounds
</script>
