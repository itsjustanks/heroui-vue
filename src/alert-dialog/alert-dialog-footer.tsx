import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDialogFooter — the bottom action row: end-aligned cancel/confirm actions. */
export const AlertDialogFooter = defineComponent({
  name: 'AlertDialogFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDialogFooter
