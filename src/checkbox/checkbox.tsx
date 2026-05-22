import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Check as IconCheck } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Checkbox — HeroUI-Vue primitive over reka-ui `CheckboxRoot`.
 *
 * HeroUI `checkbox.css`: a compact square control with `rounded-md` corners,
 * smooth state transitions, an accent-filled selected state. Tokens adapted to
 * the repo (`bg-background`, `border-primary`, `bg-primary`/`text-primary-foreground`
 * for checked, `ring-ring`); reka-ui `data-[state=checked]` selectors.
 *
 * All `CheckboxRoot` props/emits (`modelValue`, `onUpdate:modelValue`, `disabled`,
 * `required`, `value`, `name`, …) forward through `{...attrs}` — only `class`
 * is declared so it can be merged via `cn()`.
 */
export const Checkbox = defineComponent({
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <CheckboxRoot
        {...attrs}
        class={cn(
          'peer grid h-4 w-4 shrink-0 place-content-center rounded-md border border-primary bg-background ring-offset-background transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:border-transparent data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          'data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
          props.class
        )}
      >
        <CheckboxIndicator class="grid place-content-center text-current">
          {slots.default
            ? slots.default()
            : <IconCheck class="h-4 w-4" />}
        </CheckboxIndicator>
      </CheckboxRoot>
    )
  }
})

export default Checkbox
