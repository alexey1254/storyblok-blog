<template>
  <div class="ms-40 mt-10 mb-10">
    <h1 class="text-6xl font-semibold">{{ blok.title }}</h1>
    <p class="text-justify font-light w-2/4 ">{{ blok.subtitle }}</p>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
</script>
<style scoped></style>
