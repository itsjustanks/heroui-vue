import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Label } from '@/label'

/**
 * FieldLabel — the label for a `Field`. Faithful port of
 * `shadcn/field/FieldLabel`.
 *
 * Wraps the shared `Label` primitive (no HeroUI-Vue label port yet — Phase 2)
 * and adds the field-specific `has-[…]` selectors for selectable card labels.
 */
export const FieldLabel = defineComponent({
  name: 'FieldLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Label
        {...attrs}
        data-slot="field-label"
        class={cn(
          'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
          'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&_>[data-slot=field]]:p-4',
          'has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 dark:has-[[data-state=checked]]:bg-primary/10',
          props.class
        )}
      >
        {slots.default?.()}
      </Label>
    )
  }
})

export default FieldLabel
