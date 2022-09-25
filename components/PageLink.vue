<script setup lang="ts">
import Emitter from '~~/utils/emitter';

const props = defineProps<{
  to: string;
}>();

const nuxtApp = useNuxtApp();

const handleClick = () => {
  nuxtApp.callHook('link:prefetch', props.to);
  Emitter.emit('route-change', props.to);
};
</script>

<template>
  <a href="" @click.prevent="handleClick">
    <slot />
  </a>
</template>
