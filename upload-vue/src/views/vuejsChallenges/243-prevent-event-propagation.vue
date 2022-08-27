<!-- 阻止事件冒泡 -->
<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = (e: Event) => {
  e.stopPropagation()
  console.log('click2')
}

</script>

<template>
  <div @click="click1()">
  <!-- div @click.stop="click2()" -->
   <div @click="click2($event)">
     click me
   </div>
  </div>
</template>