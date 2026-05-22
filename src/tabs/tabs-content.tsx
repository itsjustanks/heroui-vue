import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsContent as RekaTabsContent } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TabsContent — the panel revealed for the active tab.
 *
 * HeroUI `tabs__panel`: a focusable region spaced below the track. Styling is
 * adapted from HeroUI's `tabs.css`, expressed with the repo's tokens.
 */
export const TabsContent = defineComponent({
  name: 'TabsContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTabsContent
        {...attrs}
        class={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaTabsContent>
    )
  }
})

export default TabsContent
