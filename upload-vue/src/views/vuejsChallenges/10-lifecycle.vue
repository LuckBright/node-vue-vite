// Child.vue

<script setup lang="ts">
import { onMounted, inject, onUnmounted, ref } from "vue"

let timer: any = inject('timer')
const count: any = inject('count')


onMounted(() => {
  if (!timer) timer = ref(() => {})
  // 切换子组件时, 定时器将不正常工作, 让我们来修复它 . 
  timer.value = window.setInterval(() => {
    count && count.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer.value)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
