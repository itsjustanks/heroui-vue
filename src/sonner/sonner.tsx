import { defineComponent, type PropType } from 'vue'
import { Toaster as SonnerBase, type ToasterProps } from 'vue-sonner'
const Sonner: any = SonnerBase

/**
 * Toaster — HeroUI-Vue toast region (maps to HeroUI `toast` family).
 *
 * Wraps `vue-sonner` `<Toaster>` and applies HeroUI `toast` BEM class names via
 * `toastOptions.classes`. The region root gets `toast-region`; individual toasts
 * get `toast toast--default` (variant classes available: toast--accent,
 * toast--danger, toast--success, toast--warning). Content slots map to
 * `toast__title`, `toast__description`, `toast__action`, `toast__close-button`.
 */
export const Toaster = defineComponent({
  name: 'SonnerToaster',
  inheritAttrs: false,
  props: {
    invert: { type: Boolean, required: false, default: undefined },
    theme: { type: String as PropType<ToasterProps['theme']>, required: false, default: undefined },
    position: { type: String as PropType<ToasterProps['position']>, required: false, default: undefined },
    hotkey: { type: Array as PropType<string[]>, required: false, default: undefined },
    richColors: { type: Boolean, required: false, default: undefined },
    expand: { type: Boolean, required: false, default: undefined },
    duration: { type: Number, required: false, default: undefined },
    gap: { type: Number, required: false, default: undefined },
    visibleToasts: { type: Number, required: false, default: undefined },
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
    return () => (
      <Sonner
        {...props}
        class={['toast-region', props.class]}
        toast-options={{
          classes: {
            toast: 'toast toast--default',
            title: 'toast__title',
            description: 'toast__description',
            actionButton: 'toast__action',
            cancelButton: 'toast__action',
            closeButton: 'toast__close-button'
          }
        }}
      />
    )
  }
})

export default Toaster
