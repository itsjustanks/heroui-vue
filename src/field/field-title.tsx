import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldTitle — a non-`<label>` field title (e.g. for non-input rows). Faithful
 * port of `shadcn/field/FieldTitle`.
 *
 * Shares the `data-slot="field-label"` hook with `FieldLabel` so layout
 * selectors treat it identically.
 */
export const FieldTitle = defineComponent({
  name: 'FieldTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="field-label"
        class={cn(
          'flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default FieldTitle
