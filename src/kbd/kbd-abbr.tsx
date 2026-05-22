import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { kbdVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { KBD_CONTEXT } from './kbd-context'
import { type KbdKey, kbdKeysLabelMap, kbdKeysMap } from './kbd.constants'

/**
 * KbdAbbr — `<abbr>` for a named key symbol (HeroUI `kbd__abbr`).
 *
 * Faithful Vue port of HeroUI v3 `KbdAbbr`: renders the symbol from
 * `kbdKeysMap` with the full label as `title` for accessibility.
 */
export const KbdAbbr = defineComponent({
  name: 'KbdAbbr',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The keyboard key to display — maps to symbol + accessible label. */
    keyValue: { type: String as PropType<KbdKey>, required: true }
  },
  setup (props, { attrs }) {
    const ctx = inject(KBD_CONTEXT, null)
    return () => (
      <abbr
        {...attrs}
        data-slot="kbd-abbr"
        class={cn((ctx?.slots.value ?? kbdVariants()).abbr(), props.class)}
        title={kbdKeysLabelMap[props.keyValue]}
      >
        {kbdKeysMap[props.keyValue]}
      </abbr>
    )
  }
})

export default KbdAbbr
