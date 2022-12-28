<template>
    <Header />
    <div class="text-center py-20 px-6">
      <h1 class="text-5xl font-bold mt-0 mb-6">Welcome to Vue3 Boilerplate !</h1>
      <h3 class="text-3xl font-bold mb-8">Start quickly with Vue3, Vite, TailwindCSS, Daisy UI and VueUse </h3>
    </div>
</template>

<script setup>
  import { useAppStore } from '@/store/modules/app';
  import Header from '@/components/Header/index.vue';

  const appStore = useAppStore();
</script>

<style scoped></style>
