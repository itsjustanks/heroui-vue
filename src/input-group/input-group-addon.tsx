import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { inputGroupAddonVariants, type InputGroupVariants } from './variants'

/**
 * InputGroupAddon — a prefix/suffix slot inside an `InputGroup`. Faithful port
 * of `shadcn/input-group/InputGroupAddon`.
 *
 * Clicking the addon (outside a nested button) focuses the group's input —
 * behaviour ported verbatim.
 */
export const InputGroupAddon = defineComponent({
  name: 'InputGroupAddon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<InputGroupVariants['align']>, default: 'inline-start' }
  },
  setup (props, { attrs, slots }) {
    function handleInputGroupAddonClick (e: MouseEvent) {
      const currentTarget = e.currentTarget as HTMLElement | null
      const target = e.target as HTMLElement | null
      if (target && target.closest('button')) {
        return
      }
      if (currentTarget && currentTarget.parentElement) {
        currentTarget.parentElement.querySelector('input')?.focus()
      }
    }

    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="input-group-addon"
        data-align={props.align}
        class={cn(inputGroupAddonVariants({ align: props.align }), props.class)}
        onClick={handleInputGroupAddonClick}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroupAddon
