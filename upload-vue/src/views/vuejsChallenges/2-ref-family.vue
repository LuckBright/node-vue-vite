<script setup lang="ts">
import { ref, Ref, reactive, isRef, toRefs, unref, toRef } from "vue"

const initial = ref(10)
const count = ref(0)

// 挑战 1: 更新 ref
function update(value: number) {
  count.value = value
  // 实现...
}
update(initial.value)

/**
 * 挑战 2: 检查`count`是否为一个 ref 对象
 * 确保以下输出为1
*/
console.log(
  // impl ? 1 : 0
  isRef(count) ? 1 : 0
)

/**
 * 挑战 3: 如果参数是一个 ref，则返回内部值，否则返回参数本身
 * 确保以下输出为true
*/
function initialCount(value: number | Ref<number>) {
  value = unref(value)
  // 确保以下输出为true
  console.log(value === 10)
}

initialCount(initial)

/**
 * 挑战 4:
 * 为源响应式对象上的某个 `property` 新创建一个 `ref`。
 * 然后,`ref` 可以被传递，它会保持对其源`property`的响应式连接。
 * 确保以下输出为true
*/
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = toRef(state, 'foo') // 修改这里的实现...

console.log('toRef', fooRef)

// 修改引用将更新原引用
fooRef.value++
console.log(state.foo === 2)

// 修改原引用也会更新`ref`
state.foo++
console.log(fooRef.value === 3)

// // 解构 state 测试是否还拥有响应式
// let { foo } = state
// foo++
// console.log('foo', foo, state.foo) // foo 4 state.foo 3 结论：state 的响应式丢失

// 测试，增加 toRefs 包装，查看 state 是否还具有响应式特性

let { foo } = toRefs(state)
foo.value++
console.log('foo', foo, state.foo)

</script>

<template>
  <div>
    <h1>msg</h1>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>