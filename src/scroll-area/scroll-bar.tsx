import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ScrollAreaScrollbar, ScrollAreaThumb, type ScrollAreaScrollbarProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ScrollBar — the draggable scrollbar track + thumb.
 *
 * HeroUI scroll-shadow taste: a quiet, touch-friendly track with a
 * `rounded-full bg-border` thumb. reka-ui `ScrollAreaScrollbar` drives
 * visibility; only `class` is declared, the rest forwards via `attrs`.
 */
export const ScrollBar = defineComponent({
  name: 'ScrollBar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<ScrollAreaScrollbarProps['orientation']>, default: 'vertical' }
  },
  setup (props, { attrs }) {
    return () => (
      <ScrollAreaScrollbar
        {...attrs}
        orientation={props.orientation}
        class={cn(
          'flex touch-none select-none transition-colors',
          props.orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
          props.orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
          props.class
        )}
      >
        <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
      </ScrollAreaScrollbar>
    )
  }
})

export default ScrollBar
