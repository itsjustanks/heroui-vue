import { computed, defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { separatorVariants, type SeparatorVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOOLBAR_CONTEXT } from '@/toolbar/toolbar-context'

/**
 * SeparatorRoot — faithful Vue port of HeroUI v3 `SeparatorRoot`.
 *
 * Wraps reka-ui `Separator` and applies BEM classes from `separatorVariants`
 * in `@heroui/styles`. Flat style (no slots) — `separatorVariants({...})`
 * returns a class string directly.
 *
 * Inside a `Toolbar`, an `orientation`-less separator flips to the toolbar's
 * perpendicular axis (vertical in a horizontal toolbar), matching React-Aria.
 * An explicit `orientation` prop always wins.
 */
export const SeparatorRoot = defineComponent({
  name: 'SeparatorRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Axis of the separator. Defaults to `horizontal`, or perpendicular to an enclosing `Toolbar`. */
    orientation: { type: String as PropType<SeparatorProps['orientation']>, default: undefined },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: true },
    /** Visual variant — `separator--{variant}`. @default 'default' */
    variant: { type: String as PropType<SeparatorVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs }) {
    const toolbarCtx = inject(TOOLBAR_CONTEXT, null)

    const orientation = computed<'horizontal' | 'vertical'>(() => {
      if (props.orientation) return props.orientation
      if (toolbarCtx) {
        return toolbarCtx.orientation.value === 'vertical' ? 'horizontal' : 'vertical'
      }
      return 'horizontal'
    })

    return () => (
      <RekaSeparator
        {...attrs}
        orientation={orientation.value}
        decorative={props.decorative}
        data-slot="separator"
        data-orientation={orientation.value}
        class={cn(
          separatorVariants({ orientation: orientation.value, variant: props.variant }),
          props.class
        )}
      />
    )
  }
})

export default SeparatorRoot
