import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ToolbarSeparator as RekaToolbarSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ToolbarSeparator — a thin divider between groups of Toolbar controls.
 *
 * Wraps reka-ui `ToolbarSeparator`; orientation is inherited from the
 * `ToolbarRoot` and the rule auto-flips perpendicular to the toolbar axis.
 */
export const ToolbarSeparator = defineComponent({
  name: 'ToolbarSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaToolbarSeparator
        {...attrs}
        data-slot="toolbar-separator"
        class={cn(props.class)}
      />
    )
  }
})

export default ToolbarSeparator
