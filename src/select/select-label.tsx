import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectLabel as RekaSelectLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/** SelectLabel — a small section heading inside the listbox. */
export const SelectLabel = defineComponent({
  name: 'SelectLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectLabel
        {...attrs}
        data-slot="label"
        class={cn(props.class)}
      >
        {slots.default?.()}
      </RekaSelectLabel>
    )
  }
})

export default SelectLabel
