import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldContent — vertical stack for a label + description beside a control.
 * Faithful port of `shadcn-vue`.
 */
export const FieldContent = defineComponent({
  name: 'FieldContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="field-content"
        class={cn('group/field-content flex flex-1 flex-col gap-1.5 leading-snug', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default FieldContent
