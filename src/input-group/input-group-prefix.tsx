import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupPrefix — the leading decorative/interactive slot (HeroUI `input-group__prefix`).
 * Faithful Vue port of HeroUI v3 `InputGroupPrefix`.
 */
export const InputGroupPrefix = defineComponent({
  name: 'InputGroupPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(INPUT_GROUP_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="input-group-prefix"
        class={cn((ctx?.slots.value ?? inputGroupVariants()).prefix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroupPrefix
