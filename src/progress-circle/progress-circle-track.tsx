import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressCircleVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_CIRCLE_CONTEXT } from './progress-circle-context'
import { CENTER } from './constants'

/**
 * ProgressCircleTrack — the `<svg>` canvas of the ring (HeroUI `progress-circle__track`).
 *
 * Faithful Vue port of HeroUI v3 `ProgressCircleTrack`. The CSS sizes the SVG
 * via the parent `progress-circle--{size}` modifier on the root.
 */
export const ProgressCircleTrack = defineComponent({
  name: 'ProgressCircleTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PROGRESS_CIRCLE_CONTEXT, null)
    return () => (
      <svg
        {...attrs}
        fill="none"
        viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
        data-slot="progress-circle-track"
        class={cn((ctx?.slots.value ?? progressCircleVariants()).track(), props.class)}
      >
        {slots.default?.()}
      </svg>
    )
  }
})

export default ProgressCircleTrack
