<template>
  <div class="my-10">
    <h1 class="text-center font-bold text-3xl mb-10">{{ story.name }}</h1>
    <img
      class="max-w-md mx-auto"
      :src="story.content.avatar?.filename"
      :alt="story.content.avatar?.alt"
    />
    <div class="text-justify w-full flex justify-center my-5">{{ story.content.bio }}</div>
  </div>
</template>
<script setup>
const route = useRoute().fullPath;
const story = await useAsyncStoryblok(route ? route : "home", {
  version: "draft",
});
</script>
<style scoped></style>
