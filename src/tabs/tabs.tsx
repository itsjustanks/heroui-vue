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
 * roving-focus and selection behaviour. HeroUI's `selectedKey` /
 * `defaultSelectedKey` map to reka-ui's `modelValue` / `defaultValue`.
 */
export const TabsRoot = defineComponent({
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    class:              { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `tabs--secondary`. @default 'primary' */
    variant:            { type: String as PropType<TabsVariants['variant']>, default: undefined },
    /** Flow axis — forwarded to reka-ui for roving focus. @default 'horizontal' */
    orientation:        { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    /** Controlled selected tab key. */
    selectedKey:        { type: [String, Number] as PropType<string | number>, default: undefined },
    /** Initially selected tab key when uncontrolled. */
    defaultSelectedKey: { type: [String, Number] as PropType<string | number>, default: undefined }
  },
  emits: {
    /** Emitted when the selected tab changes. */
    'update:selectedKey': (_value: string) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => tabsVariants({ variant: props.variant }))
    provide(TABS_CONTEXT, { slots: styles })

    return () => (
      <RekaTabsRoot
        {...attrs}
        orientation={props.orientation}
        modelValue={props.selectedKey != null ? String(props.selectedKey) : undefined}
        defaultValue={props.defaultSelectedKey != null ? String(props.defaultSelectedKey) : undefined}
        onUpdate:modelValue={(value: string) => emit('update:selectedKey', value)}
        data-slot="tabs"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaTabsRoot>
    )
  }
})

export default TabsRoot
