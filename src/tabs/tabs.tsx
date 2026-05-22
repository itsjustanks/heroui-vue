import {
  computed, defineComponent, provide,
  type HTMLAttributes, type PropType, type VNode
} from 'vue'
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { tabsVariants, type TabsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABS_CONTEXT } from './tabs-context'
import { Tab } from './tabs-trigger'

/**
 * Depth-first search of slot vnodes for the first `<Tabs.Tab>`'s id.
 *
 * HeroUI (React Aria) auto-selects the first tab; reka-ui does not — with no
 * `defaultValue` it leaves every tab unselected and no panel shown. When the
 * Tabs is uncontrolled and no `defaultSelectedKey` is given, this recovers the
 * first tab's id so reka gets a sensible `defaultValue`.
 */
function firstTabId (nodes: unknown): string | undefined {
  if (!Array.isArray(nodes)) return undefined
  for (const node of nodes as VNode[]) {
    if (!node || typeof node !== 'object') continue
    if (node.type === Tab) {
      const id = (node.props as Record<string, unknown> | null)?.id
      if (id != null) return String(id)
      continue
    }
    const children = node.children
    if (Array.isArray(children)) {
      const found = firstTabId(children)
      if (found) return found
    } else if (children && typeof children === 'object') {
      const slot = (children as { default?: () => VNode[] }).default
      if (typeof slot === 'function') {
        const found = firstTabId(slot())
        if (found) return found
      }
    }
  }
  return undefined
}

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
    const orientation = computed(() => props.orientation)
    provide(TABS_CONTEXT, { slots: styles, orientation })

    return () => {
      const children = slots.default?.()
      // reka-ui leaves the Tabs unselected with no `defaultValue`; HeroUI
      // auto-selects the first tab. Mirror that when uncontrolled.
      const autoKey =
        props.selectedKey == null && props.defaultSelectedKey == null
          ? firstTabId(children)
          : undefined

      return (
        <RekaTabsRoot
          {...attrs}
          orientation={props.orientation}
          modelValue={props.selectedKey != null ? String(props.selectedKey) : undefined}
          defaultValue={
            props.defaultSelectedKey != null ? String(props.defaultSelectedKey) : autoKey
          }
          onUpdate:modelValue={(value: string) => emit('update:selectedKey', value)}
          data-slot="tabs"
          class={cn(styles.value.base(), props.class)}
        >
          {children}
        </RekaTabsRoot>
      )
    }
  }
})

export default TabsRoot
