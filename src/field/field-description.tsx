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
        data-slot="field-description"
        class={cn(
          'text-sm font-normal leading-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance',
          'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
          '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
          props.class
        )}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default FieldDescription
