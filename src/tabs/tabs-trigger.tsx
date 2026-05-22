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
 * `data-state="active"` / `data-selected` on the element. The consumer places
 * `Tabs.Indicator` / `Tabs.Separator` inside the tab as children.
 */
const TabTriggerImpl = RekaTabsTrigger as any

export const Tab = defineComponent({
  name: 'Tab',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Unique key identifying this tab (HeroUI's `id`). */
    id:    { type: [String, Number] as PropType<string | number>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => {
      const slotMap = ctx?.slots.value ?? tabsVariants()
      return (
        <TabTriggerImpl
          {...attrs}
          value={props.id != null ? String(props.id) : undefined}
          data-slot="tabs-tab"
          class={cn(slotMap.tab(), props.class)}
        >
          {slots.default?.()}
        </TabTriggerImpl>
      )
    }
  }
})

export default Tab
