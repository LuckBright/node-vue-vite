import { defineComponent } from 'vue'

export default defineComponent({
  name: 'a2',
  setup(props) {
    return () => {
      return <div>
        i am defineComponent 渲染的组件
      </div>
    }
  }
})