import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Circle as IconCircle } from 'lucide-vue-next'
import { RadioGroupIndicator, RadioGroupItem as RekaRadioGroupItem } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RadioGroupItem — HeroUI-Vue primitive over reka-ui `RadioGroupItem`.
 *
 * HeroUI `radio.css`: a circular control with a centered dot indicator, smooth
 * state transitions. Tokens adapted to the repo (`bg-background`, `border-primary`,
 * `text-primary`, `ring-ring`). All `RadioGroupItem` props (`value`, `disabled`,
 * `required`, `id`, …) forward through `{...attrs}` — only `class` is declared so
 * it can be merged via `cn()`.
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
        class={cn(
          'peer aspect-square h-4 w-4 rounded-full border border-primary bg-background text-primary ring-offset-background transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )}
      >
        <RadioGroupIndicator class="flex items-center justify-center">
          <IconCircle class="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupIndicator>
      </RekaRadioGroupItem>
    )
  }
})

export default RadioGroupItem
