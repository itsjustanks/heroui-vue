import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'reka-ui'
import { cn } from '@/lib/utils'
import { ScrollBar } from './scroll-bar'

type TScrollOrientation = 'vertical' | 'horizontal'
type TScrollVariant = 'fade'

/**
 * ScrollArea — HeroUI-Vue scroll-shadow over reka-ui `ScrollAreaRoot`.
 *
 * Emits HeroUI v3 BEM class names from `scroll-shadow.css`:
 *   - base: `scroll-shadow`
 *   - orientation modifier: `scroll-shadow--vertical` / `scroll-shadow--horizontal`
 *   - variant modifier: `scroll-shadow--fade`
 *   - hide-scrollbar modifier: `scroll-shadow--hide-scrollbar`
 */
export const ScrollArea = defineComponent({
  name: 'ScrollArea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<TScrollOrientation>, default: 'vertical' },
    variant: { type: String as PropType<TScrollVariant>, default: 'fade' },
    hideScrollBar: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ScrollAreaRoot
        {...attrs}
        class={cn(
          'scroll-shadow',
          `scroll-shadow--${props.orientation}`,
          `scroll-shadow--${props.variant}`,
          props.hideScrollBar && 'scroll-shadow--hide-scrollbar',
          props.class
        )}
      >
        <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
          {slots.default?.()}
        </ScrollAreaViewport>
        <ScrollBar orientation={props.orientation} />
        <ScrollAreaCorner />
      </ScrollAreaRoot>
    )
  }
})

export default ScrollArea
