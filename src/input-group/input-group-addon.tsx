import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { type InputGroupVariants } from './variants'

/**
 * InputGroupAddon — a prefix/suffix slot inside an `InputGroup`.
 *
 * Emits HeroUI v3 BEM class names from `input-group.css`:
 *   `inline-start` / `block-start` → `input-group__prefix` + `data-slot="input-group-prefix"`
 *   `inline-end`   / `block-end`   → `input-group__suffix` + `data-slot="input-group-suffix"`
 *
 * Clicking the addon (outside a nested button) focuses the group's input.
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

    return () => {
      const isSuffix = props.align === 'inline-end' || props.align === 'block-end'
      return (
        <div
          {...attrs}
          role="group"
          data-slot={isSuffix ? 'input-group-suffix' : 'input-group-prefix'}
          data-align={props.align}
          class={cn(
            isSuffix ? 'input-group__suffix' : 'input-group__prefix',
            props.class
          )}
          onClick={handleInputGroupAddonClick}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default InputGroupAddon
