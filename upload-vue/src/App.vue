<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import a1 from './components/a1.vue'
import A1 from './components/a1.vue';

const bgcColor = ref('green')
const title = ref('i am title')
const content = ref('i am content')


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
  <div>{{title}}</div>
  <div>{{content}}</div>
  <a1 v-model:title="title" v-model:content="content" v-model.capitalize="title"></a1>
</template>

<style scoped>
  #box{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: v-bind(bgcColor);
  }
</style>