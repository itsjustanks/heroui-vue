import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DangerIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/icons'
import { ALERT_CONTEXT } from './alert-context'

/**
 * Alert.Indicator — the status icon container (HeroUI `alert__indicator`).
 *
 * When no children are provided, renders a default icon matched to the
 * parent `Alert`'s `status` (sourced from context). Pass a custom icon as
 * children to override.
 *
 * The default icon carries `data-slot="alert-default-icon"` as required by
 * HeroUI's CSS for sizing.
 */
export const AlertIndicator = defineComponent({
  name: 'AlertIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_CONTEXT, null)

    function renderDefaultIcon () {
      switch (ctx?.status.value) {
        case 'accent':
          return <InfoIcon data-slot="alert-default-icon" />
        case 'success':
          return <SuccessIcon data-slot="alert-default-icon" />
        case 'warning':
          return <WarningIcon data-slot="alert-default-icon" />
        case 'danger':
          return <DangerIcon data-slot="alert-default-icon" />
        default:
          return <InfoIcon data-slot="alert-default-icon" />
      }
    }

    return () => (
      <div
        {...attrs}
        data-slot="alert-indicator"
        class={cn((ctx?.slots.value ?? alertVariants()).indicator(), props.class)}
      >
        {slots.default ? slots.default() : renderDefaultIcon()}
      </div>
    )
  }
})

export default AlertIndicator
