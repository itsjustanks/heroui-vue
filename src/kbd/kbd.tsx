import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Kbd — a keyboard key hint. Faithful port of `shadcn/kbd`'s `Kbd`, restyled to
 * HeroUI v3 taste (`kbd.css`): a compact `bg-muted` chip with a soft border,
 * `rounded-md` corners, and `text-xs font-medium` text. Repo tokens; no API
 * drift from the shadcn original.
 */
export const Kbd = defineComponent({
  // `kbd` is a reserved HTML element name — keep the PascalCase export, name the
  // defineComponent uniquely so vue/no-reserved-component-names stays quiet.
  name: 'HeroKbd',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <kbd
        {...attrs}
        class={cn(
          'pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-md border border-border bg-muted px-1.5 font-sans text-xs font-medium text-muted-foreground',
          '[&_svg:not([class*=\'size-\'])]:size-3',
          '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
          props.class
        )}
      >
        {slots.default?.()}
      </kbd>
    )
  }
})

export default Kbd
