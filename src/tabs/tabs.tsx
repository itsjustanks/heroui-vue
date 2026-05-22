import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsRoot } from 'reka-ui'

/**
 * Tabs — root of the HeroUI-Vue tabs (primitive library port).
 *
 * Thin wrapper over reka-ui `TabsRoot` — logic only, renders a layout container.
 * Forwards all props/emits (`modelValue`, `defaultValue`, `onUpdate:modelValue`,
 * `orientation`, `dir`, `activationMode`, …) via `{...attrs}`.
 */
export const Tabs = defineComponent({
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TabsRoot {...attrs} class={props.class}>
        {slots.default?.()}
      </TabsRoot>
    )
  }
})

export default Tabs
