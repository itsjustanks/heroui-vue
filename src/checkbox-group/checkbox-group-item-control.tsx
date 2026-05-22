import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupItemControl — the square control box of a CheckboxGroupItem.
 * Faithful port of HeroUI v3 `Checkbox.Control` (`checkbox.css`): a compact
 * `rounded-md` box that fills with the accent colour when its parent item is
 * checked.
 *
 * Reacts to the parent `CheckboxGroupItem`'s reka-ui state via the
 * `group-data-[state=checked]` / `group-data-[state=indeterminate]` selectors
 * (`CheckboxGroupItem` renders `CheckboxRoot` with `class="group …"`). Holds a
 * `CheckboxGroupItemIndicator`.
 */
export const CheckboxGroupItemControl = defineComponent({
  name: 'CheckboxGroupItemControl',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="checkbox-control"
        class={cn(
          'mt-0.5 grid size-4 shrink-0 place-content-center rounded-md border border-primary bg-background text-primary-foreground transition-colors',
          'group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-primary',
          'group-data-[state=indeterminate]:border-transparent group-data-[state=indeterminate]:bg-primary',
          'group-data-[variant=secondary]:bg-muted',
          'group-data-[invalid=true]:border-danger',
          props.class
        )}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default CheckboxGroupItemControl
