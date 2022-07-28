import { AppContext, ExtractPropTypes, PropType } from "vue"

const propsType = {
  level: {
    type: Number,
    default: 1
  }
}

const contextType = {
  slots: {
    type: Object as PropType<AppContext>
  },
  attrs: {
    type: Object as PropType<AppContext>
  }
}

export type PropsType = ExtractPropTypes<typeof propsType>
export type ContextType = ExtractPropTypes<typeof contextType>