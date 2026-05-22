import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { popoverVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverDialog — the inner dialog element (HeroUI `popover__dialog`).
 * Mirrors HeroUI v3 `Popover.Dialog` (`data-slot="popover-dialog"`).
 *
 * `PopoverContent` renders this automatically; use `PopoverDialog` only when
 * composing popover content manually without `PopoverContent`.
 */
export const PopoverDialog = defineComponent({
  name: 'PopoverDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(POPOVER_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="popover-dialog"
        class={cn((ctx?.slots.value ?? popoverVariants()).dialog(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default PopoverDialog
