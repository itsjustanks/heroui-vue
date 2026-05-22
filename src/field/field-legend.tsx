import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldLegend — the legend for a `FieldSet`. Faithful port of
 * `shadcn/field/FieldLegend`.
 *
 * `variant` (`legend` / `label`) drives the text size via `data-variant`.
 */
export const FieldLegend = defineComponent({
  name: 'FieldLegend',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<'legend' | 'label'>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <legend
        {...attrs}
        data-slot="field-legend"
        data-variant={props.variant}
        class={cn(
          'mb-3 font-medium',
          'data-[variant=legend]:text-base',
          'data-[variant=label]:text-sm',
          props.class
        )}
      >
        {slots.default?.()}
      </legend>
    )
  }
})

export default FieldLegend
