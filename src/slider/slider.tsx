import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Slider — HeroUI-Vue primitive over reka-ui `SliderRoot`.
 *
 * HeroUI `slider.css`: `rounded-xl` track filled with `bg-accent`, grab-cursor
 * thumb. Adapted to the repo — `rounded-full` track/thumb (HeroUI radii intent),
 * `bg-secondary` track / `bg-primary` fill, `ring-ring` focus ring. One thumb is
 * rendered per `modelValue` entry; all other props/emits forward via attrs.
 * Faithful HeroUI v3 port.
 */
export const Slider = defineComponent({
  name: 'Slider',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    modelValue: { type: Array as PropType<number[]>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <SliderRoot
        {...attrs}
        modelValue={props.modelValue}
        class={cn(
          'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col',
          props.class
        )}
      >
        <SliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary data-[orientation=vertical]:w-2">
          <SliderRange class="absolute h-full bg-primary data-[orientation=vertical]:w-full" />
        </SliderTrack>
        {(props.modelValue ?? []).map((_, key) => (
          <SliderThumb
            key={key}
            class="block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderRoot>
    )
  }
})

export default Slider
