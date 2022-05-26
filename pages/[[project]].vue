<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.params.project as string, () =>
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
@use '../styles/screens';

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @include screens.laptop {
    gap: 6rem;
  }
}
</style>
