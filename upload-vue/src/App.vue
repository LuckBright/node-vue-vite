<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import a2 from './components/a2.jsx'

const bgcColor = ref('green')
const handleLinkNode = () => {
  // axios.get('/api/getData').then(res => {
  //   console.log('res= >>>>>>>>>', res)
  // })
  bgcColor.value = 'red'
}

</script>

<template>
  <button @click="handleLinkNode">测试链接后端</button>
  <div id="box"></div>
  <a2></a2>
</template>

<style scoped>
  #box{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: v-bind(bgcColor);
  }
</style>