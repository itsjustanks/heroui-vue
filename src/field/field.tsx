import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { fieldVariants, type FieldVariants } from './variants'

/**
 * Field — a single form-field row. Faithful port of `shadcn-vue`.
 *
 * Orientation (`vertical` / `horizontal` / `responsive`) drives the layout via
 * `fieldVariants`; `data-slot`/`data-orientation` hooks are preserved verbatim.
 */
export const Field = defineComponent({
  name: 'Field',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<FieldVariants['orientation']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="field"
        data-orientation={props.orientation}
        class={cn(fieldVariants({ orientation: props.orientation }), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Field
