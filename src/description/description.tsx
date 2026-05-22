import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { descriptionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * Description — supporting helper text. Faithful Vue port of HeroUI v3
 * `Description`. Pair it with a `Label` inside fields, `CheckboxGroup`,
 * `Checkbox.Content`, etc. — exactly as HeroUI does.
 */
export const DescriptionRoot = defineComponent({
  name: 'Description',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <p
        {...attrs}
        data-slot="description"
        // HeroUI's Text (RAC) renders with slot="description" for RAC context association.
        // In Vue we emit the same data-slot for CSS targeting.
        class={cn(descriptionVariants(), props.class)}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default DescriptionRoot
