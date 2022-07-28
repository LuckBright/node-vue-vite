import { h } from 'vue'
import { ContextType, PropsType } from './props-type'

const DynamicHeading = (props: PropsType, context: ContextType) => {
  const { level } = props
  return h(`h${level}`, context.attrs, context.slots)
}
DynamicHeading.props = ['level']

export default DynamicHeading