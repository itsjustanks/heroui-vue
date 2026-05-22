import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldSet — a `<fieldset>` grouping related fields. Faithful port of
 * `shadcn/field/FieldSet`.
 *
 * HeroUI `fieldset.css`: `flex flex-col gap-6`; spacing tightens to `gap-3`
 * when wrapping a checkbox/radio group.
 */
export const FieldSet = defineComponent({
  name: 'FieldSet',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <fieldset
        {...attrs}
        data-slot="field-set"
        class={cn(
          'flex flex-col gap-6',
          'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
          props.class
        )}
      >
        {slots.default?.()}
      </fieldset>
    )
  }
})

export default FieldSet
