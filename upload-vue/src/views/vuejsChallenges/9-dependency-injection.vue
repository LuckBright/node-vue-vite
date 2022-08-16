// Child.vue 

<script setup lang="ts">
// 添加代码,使`count`值注入子组件
import { inject } from 'vue'
const count = inject('count')
</script>

<template>
  {{ count }}
</template>