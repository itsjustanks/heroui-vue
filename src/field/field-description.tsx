import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldDescription — helper text beneath a field label/control. Faithful port
 * of `shadcn/field/FieldDescription`.
 */
export const FieldDescription = defineComponent({
  name: 'FieldDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <p
        {...attrs}
        data-slot="description"
        class={cn('description', props.class)}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default FieldDescription
