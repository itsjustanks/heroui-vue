import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AvatarFallback as RekaAvatarFallback } from 'reka-ui'
import { avatarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { AVATAR_CONTEXT } from './avatar-context'

/** Avatar.Fallback — shown while the image is missing or loading (HeroUI `avatar__fallback`). */
export const AvatarFallback = defineComponent({
  name: 'AvatarFallback',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(AVATAR_CONTEXT, null)
    return () => (
      <RekaAvatarFallback
        {...attrs}
        data-slot="avatar-fallback"
        class={cn((ctx?.slots.value ?? avatarVariants()).fallback(), props.class)}
      >
        {slots.default?.()}
      </RekaAvatarFallback>
    )
  }
})

export default AvatarFallback
