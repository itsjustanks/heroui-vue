import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { breadcrumbsVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BREADCRUMBS_CONTEXT } from './breadcrumb-context'

/**
 * BreadcrumbsRoot — the navigation container. Faithful Vue port of HeroUI v3 `Breadcrumbs`.
 *
 * Renders a `<nav>` landmark wrapping an `<ol>` list. Computes HeroUI's
 * `breadcrumbsVariants` slot map and provides it to `BreadcrumbsItem`.
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

    return () => (
      <nav {...attrs} aria-label="breadcrumb" data-slot="breadcrumbs">
        <ol class={cn(styles.value.base(), props.class)}>
          {slots.default?.()}
        </ol>
      </nav>
    )
  }
})

export default BreadcrumbsRoot
