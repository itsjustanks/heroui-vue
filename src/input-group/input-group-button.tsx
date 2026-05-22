import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/button'
import type { ButtonVariants } from '@/button'
import { inputGroupButtonVariants, type InputGroupButtonVariants } from './variants'

/**
 * InputGroupButton — a compact button sized for an `InputGroup` addon. Faithful
 * port of `shadcn/input-group/InputGroupButton`.
 *
 * Composes the shared `Button` primitive; `size`/`variant` defaults and the
 * `inputGroupButtonVariants` sizing are preserved verbatim.
 */
export const InputGroupButton = defineComponent({
  name: 'InputGroupButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<InputGroupButtonVariants['size']>, default: 'xs' },
    variant: { type: String as PropType<ButtonVariants['variant']>, default: 'ghost' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Button
        {...attrs}
        data-size={props.size}
        variant={props.variant}
        class={cn(inputGroupButtonVariants({ size: props.size }), props.class)}
      >
        {slots.default?.()}
      </Button>
    )
  }
})

export default InputGroupButton
