import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectGroup as RekaSelectGroup } from 'reka-ui'
import { cn } from '@/lib/utils'

/** SelectGroup — groups related items (with a `SelectLabel`) for accessibility. */
export const SelectGroup = defineComponent({
  name: 'SelectGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectGroup {...attrs} class={cn(props.class)}>
        {slots.default?.()}
      </RekaSelectGroup>
    )
  }
})

export default SelectGroup
