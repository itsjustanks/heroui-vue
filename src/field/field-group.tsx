import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldGroup — a container-query stack of `Field`s. Faithful port of
 * `shadcn/field/FieldGroup`.
 *
 * Establishes the `@container/field-group` so `responsive` fields can react to
 * the group width.
 */
export const FieldGroup = defineComponent({
  name: 'FieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="field-group"
        class={cn(
          'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default FieldGroup
