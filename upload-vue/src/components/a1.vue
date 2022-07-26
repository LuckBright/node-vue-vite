<template>
  <p @click="updateEmit">i am components1</p>
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'



export default {
  props: {
    title: String,
    content: String,
    modelModifiers: {
      default: () => ({ })
    }
  },
  emits: ['update:title', 'update:content'],
  setup(props: any, { emit }: { emit: Function }) {
    const { title, content, modelModifiers } = toRefs(props)
    const updateEmit = () => {
      // emit('update:title', 'update title')
      // emit('update:content', 'update content')
      console.log(modelModifiers.value)
      let newTitle = ref(title.value)
      if (modelModifiers.value.capitalize) {
        newTitle.value = newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1)
        emit('update:title', newTitle.value)
      }
    }
    return {
      updateEmit
    }
  }
}
</script>
