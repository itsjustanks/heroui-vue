import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogDescription as RekaAlertDialogDescription } from 'reka-ui'
import { cn } from '@/lib/utils'

/** AlertDialogDescription — the dialog body text, wired as the reka-ui alert-dialog description. */
export const AlertDialogDescription = defineComponent({
  name: 'AlertDialogDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogDescription {...attrs} class={cn('text-sm text-muted-foreground', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogDescription>
    )
  }
})

export default AlertDialogDescription
