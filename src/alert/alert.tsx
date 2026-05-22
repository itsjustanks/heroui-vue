import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { alertStatusClass, type TAlertStatus } from './alert-variants'

/**
 * Alert — HeroUI-Vue primitive.
 *
 * HeroUI BEM: `alert` base + `alert--{status}` modifier. The `alert__indicator`,
 * `alert__content`, `alert__title`, and `alert__description` slots are rendered
 * by their own sub-components. `role=alert` for a11y.
 */
export const Alert = defineComponent({
  name: 'Alert',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    status: { type: String as PropType<TAlertStatus>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} role="alert" class={cn('alert', alertStatusClass(props.status), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Alert
