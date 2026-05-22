import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TabsContent as RekaTabsContent } from 'reka-ui'
import { tabsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABS_CONTEXT } from './tabs-context'

/**
 * TabPanel — the content panel revealed for the active tab.
 * Faithful Vue port of HeroUI v3 `Tabs.Panel` (`tabs__panel`).
 *
 * reka-ui `TabsContent` manages mounting/unmounting on selection change.
 */
const RekaContent = RekaTabsContent as any

export const TabPanel = defineComponent({
  name: 'TabPanel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => (
      <RekaContent
        {...attrs}
        data-slot="tabs-panel"
        class={cn((ctx?.slots.value ?? tabsVariants()).tabPanel(), props.class)}
      >
        {slots.default?.()}
      </RekaContent>
    )
  }
})

/**
 * TabIndicator — the animated selection indicator underline / pill.
 * Faithful Vue port of HeroUI v3 `Tabs.Indicator` (`tabs__indicator`).
 *
 * Rendered as a plain `<span>`; position is driven by CSS custom properties
 * (HeroUI's `tabs__indicator` uses pseudo-element / transform tricks).
 * There is no reka-ui SelectionIndicator equivalent — a `<span>` suffices.
 */
export const TabIndicator = defineComponent({
  name: 'TabIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="tabs-indicator"
        class={cn((ctx?.slots.value ?? tabsVariants()).tabIndicator(), props.class)}
      />
    )
  }
})

/**
 * TabSeparator — the thin divider between adjacent tab triggers.
 * Faithful Vue port of HeroUI v3 `Tabs.Separator` (`tabs__separator`).
 */
export const TabSeparator = defineComponent({
  name: 'TabSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(TABS_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="tabs-separator"
        class={cn((ctx?.slots.value ?? tabsVariants()).separator(), props.class)}
      />
    )
  }
})

export default TabPanel
