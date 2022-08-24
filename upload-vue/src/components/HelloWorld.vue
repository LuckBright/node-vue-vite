<script setup lang="ts">
import watchDemo from './watchDemo.vue'
import brothercompVue from './brothercomp.vue'
import { provide, ref } from 'vue'
import lifecycle from '../views/vuejsChallenges/10-lifecycle.vue'
import A1 from './a1.vue'

const count = ref(0)
provide('count', count)
provide('timer', () => {})
</script>

<template>
  <!-- <lifecycle></lifecycle> -->
  <A1 v-model="count"></A1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
