import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants, type InputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupRoot — the group container. Faithful Vue port of HeroUI v3 `InputGroup`.
 *
 * Computes HeroUI's `inputGroupVariants` slot map and provides it to the
 * compound parts (`InputGroup.Input`, `.TextArea`, `.Prefix`, `.Suffix`),
 * so every part is styled from `@heroui/styles` — never a hand-written class.
 */
export const InputGroupRoot = defineComponent({
  name: 'InputGroup',
  inheritAttrs: false,
  props: {
    class:     { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant:   { type: String as PropType<InputGroupVariants['variant']>, default: 'primary' },
    /** Stretch the group to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<boolean>, default: false }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => inputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }))
    provide(INPUT_GROUP_CONTEXT, { slots: styles })

    return () => (
      <div
        {...attrs}
        data-slot="input-group"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroupRoot
