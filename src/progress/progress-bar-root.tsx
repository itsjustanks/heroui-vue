import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { ProgressRoot, type ProgressRootProps } from 'reka-ui'
import { progressBarVariants, type ProgressBarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_BAR_CONTEXT } from './progress-bar-context'

/**
 * ProgressBarRoot — the progress bar container. Faithful Vue port of HeroUI v3 `ProgressBarRoot`.
 *
 * Computes HeroUI's `progressBarVariants` slot map and provides it (plus reactive
 * progress state) to compound parts (`ProgressBar.Output`, `.Track`, `.Fill`).
 * Uses reka-ui `ProgressRoot` for the `progressbar` role and
 * `aria-valuenow`/`aria-valuemax` accessibility attributes.
 */
export const ProgressBarRoot = defineComponent({
  name: 'ProgressBarRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Current value. `null` → indeterminate. */
    modelValue: { type: [Number, null] as PropType<ProgressRootProps['modelValue']>, default: null },
    /** Minimum value. @default 0 */
    minValue: { type: Number, default: 0 },
    /** Maximum value. @default 100 */
    maxValue: { type: Number as PropType<ProgressRootProps['max']>, default: 100 },
    /** Color variant. @default 'accent' */
    color: { type: String as PropType<ProgressBarVariants['color']>, default: 'accent' },
    /** Size variant. @default 'md' */
    size: { type: String as PropType<ProgressBarVariants['size']>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => progressBarVariants({ color: props.color, size: props.size }))

    const isIndeterminate = computed(() => props.modelValue == null)

    const percentage = computed<number | undefined>(() => {
      if (isIndeterminate.value) return undefined
      const span = (props.maxValue ?? 100) - (props.minValue ?? 0)
      if (span <= 0) return 0
      return Math.min(100, Math.max(0, (((props.modelValue as number) - (props.minValue ?? 0)) / span) * 100))
    })

    const valueText = computed(() =>
      isIndeterminate.value ? '' : `${Math.round(percentage.value ?? 0)}%`
    )

    provide(PROGRESS_BAR_CONTEXT, { slots: styles, percentage, isIndeterminate, valueText })

    return () => (
      <ProgressRoot
        {...attrs}
        modelValue={isIndeterminate.value ? null : (percentage.value ?? 0)}
        max={props.maxValue}
        data-slot="progress-bar"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </ProgressRoot>
    )
  }
})

export default ProgressBarRoot
