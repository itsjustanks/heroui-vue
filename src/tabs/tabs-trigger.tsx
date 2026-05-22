import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TabsTrigger — an individual tab inside the segmented track.
 *
 * HeroUI `tabs__tab`: a `rounded-md` segment; the active tab lifts onto a
 * `bg-background` surface with `shadow-sm`. Styling is adapted from HeroUI's
 * `tabs.css`, translated to reka-ui's `data-[state=active]` selector and the
 * repo's surface tokens.
 */
export const TabsTrigger = defineComponent({
  name: 'TabsTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTabsTrigger
        {...attrs}
        class={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
          props.class
        )}
      >
        <span class="truncate">{slots.default?.()}</span>
      </RekaTabsTrigger>
    )
  }
})

export default TabsTrigger
