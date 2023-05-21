<template>
  <div
    v-editable="projects"
    class="grid grid-cols-1 gap-3 md:grid-cols-3 items-start justify-center"
  >
    <ArticleCard
      class="m-3 min-h-full min-w-fit"
      v-for="project in projects"
      :is="project?.content.component"
      :key="project.uuid"
      :blok="project.content"
      :title="project.name"
      :description="project.content.description"
      :slug="project.full_slug"
      :author="project.content.author"
      :tags="project.tag_list"
      :date="project.content.date"
      
    />
  </div>
</template>
<script setup>
defineProps({ blok: Object });

const projects = ref(null);
const storyblokApi = useStoryblokApi();
//Fetch articles
const {
  data: { stories },
} = await storyblokApi.get("cdn/stories", {
  version: "draft",
  resolve_relations: "article.author",
  starts_with: "articles",
});


projects.value = stories.filter((story) => story.is_startpage !== true);
</script>
<style scoped></style>
