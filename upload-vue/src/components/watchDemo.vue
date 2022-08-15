<script lang="ts" setup>
  import { reactive, Ref, ref, watch } from 'vue'

  const obj = reactive({
    strNum: 0
  })

  const handleClick = () => {
    obj.strNum++
  }

  watch(obj, () => {
    console.log(obj.strNum)
  }, {
    deep: true
  })

  const eleRef = ref()
  const age = ref(2)
  watch(age, () => {
    console.log(eleRef.value)
  },{
    flush: 'post'
  })
  age.value = 18
</script>

<template>
  <div @click="handleClick">+</div>
  <div>
    {{obj.strNum}}
  </div>
</template>