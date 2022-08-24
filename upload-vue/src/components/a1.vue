<template>
  <p @click="updateEmit">i am components{{newVal}}</p>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  content: String,
  modelModifiers: { // 默认
    default: () => ({ })
  },
  modelValue: {
    type: Number,
    default: ''
  },
  keyIndex: Number,
  title: String,
  titleModifiers: { // 带参数的自定义修饰符
    default: () => ({ })
  }
})

const emits = defineEmits(['update:title', 'update:content', 'update:modelValue', 'changeClick'])


const { modelValue } = toRefs(props)
const newVal = ref(modelValue.value)
const updateEmit = () => {
  emits('update:modelValue', newVal.value++)
}
</script>
