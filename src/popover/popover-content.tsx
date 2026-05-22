import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { PopoverContent as RekaPopoverContent, PopoverPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * PopoverContent — the floating panel (HeroUI `popover`).
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element: it mirrors reka-ui's `data-side` to HeroUI's
 * `data-placement` and derives `data-entering`/`data-exiting` from `data-state`,
 * which `popover.css` keys its placement-aware enter/exit animation off.
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
    return () => (
      <PopoverPortal>
        <RekaPopoverContent align={props.align} sideOffset={props.sideOffset} asChild>
          {withDirectives(
            (
              <div {...attrs} data-slot="popover" class={cn('popover', props.class)}>
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaPopoverContent>
      </PopoverPortal>
    )
  }
})

export default PopoverContent
