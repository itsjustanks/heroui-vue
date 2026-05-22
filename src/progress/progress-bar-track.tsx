import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressBarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_BAR_CONTEXT } from './progress-bar-context'

/**
 * ProgressBarTrack — the unfilled background rail (HeroUI `progress-bar__track`).
 *
 * Faithful Vue port of HeroUI v3 `ProgressBarTrack`. Wrap `ProgressBar.Fill`
 * inside this element.
 */
export const ProgressBarTrack = defineComponent({
  name: 'ProgressBarTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PROGRESS_BAR_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="progress-bar-track"
        class={cn((ctx?.slots.value ?? progressBarVariants()).track(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ProgressBarTrack
