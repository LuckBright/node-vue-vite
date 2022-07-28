<script setup lang="ts">
import axios from 'axios'
import { reactive, ref, watchEffect, Ref, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import a1 from './components/a1.vue'
import a2 from './components/a2'
import renderComponent from './components/randerComponent'

const bgcColor = ref('green')
const title = ref('i am title')
const content = ref('i am content')
const text1 = ref('')
const list = reactive([1, 2, 3])
let itemRefs:Ref[] = reactive([])

const setItemRef = (el: Ref) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
const changeClick = () => {
  console.log('执行事件', itemRefs)
}
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
  <renderComponent :level="3">
    我是通过 render 渲染出来的组件
  </renderComponent>
  <a1 
    v-for="item in list"
    :key="item"
    :keyIndex="item"
    :ref="setItemRef"
    v-model:title="title"
    @changeClick="changeClick"
    v-model:content="content">
  </a1>
</template>

<style scoped>
  #box{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: v-bind(bgcColor);
  }
</style>