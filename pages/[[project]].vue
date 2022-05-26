<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData('project', () =>
  queryContent(`/projects/${route.params.project}`).findOne()
);
</script>

<template>
  <NuxtLayout name="page">
    <ContentRenderer :value="data" tag="section">
      <MarkdownRenderer :value="data" />
    </ContentRenderer>
    <BaseFooter />
  </NuxtLayout>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
</style>
