import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Separator } from '@/separator'

/**
 * FieldSeparator — a divider between field groups, optionally with centred
 * label content. Faithful port of `shadcn-vue`.
 *
 * `data-content` reflects whether the default slot is present; the centred
 * label span renders only when content is provided.
 */
export const FieldSeparator = defineComponent({
  name: 'FieldSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const hasContent = !!slots.default

      return (
        <div
          {...attrs}
          data-slot="field-separator"
          data-content={hasContent}
          class={cn(
            'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
            props.class
          )}
        >
          <Separator class="absolute inset-0 top-1/2" />
          {hasContent
            ? (
              <span
                class="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
                data-slot="field-separator-content"
              >
                {slots.default?.()}
              </span>
            )
            : null}
        </div>
      )
    }
  }
})

export default FieldSeparator
