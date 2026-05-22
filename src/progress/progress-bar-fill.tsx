import { computed, defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressBarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_BAR_CONTEXT } from './progress-bar-context'

/**
 * ProgressBarFill — the filled progress indicator (HeroUI `progress-bar__fill`).
 *
 * Faithful Vue port of HeroUI v3 `ProgressBarFill`. Width is driven by the
 * percentage from context; indeterminate bars have no fixed width (CSS handles
 * the animation). Place inside `ProgressBar.Track`.
 */
export const ProgressBarFill = defineComponent({
  name: 'ProgressBarFill',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(PROGRESS_BAR_CONTEXT, null)
    const style = computed(() => ({
      width: ctx?.isIndeterminate.value ? undefined : `${ctx?.percentage.value ?? 0}%`
    }))

    return () => (
      <div
        {...attrs}
        data-slot="progress-bar-fill"
        style={style.value}
        class={cn((ctx?.slots.value ?? progressBarVariants()).fill(), props.class)}
      />
    )
  }
})

export default ProgressBarFill
