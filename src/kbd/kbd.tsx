import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { kbdVariants, type KbdVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { KBD_CONTEXT } from './kbd-context'

/**
 * KbdRoot — the keyboard key container. Faithful Vue port of HeroUI v3 `KbdRoot`.
 *
 * Computes the `kbdVariants` slot map and provides it to `Kbd.Abbr` and
 * `Kbd.Content` so every part is styled from `@heroui/styles`.
 */
export const KbdRoot = defineComponent({
  name: 'KbdRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `kbd--{variant}`. @default 'default' */
    variant: { type: String as PropType<KbdVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => kbdVariants({ variant: props.variant }))
    provide(KBD_CONTEXT, { slots: styles })

    return () => (
      <kbd {...attrs} data-slot="kbd" class={cn(styles.value.base(), props.class)}>
        {slots.default?.()}
      </kbd>
    )
  }
})

export default KbdRoot
