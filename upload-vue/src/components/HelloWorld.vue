<script setup lang="ts">
import watchDemo from './watchDemo.vue'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <watchDemo></watchDemo>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
