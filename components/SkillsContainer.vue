<script setup lang="ts">
type Skill = {
  source: string;
  x: number;
  y: number;
};

const data = await queryContent('/skills').findOne();
const skills = ref<Skill[]>([]);
const skillsIndex = ref(0);

const placeSkill = (event: MouseEvent) => {
  const source = data.skills[skillsIndex.value];

  if (skillsIndex.value < data.skills.length - 1) {
    skillsIndex.value += 1;
  } else {
    skillsIndex.value = 0;
  }

  const container = (event.target as Element).getBoundingClientRect();
  const x = event.clientX;
  const y = event.clientY - container.top;

  skills.value.push({ source, x, y });
};

// Preload images
onMounted(() => {
  data.skills.forEach((skill: string) => {
    const image = new Image();
    image.src = `/images/skills/${skill}`;
  });
});
</script>

<template>
  <ul ref="container" class="container" @click="placeSkill">
    <li v-for="(skill, index) in skills" :key="index">
      <SkillSticker :source="skill.source" :x="skill.x" :y="skill.y" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  inset: -8rem 0;
  cursor: crosshair;
  z-index: 1;

  @include screens.laptop {
    top: -14rem;
    left: 50%;
    translate: -50%;
    width: 100vw;
    height: calc(100% + 14rem * 2);
  }
}
</style>
