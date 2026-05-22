import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressBarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_BAR_CONTEXT } from './progress-bar-context'

/**
 * ProgressBarOutput — the textual value display (HeroUI `progress-bar__output`).
 *
 * Renders the current percentage text by default. Faithful Vue port of
 * HeroUI v3 `ProgressBarOutput`. Children override the default value text.
 */
export const ProgressBarOutput = defineComponent({
  name: 'ProgressBarOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PROGRESS_BAR_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="progress-bar-output"
        class={cn((ctx?.slots.value ?? progressBarVariants()).output(), props.class)}
      >
        {slots.default?.() ?? ctx?.valueText.value}
      </span>
    )
  }
})

export default ProgressBarOutput
