<script setup lang="ts">
  import { inject } from 'vue'

  const count: any = inject('count')
</script>

<template>
  <div>
    兄弟节点：{{ count }}
  </div>
</template>