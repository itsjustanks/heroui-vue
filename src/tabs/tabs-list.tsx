import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TabsList as RekaTabsList } from 'reka-ui'
import { tabsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABS_CONTEXT } from './tabs-context'

/**
 * TabListContainer — the wrapper `<div>` that surrounds the tab list track.
 * Faithful Vue port of HeroUI v3 `Tabs.ListContainer` (`tabs__list-container`).
 */
export const TabListContainer = defineComponent({
  name: 'TabListContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="tabs-list-container"
        class={cn((ctx?.slots.value ?? tabsVariants()).tabListContainer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

/**
 * TabList — the segmented track holding the tab triggers.
 * Faithful Vue port of HeroUI v3 `Tabs.List` (`tabs__list`). reka-ui's
 * `TabsList` provides the roving focus management.
 */
export const TabList = defineComponent({
  name: 'TabList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => (
      <RekaTabsList
        {...attrs}
        data-slot="tabs-list"
        class={cn((ctx?.slots.value ?? tabsVariants()).tabList(), props.class)}
      >
        {slots.default?.()}
      </RekaTabsList>
    )
  }
})

export default TabList
