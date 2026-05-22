import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ToolbarLink as RekaToolbarLink, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ToolbarLink — a focusable anchor inside a Toolbar.
 *
 * Wraps reka-ui `ToolbarLink` (roving-focus participant). Styled as a HeroUI v3
 * inline link; `as` / `asChild` forwarded so it can host a router-link.
 */
export const ToolbarLink = defineComponent({
  name: 'ToolbarLink',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'a' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaToolbarLink
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="toolbar-link"
        class={cn(
          'inline-flex items-center gap-1 rounded-md text-sm font-medium text-link underline underline-offset-4',
          'transition-colors hover:decoration-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaToolbarLink>
    )
  }
})

export default ToolbarLink
