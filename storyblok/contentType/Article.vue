<template>
  <div>
    <h1 class="text-center text-3xl my-10">{{ blok.title }}</h1>
    <div class="flex justify-center">
      <div v-for="tag in tags" class="rounded-sm hover:bg-slate-400 border p-1 bg-slate-300 mx-1">
        <NuxtLink :to="`/topics/${tag}`">{{ tag }}</NuxtLink>
      </div>
    </div>
    <div
      class="w-full my-10 prose mx-auto"
      v-html="renderRichText(blok.content)"
    ></div>
  </div>
</template>

<script setup>
import { createSEOMeta } from "~/utils/seo";

const prop = defineProps({
  blok: Object,
  tags: Array,
});

useHead({
  title: prop.blok.title,
  meta: createSEOMeta({ description: prop.blok.description }),
});
</script>
