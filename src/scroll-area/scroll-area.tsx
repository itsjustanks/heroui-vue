import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'reka-ui'
import { cn } from '@/lib/utils'
import { ScrollBar } from './scroll-bar'

/**
 * ScrollArea — a styled custom-scrollbar container.
 *
 * HeroUI-Vue primitive ported from `shadcn/scroll-area`. reka-ui
 * `ScrollAreaRoot` + `ScrollAreaViewport` drive the headless behaviour; the
 * `ScrollBar` part is rendered internally. Only `class` is declared — all
 * `ScrollAreaRoot` props (type, scrollHideDelay, dir, ...) forward via `attrs`.
 */
export const ScrollArea = defineComponent({
  name: 'ScrollArea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ScrollAreaRoot {...attrs} class={cn('relative overflow-hidden', props.class)}>
        <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
          {slots.default?.()}
        </ScrollAreaViewport>
        <ScrollBar />
        <ScrollAreaCorner />
      </ScrollAreaRoot>
    )
  }
})

export default ScrollArea
