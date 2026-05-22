import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { PopoverContent as RekaPopoverContent, PopoverPortal } from 'reka-ui'
import { popoverVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverContent — the floating panel surface (HeroUI `popover__base`).
 * Mirrors HeroUI v3 `PopoverContent` which renders `PopoverPrimitive` with
 * `slots.base()`. Children (typically `Popover.Dialog`) are passed through as-is.
 *
 * OVERLAY SHIM — DO NOT REMOVE.
 * Rendered `asChild` so reka-ui hands control of the overlay DOM element to our
 * `<div>`. `withDirectives(..., [[vHerouiState]])` then mirrors reka-ui's
 * `data-side` → `data-placement` and `data-state` → `data-entering`/`data-exiting`
 * so HeroUI's CSS placement-aware animations work correctly.
 */
export const PopoverContent = defineComponent({
  name: 'PopoverContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'center' },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(POPOVER_CONTEXT, null)

    return () => {
      const styles = ctx?.slots.value ?? popoverVariants()

      return (
        <PopoverPortal>
          <RekaPopoverContent align={props.align} sideOffset={props.sideOffset} asChild>
            {withDirectives(
              (
                <div {...attrs} class={cn(styles.base(), props.class)}>
                  {slots.default?.()}
                </div>
              ),
              [[vHerouiState]]
            )}
          </RekaPopoverContent>
        </PopoverPortal>
      )
    }
  }
})

export default PopoverContent
