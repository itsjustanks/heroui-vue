import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { ButtonGroupVariants } from './button-group-variants'

/**
 * ButtonGroupText — text/label slot rendered inside a ButtonGroup. Faithful
 * port of `shadcn/button-group/ButtonGroupText` (which the repo authored as an
 * exact mirror of `ButtonGroup`): same `Primitive`, `role="group"`,
 * `data-slot="button-group"`, and grouping styles.
 */
export const ButtonGroupText = defineComponent({
  name: 'ButtonGroupText',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<ButtonGroupVariants['orientation']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        role="group"
        data-slot="button-group"
        data-orientation={props.orientation}
        as={props.as}
        asChild={props.asChild}
        class={cn(
          "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default ButtonGroupText
