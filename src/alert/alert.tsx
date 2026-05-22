import { computed, defineComponent, provide, toRef, type HTMLAttributes, type PropType } from 'vue'
import { alertVariants, type AlertVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_CONTEXT } from './alert-context'

/**
 * Alert — the status message container. Faithful Vue port of HeroUI v3 `Alert`.
 *
 * The root computes HeroUI's `alertVariants` slot map and provides it (plus the
 * reactive `status`) to compound parts, so every part is styled from
 * `@heroui/styles` — never a hand-written class string.
 *
 * Compound API: `Alert.Indicator`, `Alert.Content`, `Alert.Title`, `Alert.Description`.
 */
export const AlertRoot = defineComponent({
  name: 'Alert',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Alert status — drives color and the default indicator icon. @default 'default' */
    status: { type: String as PropType<AlertVariants['status']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => alertVariants({ status: props.status }))
    provide(ALERT_CONTEXT, { slots: styles, status: toRef(props, 'status') })

    return () => (
      <div {...attrs} data-slot="alert-root" class={cn(styles.value.base(), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertRoot
