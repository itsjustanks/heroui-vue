import { computed, defineComponent, inject, provide, ref, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { formatColor, hsvToHsl, hsvToRgb, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'
import type { TColorSliderChannel } from './color-slider'

const FALLBACK: TColorValue = { h: 0, s: 0, v: 0, a: 1 }

/** Per-field context — Input/Prefix/Suffix read display value + commit fn here. */
type TColorFieldInternal = {
  text: ComputedRef<string>
  commit: (raw: string) => void
}
const FIELD_KEY: InjectionKey<TColorFieldInternal> = Symbol('HeroColorField')
const useField = (): TColorFieldInternal | null => inject(FIELD_KEY, null)

/** Read a single channel's display value. */
function channelText (c: TColorValue, channel: TColorSliderChannel): string {
  switch (channel) {
    case 'hue': return String(Math.round(c.h))
    case 'saturation': return String(Math.round(c.s))
    case 'brightness': return String(Math.round(c.v))
    case 'lightness': return String(hsvToHsl(c).l)
    case 'alpha': return String(Math.round(c.a * 100))
    case 'red': return String(hsvToRgb(c).r)
    case 'green': return String(hsvToRgb(c).g)
    case 'blue': return String(hsvToRgb(c).b)
    default: return ''
  }
}

/** ColorField.Group — the bordered input shell (prefix + input + suffix). */
const ColorFieldGroup = defineComponent({
  name: 'ColorFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `secondary` mirrors HeroUI's softer field surface. */
    variant: { type: String as PropType<'primary' | 'secondary'>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="group"
        data-variant={props.variant}
        class={cn(
          'color-input-group',
          `color-input-group--${props.variant}`,
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

/** ColorField.Prefix — leading adornment (e.g. a small ColorSwatch). */
const ColorFieldPrefix = defineComponent({
  name: 'ColorFieldPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span {...attrs} class={cn('color-input-group__prefix', props.class)}>
        {slots.default?.()}
      </span>
    )
  }
})

/** ColorField.Suffix — trailing adornment. */
const ColorFieldSuffix = defineComponent({
  name: 'ColorFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span {...attrs} class={cn('color-input-group__suffix', props.class)}>
        {slots.default?.()}
      </span>
    )
  }
})

/**
 * ColorField.Input — the editable value. Shows the current field text and
 * commits on `change` / Enter. An invalid entry is reverted on blur.
 */
const ColorFieldInput = defineComponent({
  name: 'ColorFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const field = useField()
    const draft = ref<string | null>(null)

    return () => (
      <input
        {...attrs}
        type="text"
        spellcheck={false}
        value={draft.value ?? field?.text.value ?? ''}
        onInput={(e: Event) => { draft.value = (e.target as HTMLInputElement).value }}
        onChange={(e: Event) => {
          field?.commit((e.target as HTMLInputElement).value)
          draft.value = null
        }}
        onKeydown={(e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            field?.commit((e.target as HTMLInputElement).value)
            draft.value = null
          } else if (e.key === 'Escape') {
            draft.value = null
          }
        }}
        onBlur={() => { draft.value = null }}
        class={cn('color-input-group__input', props.class)}
      />
    )
  }
})

/**
 * ColorField — a text input for a color. With no `channel` it edits the full
 * hex value; with a `channel` (`red`, `hue`, …) it edits one channel. HeroUI's
 * `ColorField` is built on React Aria; this is the reka-ui/Vue analogue, driving
 * the ColorPicker context.
 *
 * Exposes `ColorField.Group`, `.Input`, `.Prefix`, `.Suffix`.
 */
export const ColorField = defineComponent({
  name: 'ColorField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Single channel to edit. Omit to edit the full hex value. */
    channel: { type: String as PropType<TColorSliderChannel>, default: undefined },
    colorSpace: { type: String as PropType<'hsb' | 'hsl' | 'rgb'>, default: 'hsb' }
  },
  setup (props, { attrs, slots }) {
    const ctx = useColorPickerContext()
    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)

    const text = computed(() => props.channel
      ? channelText(color.value, props.channel)
      : formatColor(color.value, 'hex')
    )

    const commit = (raw: string): void => {
      if (!ctx) return
      const trimmed = raw.trim()
      if (!props.channel) {
        const next = parseColor(trimmed.startsWith('#') ? trimmed : `#${trimmed}`)
        ctx.setColor(next)
        return
      }
      const n = Number(trimmed)
      if (Number.isNaN(n)) return
      switch (props.channel) {
        case 'hue': ctx.patchColor({ h: n }); break
        case 'saturation': ctx.patchColor({ s: n }); break
        case 'brightness':
        case 'lightness': ctx.patchColor({ v: n }); break
        case 'alpha': ctx.patchColor({ a: n / 100 }); break
        case 'red':
        case 'green':
        case 'blue': {
          const rgb = hsvToRgb(color.value)
          rgb[props.channel === 'red' ? 'r' : props.channel === 'green' ? 'g' : 'b'] = n
          const next = parseColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
          ctx.setColor({ ...next, a: color.value.a })
          break
        }
      }
    }

    provide(FIELD_KEY, { text, commit })

    return () => (
      <div
        {...attrs}
        data-slot="color-field"
        data-channel={props.channel}
        class={cn('color-field', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export { ColorFieldGroup, ColorFieldInput, ColorFieldPrefix, ColorFieldSuffix }
export default ColorField
