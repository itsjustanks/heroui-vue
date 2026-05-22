import { defineComponent, type PropType } from 'vue'
import { Toaster as SonnerBase, toast as sonnerToast, type ToasterProps } from 'vue-sonner'
import { toastVariants, type ToastVariants } from '@heroui/styles'
const Sonner: any = SonnerBase

/**
 * ToastProvider — HeroUI v3 `Toast.Provider` region, implemented via `vue-sonner`.
 *
 * Maps to HeroUI `toast` BEM class family via `toastVariants`. `toastOptions.classes`
 * wires vue-sonner's internal slot names to HeroUI's BEM equivalents:
 *
 *   vue-sonner slot   → HeroUI BEM slot (toastVariants)
 *   ─────────────────────────────────────────────────────
 *   toast             → toast                 (data-slot="toast")
 *   icon              → toast__indicator      (data-slot="toast-indicator")
 *   content           → toast__content        (data-slot="toast-content")
 *   title             → toast__title          (data-slot="toast-title")
 *   description       → toast__description    (data-slot="toast-description")
 *   closeButton       → toast__close-button   (data-slot="toast-close")
 *   actionButton      → toast__action         (data-slot="toast-action-button")
 *   cancelButton      → toast__action
 *
 * The region root gets `toast-region` (data-slot="toast-region") via `toastVariants`.
 *
 * ⚠️  ARCHITECTURAL NOTE
 * HeroUI React's `Toast` is a fully compound BEM component built on React Aria's
 * `UNSTABLE_Toast` / `UNSTABLE_ToastRegion` primitives. `vue-sonner` wraps
 * `sonner` and has no reka-ui / React Aria equivalent, so a 1:1 port of the
 * `Toast.Root`, `Toast.Content`, `Toast.Indicator`, `Toast.Title`,
 * `Toast.Description`, `Toast.ActionButton`, `Toast.CloseButton` compound parts
 * is not achievable without replacing `vue-sonner` entirely. The BEM class wiring
 * below ensures HeroUI's styles apply correctly to vue-sonner's DOM output.
 *
 * `placement` maps to HeroUI's `ToastVariants['placement']`; the value is
 * forwarded to both `toastVariants` (for the region BEM modifier) and to
 * vue-sonner's `position` prop (which uses a compatible format).
 */
export const ToastProvider = defineComponent({
  name: 'ToastProvider',
  inheritAttrs: false,
  props: {
    invert: { type: Boolean, required: false, default: undefined },
    theme: { type: String as PropType<ToasterProps['theme']>, required: false, default: undefined },
    /** Maps to HeroUI `ToastVariants['placement']` and vue-sonner `position`. */
    placement: { type: String as PropType<ToastVariants['placement']>, required: false, default: 'bottom' },
    hotkey: { type: Array as PropType<string[]>, required: false, default: undefined },
    richColors: { type: Boolean, required: false, default: undefined },
    expand: { type: Boolean, required: false, default: undefined },
    duration: { type: Number, required: false, default: undefined },
    gap: { type: Number, required: false, default: undefined },
    maxVisibleToasts: { type: Number, required: false, default: undefined },
    queue: { type: Object as PropType<unknown>, required: false, default: undefined },
    scaleFactor: { type: Number, required: false, default: undefined },
    visibleToasts: { type: Number, required: false, default: undefined },
    width: { type: Number, required: false, default: undefined },
    closeButton: { type: Boolean, required: false, default: undefined },
    toastOptions: { type: Object as PropType<Record<string, any>>, required: false, default: undefined },
    class: { type: String, required: false, default: undefined },
    style: { type: null, required: false, default: undefined },
    offset: { type: [String, Number], required: false, default: undefined },
    dir: { type: String as PropType<ToasterProps['dir']>, required: false, default: undefined },
    icons: { type: Object as PropType<Record<string, any>>, required: false, default: undefined },
    containerAriaLabel: { type: String, required: false, default: undefined },
    pauseWhenPageIsHidden: { type: Boolean, required: false, default: undefined },
    cn: { type: Function as PropType<ToasterProps['cn']>, required: false, default: undefined }
  },
  setup (props) {
    return () => {
      const slots = toastVariants({ placement: props.placement })
      // Map HeroUI placement ("bottom start") to sonner position ("bottom-left").
      const sonnerPosition = props.placement
        ? (props.placement as string)
            .replace('start', 'left')
            .replace('end', 'right')
            .replace(' ', '-') as ToasterProps['position']
        : undefined

      return (
        <Sonner
          {...props}
          position={sonnerPosition ?? props.placement as any}
          class={[slots.region(), props.class]}
          data-slot="toast-region"
          toastOptions={{
            ...props.toastOptions,
            classes: {
              toast: slots.toast(),
              icon: slots.indicator(),
              content: slots.content(),
              title: slots.title(),
              description: slots.description(),
              closeButton: slots.close(),
              actionButton: slots.action(),
              cancelButton: slots.action(),
              ...props.toastOptions?.classes
            }
          }}
        />
      )
    }
  }
})

export default ToastProvider
