import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Skeleton — HeroUI-Vue primitive: a placeholder surface shown while content
 * loads.
 *
 * Faithful port of `shadcn/skeleton`. HeroUI `skeleton.css` uses a pulse
 * animation over a quiet surface; adapted to the repo's `bg-muted` token and
 * the shared `rounded-md` radius. Behaviour is identical to the shadcn source.
 */
export const Skeleton = defineComponent({
  name: 'SkeletonRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('animate-pulse rounded-md bg-muted', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Skeleton
