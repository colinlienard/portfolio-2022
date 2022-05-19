<script setup>
const count = ref(0);
</script>

<template>
  <button @click="count += 1">
    {{ count }}
  </button>
</template>

<style scoped lang="scss">
button {
  color: #000;
}
</style>
