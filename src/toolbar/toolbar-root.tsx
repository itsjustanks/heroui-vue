import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ToolbarRoot as RekaToolbarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { toolbarVariants, type TToolbarVariants } from './toolbar-variants'

/** Toolbar flow axis — mirrors reka-ui's internal `DataOrientation`. */
type TToolbarOrientation = 'horizontal' | 'vertical'

/**
 * ToolbarRoot — HeroUI-Vue Toolbar primitive over reka-ui `ToolbarRoot`.
 *
 * Faithful port of HeroUI v3 `ToolbarRoot`: a horizontal/vertical action bar
 * with arrow-key roving focus. `isAttached` renders the surface-card shell.
 * reka-ui provides the headless behaviour (`loop`, `dir`, `orientation`).
 */
export const ToolbarRoot = defineComponent({
  name: 'ToolbarRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Flow axis — forwarded to reka-ui for roving focus. */
    orientation: { type: String as PropType<TToolbarOrientation>, default: 'horizontal' },
    /** When `true`, wraps controls in a rounded surface card. */
    isAttached: { type: Boolean as PropType<TToolbarVariants['isAttached']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const classes = computed(() => cn(
      toolbarVariants({ orientation: props.orientation, isAttached: props.isAttached }),
      props.class
    ))

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
