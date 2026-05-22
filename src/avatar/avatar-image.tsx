import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AvatarImage as RekaAvatarImage } from 'reka-ui'
import { avatarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { AVATAR_CONTEXT } from './avatar-context'

/** Avatar.Image — the photo layer (HeroUI `avatar__image`). reka-ui handles load/error state. */
export const AvatarImage = defineComponent({
  name: 'AvatarImage',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Image source URL. */
    src: { type: String, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(AVATAR_CONTEXT, null)
    return () => (
      <RekaAvatarImage
        {...(attrs as Record<string, any>)}
        src={props.src as string}
        data-slot="avatar-image"
        class={cn((ctx?.slots.value ?? avatarVariants()).image(), props.class)}
      />
    )
  }
})

export default AvatarImage
