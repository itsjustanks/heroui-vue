import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { buttonGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BUTTON_GROUP_CONTEXT } from './button-group-context'

/** ButtonGroup.Separator — decorative divider between grouped buttons (HeroUI `button-group__separator`). */
export const ButtonGroupSeparator = defineComponent({
  name: 'ButtonGroupSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(BUTTON_GROUP_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="button-group-separator"
        class={cn((ctx?.slots.value ?? buttonGroupVariants()).separator(), props.class)}
      />
    )
  }
})

export default ButtonGroupSeparator
