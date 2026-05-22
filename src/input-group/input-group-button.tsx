import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/button'
import type { ButtonVariants } from '@/button'
import { type InputGroupButtonVariants } from './variants'

/**
 * InputGroupButton — a compact button inside an `InputGroup` addon.
 *
 * No direct HeroUI BEM class — styled by the surrounding prefix/suffix context.
 * `data-slot="input-group-button"` is kept for structural selection.
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
        data-slot="input-group-button"
        data-size={props.size}
        variant={props.variant}
        class={cn(props.class)}
      >
        {slots.default?.()}
      </Button>
    )
  }
})

export default InputGroupButton
