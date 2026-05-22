import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { alertVariants, type TAlertVariants } from './alert-variants'

/**
 * Alert — HeroUI-Vue primitive. A `role=alert` callout surface (HeroUI v3
 * `alert.css`): `rounded-xl border`, semantic-color variants. Faithful port of
 * `shadcn/alert`'s `Alert` — only the radius/token styling is HeroUI-restyled.
 */
export const Alert = defineComponent({
  name: 'Alert',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TAlertVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} role="alert" class={cn(alertVariants({ variant: props.variant }), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Alert
