import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ToolbarRoot as RekaToolbarRoot } from 'reka-ui'
import { toolbarVariants, type ToolbarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * ToolbarRoot — the root action bar. Faithful Vue port of HeroUI v3 `Toolbar`.
 *
 * `toolbarVariants` from `@heroui/styles` is a flat (no-slot) `tv()` function
 * that returns a string directly. reka-ui `ToolbarRoot` provides arrow-key
 * roving focus across its children.
 */
export const ToolbarRoot = defineComponent({
  name: 'Toolbar',
  inheritAttrs: false,
  props: {
    class:       { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Flow axis — forwarded to reka-ui for roving focus. @default 'horizontal' */
    orientation: { type: String as PropType<ToolbarVariants['orientation']>, default: 'horizontal' },
    /** When `true`, wraps controls in a rounded surface card. @default false */
    isAttached:  { type: Boolean as PropType<NonNullable<ToolbarVariants['isAttached']>>, default: false }
  },
  setup (props, { attrs, slots }) {
    const classes = computed(() =>
      cn(toolbarVariants({ orientation: props.orientation, isAttached: props.isAttached }), props.class)
    )

    return () => (
      <RekaToolbarRoot
        {...attrs}
        orientation={props.orientation}
        data-slot="toolbar"
        class={classes.value}
      >
        {slots.default?.()}
      </RekaToolbarRoot>
    )
  }
})

export default ToolbarRoot
