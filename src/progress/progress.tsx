import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ProgressIndicator, ProgressRoot, type ProgressRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

type TProgressColor = 'accent' | 'danger' | 'default' | 'success' | 'warning'
type TProgressSize = 'sm' | 'md' | 'lg'

/**
 * Progress — HeroUI-Vue progress bar over reka-ui `ProgressRoot` /
 * `ProgressIndicator`. Emits HeroUI v3 BEM class names from `progress-bar.css`.
 */
export const Progress = defineComponent({
  name: 'ProgressBar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    indicatorClass: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    modelValue: { type: [Number, null] as PropType<ProgressRootProps['modelValue']>, default: 0 },
    color: { type: String as PropType<TProgressColor>, default: 'accent' },
    size: { type: String as PropType<TProgressSize>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ProgressRoot
        {...attrs}
        modelValue={props.modelValue}
        class={cn(
          'progress-bar',
          `progress-bar--${props.color}`,
          `progress-bar--${props.size}`,
          props.class
        )}
      >
        <div class={cn('progress-bar__track')}>
          <div
            class={cn('progress-bar__fill', props.indicatorClass)}
            style={`width: ${props.modelValue ?? 0}%;`}
          />
        </div>
        {slots.default?.()}
      </ProgressRoot>
    )
  }
})

export default Progress
