<template>
  <div class="mt-4">
    <section>
      <div class="container mx-auto px-4">
        <h1 v-if="topic.taggings_count > 1" class="text-4xl font-bold">
          Hay {{ topic.taggings_count }} artículos en <i class="rounded bg-slate-300 px-1">#{{ topic.name }}</i>
        </h1>
        <div v-else class="text-4xl font-bold">
          Hay {{ topic.taggings_count }} artículo en <i class="rounded bg-slate-300 px-1">#{{ topic.name }}</i>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.content.title"
            :slug="`articles/${article.slug}`"
            :title="article.content.title"
            :description="article.content.description"
            :author="article.content.author"
            :date="article.content.date.toLocaleDateString()"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import kebabCase from "lodash/kebabCase";

const params = useRoute().params; // Guarda la ruta completa actual
const storyblokApi = useStoryblokApi();

const { data: tagsData } = await storyblokApi.get("cdn/tags");
const topic = tagsData.tags.find((t) => kebabCase(t.name) === params.slug[0]);

// Fetch articles
const { data: articlesData } = await storyblokApi.get("cdn/stories", {
  starts_with: "articles/",
  resolve_relations: "article.author",
  with_tag: topic.name,
});
const articles = articlesData.stories.map((story) => {
  story.content.date = new Date(story.content.date);
  return story;
});

useHead({
  titleTemplate:`Artículos - ${topic.name}`
});
</script>
<style scoped></style>
