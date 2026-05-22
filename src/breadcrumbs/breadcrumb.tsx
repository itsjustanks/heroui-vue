import {
  Comment,
  Fragment,
  cloneVNode,
  computed,
  defineComponent,
  isVNode,
  provide,
  type HTMLAttributes,
  type PropType,
  type VNode,
} from 'vue'
import { breadcrumbsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BREADCRUMBS_CONTEXT } from './breadcrumb-context'

/** Flatten fragments (e.g. from `v-for`) and drop comment placeholders. */
function flattenItems (nodes: VNode[]): VNode[] {
  const out: VNode[] = []
  for (const n of nodes) {
    if (!isVNode(n)) continue
    if (n.type === Fragment) {
      if (Array.isArray(n.children)) out.push(...flattenItems(n.children as VNode[]))
    } else if (n.type !== Comment) {
      out.push(n)
    }
  }
  return out
}

/** True when a vnode is a `Breadcrumbs.Item`. */
function isBreadcrumbsItem (n: VNode): boolean {
  const t = n.type as { name?: string; __name?: string } | string
  return typeof t === 'object' && t !== null && (t.name ?? t.__name) === 'BreadcrumbsItem'
}

/**
 * BreadcrumbsRoot — the navigation container. Faithful Vue port of HeroUI v3 `Breadcrumbs`.
 *
 * Renders a `<nav>` landmark wrapping an `<ol>` list. Computes HeroUI's
 * `breadcrumbsVariants` slot map and provides it to `BreadcrumbsItem`.
 *
 * Like HeroUI / React-Aria, the LAST crumb is the current page: it is marked
 * `isCurrent` automatically (so it gets `aria-current="page"`, the `data-current`
 * link styling, and no trailing separator) unless the consumer set `isCurrent`
 * explicitly on it.
 */
export const BreadcrumbsRoot = defineComponent({
  name: 'Breadcrumbs',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => breadcrumbsVariants({}))
    provide(BREADCRUMBS_CONTEXT, { slots: styles })

    return () => {
      const items = flattenItems(slots.default?.() ?? [])

      let lastItemIdx = -1
      items.forEach((n, i) => { if (isBreadcrumbsItem(n)) lastItemIdx = i })

      const children = items.map((n, i) => {
        if (i !== lastItemIdx) return n
        const p = n.props ?? {}
        const explicit = 'isCurrent' in p || 'is-current' in p
        return explicit ? n : cloneVNode(n, { isCurrent: true })
      })

      return (
        <nav {...attrs} aria-label="breadcrumb" data-slot="breadcrumbs">
          <ol class={cn(styles.value.base(), props.class)}>
            {children}
          </ol>
        </nav>
      )
    }
  }
})

export default BreadcrumbsRoot
