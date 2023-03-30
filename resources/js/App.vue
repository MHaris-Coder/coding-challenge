<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, provide, defineAsyncComponent, onMounted } from 'vue'

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
  <SplashScreen :isLoading="isLoading" />
  <RouterView v-if="!isLoading"/>
</template>
    