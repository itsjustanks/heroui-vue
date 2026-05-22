import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogDescription as RekaAlertDialogDescription } from 'reka-ui'
import { cn } from '@/lib/utils'

/** AlertDialogDescription — HeroUI BEM: `alert-dialog__body`. Muted body text. */
export const AlertDialogDescription = defineComponent({
  name: 'AlertDialogDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogDescription {...attrs} class={cn('alert-dialog__body', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogDescription>
    )
  }
})

export default AlertDialogDescription
