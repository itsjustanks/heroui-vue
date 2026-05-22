import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * ChipLabel — the text span inside a Chip. HeroUI v3 `chip__label` slot.
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
    return () => (
      <span {...attrs} data-slot="chip-label" class={cn('chip__label', props.class)}>
        {slots.default?.()}
      </span>
    )
  }
})

export default ChipLabel
