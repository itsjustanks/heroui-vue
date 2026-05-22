import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { avatarVariant, type TAvatarVariants } from './avatar-variants'

/**
 * Avatar — root. HeroUI-Vue primitive over reka-ui `AvatarRoot`.
 *
 * HeroUI `avatar.css`: a circular `bg-muted` surface that contains an image and
 * a fallback. Faithful port of `shadcn/avatar` — same `size` / `shape` props.
 */
export const Avatar = defineComponent({
  name: 'Avatar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<TAvatarVariants['size']>, default: 'sm' },
    shape: { type: String as PropType<TAvatarVariants['shape']>, default: 'circle' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AvatarRoot
        {...attrs}
        class={cn(avatarVariant({ size: props.size, shape: props.shape }), props.class)}
      >
        {slots.default?.()}
      </AvatarRoot>
    )
  }
})

export default Avatar
