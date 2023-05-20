<template>
  <StoryblokComponent v-if="story.content" :blok="story.content" />
</template>

<script setup>
const story = await useAsyncStoryblok("/articles/", {
  version: "draft",
});

let $storyapi = useStoryblokApi();
const res = await $storyapi.get("/cdn/stories/", {
  starts_with: "articles/",
});

const articles = res.data.stories.map((story) => {
  story.content.date = new Date(story.content.date);
  return story;
});
</script>
