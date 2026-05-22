import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { kbdVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { KBD_CONTEXT } from './kbd-context'

/**
 * KbdContent — `<span>` for freeform text inside a Kbd (HeroUI `kbd__content`).
 *
 * Faithful Vue port of HeroUI v3 `KbdContent`.
 */
export const KbdContent = defineComponent({
  name: 'KbdContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(KBD_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="kbd-content"
        class={cn((ctx?.slots.value ?? kbdVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default KbdContent
