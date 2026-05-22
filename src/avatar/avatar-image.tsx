import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AvatarImage as AvatarImageBase } from 'reka-ui'
// Thin wrapper: reka props (`src`, …) are forwarded via attrs at runtime.
const RekaAvatarImage: any = AvatarImageBase
import { cn } from '@/lib/utils'

/**
 * AvatarImage — the photo layer. HeroUI `avatar__image`: fills the avatar box,
 * `object-cover`. reka-ui handles load/error state. All `AvatarImageProps`
 * (`src`, `referrerPolicy`, …) are forwarded via `{...attrs}`.
 */
export const AvatarImage = defineComponent({
  name: 'AvatarImage',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAvatarImage {...(attrs as Record<string, any>)} class={cn('h-full w-full object-cover', props.class)}>
        {slots.default?.()}
      </RekaAvatarImage>
    )
  }
})

export default AvatarImage
