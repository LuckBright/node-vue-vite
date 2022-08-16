<script setup lang="ts">
import watchDemo from './watchDemo.vue'
import brothercompVue from './brothercomp.vue'
import { provide, ref } from 'vue'
import lifecycle from '../views/vuejsChallenges/10-lifecycle.vue'


const count = ref(0)
provide('count', count)
provide('timer', () => {})
</script>

<template>
  <lifecycle></lifecycle>
  <!-- <div>
    顶层节点： {{ count }}
  </div>
  <brothercompVue></brothercompVue>
  <watchDemo></watchDemo> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
