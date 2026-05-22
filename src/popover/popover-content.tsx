import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PopoverContent as RekaPopoverContent, PopoverPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * PopoverContent — the floating panel. HeroUI `popover.css`: overlay surface,
 * `rounded-2xl`, `p-4` dialog padding, placement-aware animation. Tokens adapted
 * to the repo; reka-ui `data-state` / `data-side`.
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
        <RekaPopoverContent
          {...attrs}
          align={props.align}
          sideOffset={props.sideOffset}
          data-slot="popover"
          class={cn('popover', props.class)}
        >
          {slots.default?.()}
        </RekaPopoverContent>
      </PopoverPortal>
    )
  }
})

export default PopoverContent
