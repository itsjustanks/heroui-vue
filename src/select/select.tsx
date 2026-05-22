import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

type TSelectVariant = 'primary' | 'secondary'

/**
 * Select — root of the HeroUI-Vue select (primitive library port).
 *
 * Wraps reka-ui `SelectRoot` in a `select` BEM container div, emitting HeroUI v3
 * BEM class names from `select.css`. Forwards all reka-ui props/emits via `{...attrs}`.
 */
export const Select = defineComponent({
  // `name` avoids the HTML-reserved `select`; the exported identifier stays `Select`.
  name: 'SelectRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TSelectVariant>, default: 'primary' },
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div class={cn(
        'select',
        `select--${props.variant}`,
        props.fullWidth && 'select--full-width',
        props.class
      )}>
        <SelectRoot {...attrs}>{slots.default?.()}</SelectRoot>
      </div>
    )
  }
})

export default Select
