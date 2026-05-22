import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RadioGroupIndicator, RadioGroupItem as RekaRadioGroupItem } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RadioGroupItem — HeroUI-Vue primitive over reka-ui `RadioGroupItem`.
 *
 * Emits HeroUI v3 BEM class names from `radio.css`:
 *   - base element: `radio` (with `data-slot="radio"` for radio-group orientation CSS)
 *   - control circle: `radio__control`
 *   - indicator dot: `radio__indicator`
 *
 * All `RadioGroupItem` props (`value`, `disabled`, `required`, `id`, …) forward
 * through `{...attrs}` — only `class` is declared so it can be merged via `cn()`.
 */
export const RadioGroupItem = defineComponent({
  name: 'RadioGroupItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaRadioGroupItem
        {...attrs}
        data-slot="radio"
        class={cn('radio', props.class)}
      >
        <div class="radio__control">
          <RadioGroupIndicator class="radio__indicator" />
        </div>
      </RekaRadioGroupItem>
    )
  }
})

export default RadioGroupItem
