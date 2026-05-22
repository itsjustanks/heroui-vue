import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

type AlertDialogStatus = 'default' | 'accent' | 'success' | 'warning' | 'danger'

/**
 * AlertDialogIcon — Vue port of HeroUI v3 `AlertDialogIcon`.
 *
 * Computes its own `alertDialogVariants({status})` — the status variant
 * changes the icon background colour. Falls back to a suitable SVG icon
 * when no child is slotted in.
 */
export const AlertDialogIcon = defineComponent({
  name: 'AlertDialogIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /**
     * Semantic status — controls background colour and default icon.
     * @default 'danger'
     */
    status: { type: String as PropType<AlertDialogStatus>, default: 'danger' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => alertDialogVariants({ status: props.status }))

    return () => {
      const iconClass = styles.value.icon({ className: props.class as string | undefined })

      return (
        <div
          {...attrs}
          data-slot="alert-dialog-icon"
          class={cn(iconClass)}
        >
          {slots.default?.() ?? <DefaultIcon status={props.status} />}
        </div>
      )
    }
  }
})

/** Inline fallback icons — mirrors the set from HeroUI React source. */
const DefaultIcon = ({ status }: { status: AlertDialogStatus }) => {
  switch (status) {
    case 'success':
      return (
        <svg data-slot="alert-dialog-default-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.78-1.97a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L4.22 9.09a.75.75 0 0 1 1.06-1.06l1.72 1.72 3.72-3.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
        </svg>
      )
    case 'warning':
      return (
        <svg data-slot="alert-dialog-default-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-3.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.75m0 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
        </svg>
      )
    case 'danger':
      return (
        <svg data-slot="alert-dialog-default-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m4.97-2.97a.75.75 0 0 1 1.06 0L8 7.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L9.06 9l1.97 1.97a.75.75 0 0 1-1.06 1.06L8 10.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L6.94 9 4.97 7.03a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
        </svg>
      )
    default:
      // default + accent → info icon
      return (
        <svg data-slot="alert-dialog-default-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-3.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.75m0 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
        </svg>
      )
  }
}

export default AlertDialogIcon
