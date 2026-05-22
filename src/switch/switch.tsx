import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Switch — HeroUI v3 `switch` ported to Vue over reka-ui `SwitchRoot` / `SwitchThumb`.
 *
 * HeroUI `switch.css`: pill-shaped track (`rounded-full`), thumb that travels via
 * `data-[state=checked]`. Tokens adapted to the repo — `bg-primary` (checked) /
 * `bg-input` (unchecked) for the track, `bg-background` for the thumb; reka-ui
 * `data-[state]` selectors in place of React-Aria attributes.
 *
 * reka-ui 2.x: bind with `v-model`, or `model-value` + `onUpdate:modelValue` for
 * custom handlers — never `v-model:checked`. All `SwitchRoot` props/emits forward
 * via `{...attrs}`.
 */
export const Switch = defineComponent({
  // `name` avoids the HTML-reserved `Switch` (SVG element) — the export is still `Switch`.
  name: 'HeroSwitch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <SwitchRoot
        {...attrs}
        class={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
          props.class
        )}
      >
        <SwitchThumb
          class={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
            'data-[state=checked]:translate-x-5'
          )}
        >
          {slots.thumb?.()}
        </SwitchThumb>
      </SwitchRoot>
    )
  }
})

export default Switch
