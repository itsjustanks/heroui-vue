import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Check as IconCheck } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

type TCheckboxVariant = 'primary' | 'secondary'

/**
 * Checkbox — HeroUI-Vue primitive over reka-ui `CheckboxRoot`.
 *
 * HeroUI v3 BEM: `checkbox` root + `checkbox--{variant}` modifier.
 * The control square and indicator use `checkbox__control` / `checkbox__indicator`.
 * All `CheckboxRoot` props/emits forward through `{...attrs}`.
 */
export const Checkbox = defineComponent({
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TCheckboxVariant>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <CheckboxRoot
        {...attrs}
        class={cn('checkbox', `checkbox--${props.variant}`, props.class)}
      >
        <span class="checkbox__control">
          <CheckboxIndicator class="checkbox__indicator">
            {slots.default
              ? slots.default()
              : <IconCheck class="h-4 w-4" />}
          </CheckboxIndicator>
        </span>
      </CheckboxRoot>
    )
  }
})

export default Checkbox
