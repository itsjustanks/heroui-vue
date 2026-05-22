import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * InputGroupText — inline muted text/icon content inside an `InputGroup` addon.
 * Faithful port of `shadcn/input-group/InputGroupText`.
 */
export const InputGroupText = defineComponent({
  name: 'InputGroupText',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="input-group-text"
        class={cn(props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default InputGroupText
