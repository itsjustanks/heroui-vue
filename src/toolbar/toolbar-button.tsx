import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ToolbarButton as RekaToolbarButton, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ToolbarButton — a focusable action inside a Toolbar.
 *
 * Wraps reka-ui `ToolbarButton` (roving-focus participant). Styled to HeroUI v3
 * ghost-button taste; `as` / `asChild` forwarded for polymorphism.
 */
export const ToolbarButton = defineComponent({
  name: 'ToolbarButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaToolbarButton
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="toolbar-button"
        class={cn(
          'inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-3 text-sm font-medium',
          'text-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaToolbarButton>
    )
  }
})

export default ToolbarButton
