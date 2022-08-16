<script setup lang="ts">
import watchDemo from './watchDemo.vue'
import brothercompVue from './brothercomp.vue';
import { provide, ref } from 'vue'


const count = ref(0)
provide('count', count)
</script>

<template>
  <div>
    顶层节点： {{ count }}
  </div>
  <brothercompVue></brothercompVue>
  <watchDemo></watchDemo>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
