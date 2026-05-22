import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AvatarFallback as RekaAvatarFallback } from 'reka-ui'
import { cn } from '@/lib/utils'
import { avatarFallbackColorClass, type TAvatarColor } from './avatar-variants'

/**
 * AvatarFallback — shown while the image is missing or loading.
 * HeroUI BEM: `avatar__fallback` + `avatar__fallback--{color}` modifier.
 */
export const AvatarFallback = defineComponent({
  name: 'AvatarFallback',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    color: { type: String as PropType<TAvatarColor>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAvatarFallback
        {...attrs}
        class={cn('avatar__fallback', avatarFallbackColorClass(props.color), props.class)}
      >
        {slots.default?.()}
      </RekaAvatarFallback>
    )
  }
})

export default AvatarFallback
