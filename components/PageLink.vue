<script setup lang="ts">
import Emitter from '~~/utils/emitter';

const props = defineProps<{
  to: string;
}>();

const nuxtApp = useNuxtApp();

const handleClick = async () => {
  await nuxtApp.callHook('link:prefetch', props.to);
  Emitter.emit('route-change', props.to);
};
</script>

<template>
  <NuxtLink :to="to" custom>
    <a :href="to" v-bind="$attrs" @click.prevent="handleClick">
      <slot />
    </a>
  </NuxtLink>
</template>
