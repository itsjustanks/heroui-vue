import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AvatarFallback as RekaAvatarFallback } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AvatarFallback — shown while the image is missing or loading. HeroUI
 * `avatar__fallback`: a centred `bg-muted` label (initials / icon). reka-ui
 * `delayMs` and other `AvatarFallbackProps` are forwarded via `{...attrs}`.
 */
export const AvatarFallback = defineComponent({
  name: 'AvatarFallback',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAvatarFallback
        {...attrs}
        class={cn('flex h-full w-full items-center justify-center bg-muted font-medium', props.class)}
      >
        {slots.default?.()}
      </RekaAvatarFallback>
    )
  }
})

export default AvatarFallback
