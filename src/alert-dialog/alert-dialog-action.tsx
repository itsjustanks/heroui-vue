import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogAction as RekaAlertDialogAction } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AlertDialogAction — the confirm button.
 * HeroUI BEM: `button button--primary` (danger-soft for destructive dialogs).
 */
export const AlertDialogAction = defineComponent({
  name: 'AlertDialogAction',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogAction {...attrs} class={cn('button button--primary', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogAction>
    )
  }
})

export default AlertDialogAction
