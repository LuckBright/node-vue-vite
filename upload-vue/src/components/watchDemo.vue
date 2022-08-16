<script lang="ts" setup>
  import { inject, provide, reactive, Ref, ref, shallowRef, watch, watchEffect } from 'vue'
  import childVue from '../views/vuejsChallenges/9-dependency-injection.vue'

  const obj = reactive({
    strNum: 0
  })

  const eleRef = ref()
  const age = ref(2)
  watch(age, () => {
    console.log(eleRef.value)
  },{
    flush: 'post'
  })
  age.value = 18

  const state = shallowRef({ count: { num: 1 } })
  const handleClick = () => {
    state.value.count.num = 2
  }

  type Obj = {
    name: string
  }
  let messname: Ref<Obj> = shallowRef({
    name: "周杰伦"
  })
  const count: any = inject('count')
  console.log(count)
  const change =() =>{
    messname.value.name ="邓紫棋"
    console.log(messname.value.name) //邓紫棋 （但是视图页面还是周杰伦)
    count.value++  
  }

  
</script>

<template>
  <childVue></childVue>
  <div @click="change">改变名称</div>
  <div @click="handleClick">+</div>
  <div>
    {{messname.name}}
    {{state.count.num}}
    {{obj.strNum}}
  </div>
</template>