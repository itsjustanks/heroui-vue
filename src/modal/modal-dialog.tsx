import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { cn } from '@/lib/utils'

type TModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full'

const SIZE_CLASS: Record<TModalSize, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  cover: 'h-full max-w-full',
  full: 'h-full max-w-full rounded-none border-0 shadow-none'
}

/**
 * ModalDialog — the content box (HeroUI `modal__dialog`). This is the focus-
 * trapped `role=dialog` element (reka-ui `DialogContent`), styled as the modal
 * surface: `rounded-2xl`, `p-6`, `shadow-lg`. `size`: xs | sm | md | lg | cover | full.
 */
export const ModalDialog = defineComponent({
  name: 'ModalDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<TModalSize>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDialogContent
        {...attrs}
        class={cn(
          'pointer-events-auto relative flex w-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 text-foreground shadow-lg outline-none',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          SIZE_CLASS[props.size],
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDialogContent>
    )
  }
})

export default ModalDialog
