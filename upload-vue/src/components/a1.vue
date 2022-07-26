<template>
  <p>i am components1</p>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'



export default {
  setup() {
    const { proxy } = getCurrentInstance()
    console.log(proxy)
    return {

    }
  }
}
</script>
