import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { dateInputGroupVariants } from '@heroui/styles'

/** The `dateInputGroupVariants()` slot map — one class-name function per part. */
export type DateInputGroupSlots = ReturnType<typeof dateInputGroupVariants>

/** A single segment descriptor as produced by reka-ui's date/time field roots. */
export interface DateSegment {
  part: string
  value: string
}

/** The `{ start, end }` segment pair produced by reka-ui's range field root. */
export interface DateRangeSegments {
  start: DateSegment[]
  end: DateSegment[]
}

/**
 * Which reka-ui field primitive backs the segmented input.
 *
 * reka-ui — unlike react-aria-components — does not auto-detect the parent
 * field. Each enclosing root (`DateField`, `TimeField`, `DatePicker`,
 * `DateRangePicker`) advertises its kind so the shared `DateInputGroup` parts
 * can wire to the matching reka primitive and read the matching segment slot.
 */
export type DateFieldKind = 'date' | 'time' | 'date-picker' | 'date-range-picker'

/**
 * Carries the live segment list down to `DateInputGroup.Input`. Single fields
 * expose a flat `DateSegment[]`; range fields expose `{ start, end }`.
 */
export interface DateSegmentsContext {
  kind: DateFieldKind
  segments: Ref<DateSegment[] | DateRangeSegments>
}

export interface DateInputGroupContext {
  /** Reactive `dateInputGroupVariants()` slot map. */
  slots: ComputedRef<DateInputGroupSlots>
  /** Which reka-ui field primitive this group is backed by. */
  kind: DateFieldKind
}

/** Provided by `DateInputGroup.Root` (a.k.a. `DateField.Group`). */
export const DATE_INPUT_GROUP_CONTEXT: InjectionKey<DateInputGroupContext> = Symbol(
  'heroui-vue-date-input-group',
)

/**
 * Advertised by the enclosing field/picker root (`DateField`, `TimeField`,
 * `DatePicker`, `DateRangePicker`). `DateInputGroup.Root` reads it to decide
 * whether to render a plain group, a `DatePickerField` bridge, or a
 * `DateRangePickerField` bridge.
 */
export const DATE_FIELD_KIND: InjectionKey<DateFieldKind> = Symbol('heroui-vue-date-field-kind')

/**
 * The live segment list. Provided by the field root (`DateField`/`TimeField`)
 * or, for pickers, by `DateInputGroup.Root` capturing the reka field slot.
 * Consumed by `DateInputGroup.Input`.
 */
export const DATE_SEGMENTS: InjectionKey<DateSegmentsContext> = Symbol('heroui-vue-date-segments')
