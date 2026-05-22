import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { linkVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LINK_CONTEXT } from './link-context'

/**
 * LinkRoot — the anchor container. Faithful Vue port of HeroUI v3 `LinkRoot`.
 *
 * Computes HeroUI's `linkVariants` slot map and provides it to `LinkIcon` so
 * every part is styled from `@heroui/styles` — never a hand-written class string.
 * Renders an `<a>` by default; `as`/`asChild` polymorphism via reka-ui `Primitive`.
 */
export const LinkRoot = defineComponent({
  name: 'LinkRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** When `true`, marks the link as disabled (`aria-disabled`, data-disabled). */
    disabled: { type: Boolean, default: false },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'a' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => linkVariants())
    provide(LINK_CONTEXT, { slots: styles })

    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        aria-disabled={props.disabled || undefined}
        data-disabled={props.disabled ? '' : undefined}
        data-slot="link"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default LinkRoot
