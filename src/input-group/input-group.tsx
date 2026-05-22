import { computed, defineComponent, inject, provide, ref, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants, type InputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TEXT_FIELD_CONTEXT } from '@/textfield/textfield-context'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupRoot — the group container. Faithful Vue port of HeroUI v3 `InputGroup`.
 *
 * Computes HeroUI's `inputGroupVariants` slot map and provides it to the
 * compound parts (`InputGroup.Input`, `.TextArea`, `.Prefix`, `.Suffix`). When
 * nested inside a `TextField`, it inherits that field's `variant` — matching
 * HeroUI's React behaviour.
 *
 * Clicking anywhere on the group that isn't the input itself focuses the input —
 * matching HeroUI React's `handleClick` behaviour.
 */
export const InputGroupRoot = defineComponent({
  name: 'InputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. Inherited from a parent `TextField` when omitted. */
    variant: { type: String as PropType<InputGroupVariants['variant']>, default: undefined },
    /** Stretch the group to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<boolean>, default: false }
  },
  setup (props, { attrs, slots }) {
    const textField = inject(TEXT_FIELD_CONTEXT, null)
    const styles = computed(() => inputGroupVariants({
      variant: props.variant ?? textField?.variant.value,
      fullWidth: props.fullWidth
    }))
    provide(INPUT_GROUP_CONTEXT, { slots: styles })

    const groupRef = ref<HTMLDivElement | null>(null)

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const input = groupRef.value?.querySelector('input')
      if (input && target !== input && !input.contains(target)) {
        input.focus()
      }
    }

    return () => (
      <div
        {...attrs}
        ref={groupRef}
        role="group"
        data-slot="input-group"
        class={cn(styles.value.base(), props.class)}
        onClick={handleClick}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroupRoot
