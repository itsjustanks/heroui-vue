import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { chipVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHIP_CONTEXT } from './chip-context'

/**
 * Chip.Label — the text span inside a Chip (HeroUI `chip__label`).
 *
 * `ChipRoot` auto-wraps a plain string/number child in this; render it
 * explicitly only when composing richer chip content (icon + label).
 */
export const ChipLabel = defineComponent({
  name: 'ChipLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHIP_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="chip-label"
        class={cn((ctx?.slots.value ?? chipVariants()).label(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default ChipLabel
