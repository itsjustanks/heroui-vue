import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogCancel as RekaAlertDialogCancel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AlertDialogCancel — the dismiss button.
 * HeroUI BEM: `button button--secondary`.
 */
export const AlertDialogCancel = defineComponent({
  name: 'AlertDialogCancel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogCancel {...attrs} class={cn('button button--secondary', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogCancel>
    )
  }
})

export default AlertDialogCancel
