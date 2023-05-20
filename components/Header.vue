<template>
  <div class="w-full border flex">
    <div class="m-2">Texto</div>
    <div class="m-2">
      <NuxtLink to="/" class="mx-1">Index</NuxtLink>
      <NuxtLink to="/articles" class="mx-1">Articles</NuxtLink>
    </div>
    <SearchBox
      :search="fetchSuggestions"
      class="justify-self-center mx-auto"
    ></SearchBox>
  </div>
</template>
<script setup>
const storyblokApi = useStoryblokApi();

async function fetchSuggestions(searchInput) {
  const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "articles/",
    resolve_relations: "article.author",
    search_term: searchInput.value,
    per_page: 5,
  });
  return data.stories;
}
</script>
<style scoped></style>
