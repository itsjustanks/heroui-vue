import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsContent as TabsContentBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaTabsContent: any = TabsContentBase
import { cn } from '@/lib/utils'

/**
 * TabsContent — the panel revealed for the active tab.
 *
 * Maps to HeroUI `tabs__panel`. reka-ui already applies `data-orientation` on
 * the root, which HeroUI CSS uses for horizontal/vertical panel spacing.
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
        {...(attrs as Record<string, any>)}
        class={cn('tabs__panel', props.class)}
      >
        {slots.default?.()}
      </RekaTabsContent>
    )
  }
})

export default TabsContent
