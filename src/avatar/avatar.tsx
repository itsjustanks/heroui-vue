import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { AvatarRoot as RekaAvatarRoot } from 'reka-ui'
import { avatarVariants, type AvatarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { AVATAR_CONTEXT } from './avatar-context'

/**
 * Avatar — the circular image container. Faithful Vue port of HeroUI v3 `Avatar`.
 *
 * The root computes HeroUI's `avatarVariants` slot map and provides it to
 * compound parts (`Avatar.Image`, `Avatar.Fallback`), so every part is styled
 * from `@heroui/styles` — never a hand-written class string.
 *
 * Delegates show/hide logic to reka-ui `AvatarRoot`.
 */
export const AvatarRoot = defineComponent({
  name: 'Avatar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Color family applied to the fallback. @default 'default' */
    color: { type: String as PropType<AvatarVariants['color']>, default: 'default' },
    /** Avatar size. @default 'md' */
    size: { type: String as PropType<AvatarVariants['size']>, default: 'md' },
    /** Visual variant. @default undefined (plain circle) */
    variant: { type: String as PropType<AvatarVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => avatarVariants({ color: props.color, size: props.size, variant: props.variant }))
    provide(AVATAR_CONTEXT, { slots: styles })

    return () => (
      <RekaAvatarRoot {...attrs} class={cn(styles.value.base(), props.class)}>
        {slots.default?.()}
      </RekaAvatarRoot>
    )
  }
})

export default AvatarRoot
