<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, provide, defineAsyncComponent, onMounted } from 'vue'

  const Header = defineAsyncComponent(() => 
    import('../js/components/header-layout/Header-logo.vue')
  )
  const SplashScreen = defineAsyncComponent(() => 
    import('./views/SplashScreen.vue')
  )
  const isLoading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  })
</script>

<template>
  <header></header>
  <SplashScreen :isLoading="isLoading" />
  <RouterView v-if="!isLoading"/>
</template>
    