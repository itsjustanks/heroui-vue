import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_GROUP_CONTEXT } from './input-group-context'

/**
 * InputGroupSuffix — the trailing decorative/interactive slot (HeroUI `input-group__suffix`).
 * Faithful Vue port of HeroUI v3 `InputGroupSuffix`.
 */
export const InputGroupSuffix = defineComponent({
  name: 'InputGroupSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(INPUT_GROUP_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="input-group-suffix"
        class={cn((ctx?.slots.value ?? inputGroupVariants()).suffix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroupSuffix
