import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { tabsVariants, type TabsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABS_CONTEXT } from './tabs-context'

/**
 * TabsRoot — the root tabs container. Faithful Vue port of HeroUI v3 `Tabs`.
 *
 * Computes HeroUI's `tabsVariants` slot map and provides it to all compound
 * parts (`Tabs.ListContainer`, `Tabs.List`, `Tabs.Tab`, …). reka-ui owns the
 * roving-focus and selection behaviour.
 */
export const TabsRoot = defineComponent({
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    class:       { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `tabs--secondary`. @default 'primary' */
    variant:     { type: String as PropType<TabsVariants['variant']>, default: 'primary' },
    /** Flow axis — forwarded to reka-ui for roving focus. @default 'horizontal' */
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => tabsVariants({ variant: props.variant }))
    provide(TABS_CONTEXT, { slots: styles })

    return () => (
      <RekaTabsRoot
        {...attrs}
        orientation={props.orientation}
        data-slot="tabs"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaTabsRoot>
    )
  }
})

export default TabsRoot
