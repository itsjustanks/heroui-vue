import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Loader2 as IconLoader2 } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * Spinner — HeroUI-Vue primitive: a determinate-free loading indicator.
 *
 * Faithful port of `shadcn/spinner`. HeroUI `spinner.css` is a small spinning
 * mark; adapted to the repo with the lucide `Loader2` icon, `animate-spin`, and
 * the muted foreground token. Behaviour (role/aria-label) is identical to the
 * shadcn source — only the authoring syntax changed.
 */
export const Spinner = defineComponent({
  name: 'SpinnerRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <IconLoader2
        role="status"
        aria-label="Loading"
        {...attrs}
        class={cn('size-4 animate-spin text-muted-foreground', props.class)}
      />
    )
  }
})

export default Spinner
