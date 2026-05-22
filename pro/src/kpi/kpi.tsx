import { computed, defineComponent, provide, inject, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType } from 'vue'
import { cn } from '../lib/utils'
import { kpiVariants, type TKPIStatus, type TKPIVariants } from './kpi.styles'

const KPI_CONTEXT: InjectionKey<{ slots: ComputedRef<TKPIVariants> }> = Symbol('heroui-pro-vue-kpi')

function useKpiSlots () {
  const ctx = inject(KPI_CONTEXT, null)
  return ctx?.slots.value ?? kpiVariants()
}

const classProp = {
  type: [String, Array, Object] as PropType<HTMLAttributes['class']>,
  default: undefined
}

export const KPIRoot = defineComponent({
  name: 'KPI',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const slotMap = computed(() => kpiVariants())
    provide(KPI_CONTEXT, { slots: slotMap })

    return () => (
      <div {...attrs} data-slot="kpi" class={cn(slotMap.value.base(), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export const KPIHeader = defineComponent({
  name: 'KPIHeader',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => <div {...attrs} data-slot="kpi-header" class={cn(useKpiSlots().header(), props.class)}>{slots.default?.()}</div>
  }
})

export const KPIContent = defineComponent({
  name: 'KPIContent',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => <div {...attrs} data-slot="kpi-content" class={cn(useKpiSlots().content(), props.class)}>{slots.default?.()}</div>
  }
})

export const KPIIcon = defineComponent({
  name: 'KPIIcon',
  inheritAttrs: false,
  props: {
    class: classProp,
    status: { type: String as PropType<TKPIStatus>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="kpi-icon"
        data-status={props.status}
        class={cn(useKpiSlots().icon(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export const KPITitle = defineComponent({
  name: 'KPITitle',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => <dt {...attrs} data-slot="kpi-title" class={cn(useKpiSlots().title(), props.class)}>{slots.default?.()}</dt>
  }
})

export const KPIValue = defineComponent({
  name: 'KPIValue',
  inheritAttrs: false,
  props: {
    class: classProp,
    value: { type: [Number, String] as PropType<number | string>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <dd {...attrs} data-slot="kpi-value" class={cn(useKpiSlots().value(), props.class)}>
        {slots.default?.({ value: props.value }) ?? props.value}
      </dd>
    )
  }
})

export const KPITrend = defineComponent({
  name: 'KPITrend',
  inheritAttrs: false,
  props: {
    class: classProp,
    trend: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => <div {...attrs} data-slot="kpi-trend" class={cn(useKpiSlots().trend(), props.class)}>{slots.default?.() ?? props.trend}</div>
  }
})

export const KPIProgress = defineComponent({
  name: 'KPIProgress',
  inheritAttrs: false,
  props: {
    class: classProp,
    status: { type: String as PropType<TKPIStatus>, default: 'success' },
    value: { type: Number, required: true }
  },
  setup (props, { attrs }) {
    return () => {
      const value = Math.max(0, Math.min(100, props.value))

      return (
        <div
          {...attrs}
          data-slot="kpi-progress"
          data-status={props.status}
          class={cn(useKpiSlots().progress(), props.class)}
        >
          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
            <div style={{ width: `${value}%` }} />
          </div>
        </div>
      )
    }
  }
})

export const KPIActions = defineComponent({
  name: 'KPIActions',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <div data-slot="kpi-actions" class={useKpiSlots().actions()}>
        <button {...attrs} type="button" class={props.class}>
          {slots.default?.() ?? <DefaultActionsIcon />}
        </button>
      </div>
    )
  }
})

export const KPIChart = defineComponent({
  name: 'KPIChart',
  inheritAttrs: false,
  props: {
    class: classProp,
    color: { type: String, default: 'currentColor' },
    data: { type: Array as PropType<Record<string, number | string>[]>, required: true },
    dataKey: { type: String, default: 'value' },
    fillColor: { type: String, default: undefined },
    height: { type: Number, default: 80 },
    strokeWidth: { type: Number, default: 2 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="kpi-chart"
        data-data-key={props.dataKey}
        class={cn(useKpiSlots().chart(), props.class)}
        style={{ height: `${props.height}px`, color: props.color }}
      >
        {slots.default?.({
          color: props.color,
          data: props.data,
          dataKey: props.dataKey,
          fillColor: props.fillColor,
          strokeWidth: props.strokeWidth
        })}
      </div>
    )
  }
})

export const KPISeparator = defineComponent({
  name: 'KPISeparator',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs }) {
    return () => <div {...attrs} role="separator" data-slot="kpi-separator" class={cn(useKpiSlots().separator(), props.class)} />
  }
})

export const KPIFooter = defineComponent({
  name: 'KPIFooter',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => <div {...attrs} data-slot="kpi-footer" class={cn(useKpiSlots().footer(), props.class)}>{slots.default?.()}</div>
  }
})

const DefaultActionsIcon = defineComponent({
  name: 'KPIDefaultActionsIcon',
  setup () {
    return () => (
      <svg fill="currentColor" viewBox="0 0 16 16" class="size-4" aria-hidden="true">
        <circle cx="8" cy="3" r="1.5" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="8" cy="13" r="1.5" />
      </svg>
    )
  }
})
