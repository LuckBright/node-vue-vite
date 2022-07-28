<template>
  <p @click="updateEmit">i am components{{keyIndex}}</p>
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'



export default {
  props: {
    content: String,
    modelModifiers: { // 默认
      default: () => ({ })
    },
    keyIndex: Number,
    title: String,
    titleModifiers: { // 带参数的自定义修饰符
      default: () => ({ })
    }
  },
  emits: ['update:title', 'update:content', 'changeClick'],
  setup(props: any, { emit }: { emit: Function }) {
    const { title, content, titleModifiers } = toRefs(props)

    // 双向绑定会触发 ref 数组的再次调用
    const updateEmit = () => {
      let newTitle = ref(title.value)
      newTitle.value = newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1)
      emit('update:title', newTitle.value)
      // if (titleModifiers.value.capitalize) {
      //   newTitle.value = newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1)
      //   emit('update:title', newTitle.value)
      // }
      emit('changeClick')
    }
    return {
      updateEmit
    }
  }
}
</script>
