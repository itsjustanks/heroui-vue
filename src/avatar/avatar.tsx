import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { avatarSizeClass, type TAvatarColor, type TAvatarSize, type TAvatarVariantName } from './avatar-variants'

/**
 * Avatar — root.
 *
 * HeroUI BEM: `avatar` base, `avatar--{size}` modifier, `avatar--soft` modifier.
 * `color` flows down to AvatarFallback via slot — consumers pass it to `<AvatarFallback>` directly.
 */
export const Avatar = defineComponent({
  name: 'Avatar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<TAvatarSize>, default: 'md' },
    variant: { type: String as PropType<TAvatarVariantName>, default: 'default' },
    /** @deprecated Pass color directly to AvatarFallback */
    color: { type: String as PropType<TAvatarColor>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AvatarRoot
        {...attrs}
        class={cn(
          'avatar',
          avatarSizeClass(props.size),
          props.variant === 'soft' && 'avatar--soft',
          props.class
        )}
      >
        {slots.default?.()}
      </AvatarRoot>
    )
  }
})

export default Avatar
