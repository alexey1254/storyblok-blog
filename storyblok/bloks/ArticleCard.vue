<template>
  <div class="bg-[#2A9D8F] opacity-95 m-1 shadow-slate-400 shadow-lg rounded">
    <header>
      <nuxt-link :to="`/${slug}`" class="text-lg"
        ><h1 class="text-center mb-1 font-bold">
          {{ title }}
        </h1></nuxt-link
      >
    </header>
    <p class="text-justify mx-5">{{ description }}</p>
    <footer class="flex">
      <nuxt-link
        :to="author.content.link?.cached_url"
        class="flex items-center space-x-4 mx-3 my-3"
      >
        <img
          class="w-10 h-10 rounded-full"
          :src="author.content.avatar.filename"
          :alt="author.content.name"
        />
        <div class="font-medium dark:text-white">
          <div>{{ author.content.name }}</div>
        </div>
      </nuxt-link>
    </footer>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  slug: String,
  description: String,
  author: Object,
  date: String,
  slug: String,
});
</script>
