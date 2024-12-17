<template>
  <main class="main-wrapper">
    <!-- <Task1 /> -->
    <!-- <Task2 /> -->
    <Task3 />
    <!-- <Task4 /> -->
  </main>
</template>

<script setup>
// import Task1 from './exam/Task1.vue';
// import Task2 from './exam/Task2.vue';
import Task3 from './exam/Task3.vue'
// import Task4 from './exam/Task4.vue';

import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue'

const routeLoyout = computed(() => {
  return route.meta.loyout ?? 'default';
});
const activeLoyout = computed(() => {
  return loyouts[routeLoyout.value];
});

</script>
