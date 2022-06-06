<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.params.project[0], () =>
  queryContent(`/projects/${route.params.project}`).findOne()
);

useHead({
  title: `${data.value.title} ● Colin Lienard`,
  meta: [
    {
      name: 'description',
      content: data.value.description,
    },
  ],
});
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
