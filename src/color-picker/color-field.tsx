import { computed, defineComponent, inject, provide, ref, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType } from 'vue'
import { colorFieldVariants, colorInputGroupVariants, type ColorFieldVariants, type ColorInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { formatColor, hsvToHsl, hsvToRgb, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'
import type { TColorSliderChannel } from './color-slider'

const FALLBACK: TColorValue = { h: 0, s: 0, v: 0, a: 1 }

/** Per-field context — Input/Prefix/Suffix read display value + commit fn here. */
type TColorFieldInternal = {
  text: ComputedRef<string>
  groupSlots: ComputedRef<ReturnType<typeof colorInputGroupVariants>>
  commit: (raw: string) => void
}
const FIELD_KEY: InjectionKey<TColorFieldInternal> = Symbol('heroui-vue-color-field')
const useField = (): TColorFieldInternal | null => inject(FIELD_KEY, null)

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

/**
 * ColorInputGroupRoot (`ColorField.Group`) — the bordered input shell.
 * HeroUI v3 `ColorField.Group` (`data-slot="color-input-group"`).
 */
export const ColorFieldGroup = defineComponent({
  name: 'ColorFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<ColorInputGroupVariants['variant']>, default: 'primary' },
    fullWidth: { type: Boolean as PropType<ColorInputGroupVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const field = useField()
    const fallback = colorInputGroupVariants()
    return () => {
      const s = field?.groupSlots.value ?? fallback
      return (
        <div
          {...attrs}
          data-slot="color-input-group"
          class={cn(s.base(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

/**
 * ColorInputGroupPrefix (`ColorField.Prefix`) — leading adornment.
 * HeroUI v3 `ColorField.Prefix` (`data-slot="color-input-group-prefix"`).
 */
export const ColorFieldPrefix = defineComponent({
  name: 'ColorFieldPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const field = useField()
    const fallback = colorInputGroupVariants()
    return () => {
      const s = field?.groupSlots.value ?? fallback
      return (
        <span {...attrs} data-slot="color-input-group-prefix" class={cn(s.prefix(), props.class)}>
          {slots.default?.()}
        </span>
      )
    }
  }
})

/**
 * ColorInputGroupSuffix (`ColorField.Suffix`) — trailing adornment.
 * HeroUI v3 `ColorField.Suffix` (`data-slot="color-input-group-suffix"`).
 */
export const ColorFieldSuffix = defineComponent({
  name: 'ColorFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const field = useField()
    const fallback = colorInputGroupVariants()
    return () => {
      const s = field?.groupSlots.value ?? fallback
      return (
        <span {...attrs} data-slot="color-input-group-suffix" class={cn(s.suffix(), props.class)}>
          {slots.default?.()}
        </span>
      )
    }
  }
})

/**
 * ColorInputGroupInput (`ColorField.Input`) — the editable color value input.
 * HeroUI v3 `ColorField.Input` (`data-slot="color-input-group-input"`). Shows
 * the current field text and commits on `change` / Enter. Invalid entries are
 * reverted on blur.
 */
export const ColorFieldInput = defineComponent({
  name: 'ColorFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const field = useField()
    const draft = ref<string | null>(null)
    const fallback = colorInputGroupVariants()

    return () => {
      const s = field?.groupSlots.value ?? fallback
      return (
        <input
          {...attrs}
          type="text"
          spellcheck={false}
          data-slot="color-input-group-input"
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
          class={cn(s.input(), props.class)}
        />
      )
    }
  }
})

/**
 * ColorFieldRoot — a text input for a color channel or full hex value.
 * HeroUI v3 `ColorField.Root` (`data-slot="color-field"`). With no `channel`
 * it edits the full hex string; with a `channel` it edits one channel.
 * Drives the ColorPicker context.
 */
export const ColorFieldRoot = defineComponent({
  name: 'ColorField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Single channel to edit. Omit to edit the full hex value. */
    channel: { type: String as PropType<TColorSliderChannel>, default: undefined },
    colorSpace: { type: String as PropType<'hsb' | 'hsl' | 'rgb'>, default: 'hsb' },
    fullWidth: { type: Boolean as PropType<ColorFieldVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = useColorPickerContext()
    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)

    const text = computed(() => props.channel
      ? channelText(color.value, props.channel)
      : formatColor(color.value, 'hex')
    )

    const groupSlots = computed(() => colorInputGroupVariants({
      variant: 'primary',
      fullWidth: props.fullWidth
    }))

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

    provide(FIELD_KEY, { text, groupSlots, commit })

    const fieldStyles = computed(() => colorFieldVariants({ fullWidth: props.fullWidth }))

    return () => (
      <div
        {...attrs}
        data-slot="color-field"
        data-channel={props.channel}
        class={cn(fieldStyles.value, props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ColorFieldRoot
