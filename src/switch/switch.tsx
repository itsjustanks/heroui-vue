import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Switch — HeroUI v3 `switch` ported to Vue over reka-ui `SwitchRoot` / `SwitchThumb`.
 *
 * Maps to HeroUI `switch` BEM classes. `size` prop selects `switch--sm/md/lg`.
 * reka-ui sets `data-[state=checked]` / `data-[state=unchecked]` on `SwitchRoot`;
 * HeroUI CSS targets `[aria-checked]` / `[data-selected]` — both are native
 * pseudo-class / attribute selectors that work with reka-ui's real DOM output.
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
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md'
    }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <SwitchRoot
        {...attrs}
        class={cn(
          'switch',
          props.size === 'sm' && 'switch--sm',
          props.size === 'lg' && 'switch--lg',
          props.class
        )}
      >
        <span class="switch__control">
          <SwitchThumb class="switch__thumb">
            {slots.thumb?.()}
          </SwitchThumb>
        </span>
        {slots.default && (
          <span class="switch__content">
            {slots.default?.()}
          </span>
        )}
      </SwitchRoot>
    )
  }
})

export default Switch
