import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'
import { tabsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABS_CONTEXT } from './tabs-context'

/**
 * Tab — an individual tab trigger inside the track.
 * Faithful Vue port of HeroUI v3 `Tabs.Tab` (`tabs__tab`).
 *
 * reka-ui `TabsTrigger` drives the selection state and sets
 * `data-state="active"` / `data-selected` on the element.
 *
 * A `TabSeparator` is rendered as the first child (mirrors HeroUI React's
 * pattern where each `Tab` contains a sibling separator span used by CSS
 * selectors for the adjacent-trigger border rule).
 */
const TabTriggerImpl = RekaTabsTrigger as any

export const Tab = defineComponent({
  name: 'Tab',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => {
      const slotMap = ctx?.slots.value ?? tabsVariants()
      return (
        <TabTriggerImpl
          {...attrs}
          data-slot="tabs-tab"
          class={cn(slotMap.tab(), props.class)}
        >
          <span
            aria-hidden="true"
            data-slot="tabs-separator"
            class={cn(slotMap.separator())}
          />
          {slots.default?.()}
        </TabTriggerImpl>
      )
    }
  }
})

export default Tab
