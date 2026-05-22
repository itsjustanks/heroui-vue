import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldLegend — the legend for a `FieldSet`.
 *
 * Emits HeroUI v3 BEM class name from `fieldset.css`:
 *   `fieldset__legend`
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
        class={cn('fieldset__legend', props.class)}
      >
        {slots.default?.()}
      </legend>
    )
  }
})

export default FieldLegend
