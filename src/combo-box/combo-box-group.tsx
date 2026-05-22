import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxGroup, ComboboxLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxGroup — a labelled section of ComboBox options. Mirrors
 * `ListBox.Section` + `Header` as used inside HeroUI v3's `ComboBox.Popover`.
 *
 * Built over reka-ui `ComboboxGroup`; pass `heading` for a muted section label
 * (rendered via reka-ui `ComboboxLabel`).
 */
export const ComboBoxGroup = defineComponent({
  name: 'ComboBoxGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    heading: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxGroup {...attrs} class={cn('flex w-full flex-col items-start gap-0', props.class)}>
        {props.heading
          ? (
            <ComboboxLabel class="w-full px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              {props.heading}
            </ComboboxLabel>
          )
          : null}
        {slots.default?.()}
      </ComboboxGroup>
    )
  }
})

export default ComboBoxGroup
