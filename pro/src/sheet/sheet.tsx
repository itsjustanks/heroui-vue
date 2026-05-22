import {
  computed,
  defineComponent,
  inject,
  provide,
  ref,
  watch,
  type ComputedRef,
  type HTMLAttributes,
  type InjectionKey,
  type PropType,
  type Ref
} from 'vue'
import { cn } from '../lib/utils'
import { sheetVariants, type TSheetBackdrop, type TSheetPlacement, type TSheetVariants } from './sheet.styles'

type TSheetContext = {
  isOpen: Ref<boolean>
  placement: ComputedRef<TSheetPlacement>
  setOpen: (open: boolean) => void
  slots: ComputedRef<TSheetVariants>
}

const SHEET_CONTEXT: InjectionKey<TSheetContext> = Symbol('heroui-pro-vue-sheet')

const classProp = {
  type: [String, Array, Object] as PropType<HTMLAttributes['class']>,
  default: undefined
}

function useSheetContext () {
  const ctx = inject(SHEET_CONTEXT, null)
  if (!ctx) throw new Error('Sheet compound parts must be rendered inside Sheet.Root')
  return ctx
}

export const SheetRoot = defineComponent({
  name: 'SheetRoot',
  props: {
    activeSnapPoint: { type: [Number, String, null] as PropType<number | string | null>, default: null },
    defaultOpen: { type: Boolean, default: false },
    isDismissable: { type: Boolean, default: true },
    isModal: { type: Boolean, default: true },
    isOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    placement: { type: String as PropType<TSheetPlacement>, default: 'bottom' },
    snapPoints: { type: Array as PropType<(number | string)[]>, default: undefined }
  },
  emits: {
    'update:isOpen': (_open: boolean) => true,
    openChange: (_open: boolean) => true,
    activeSnapPointChange: (_snapPoint: number | string | null) => true
  },
  setup (props, { emit, slots }) {
    const uncontrolledOpen = ref(props.defaultOpen)
    const isOpen = computed({
      get: () => props.isOpen ?? uncontrolledOpen.value,
      set: (open) => {
        uncontrolledOpen.value = open
        emit('update:isOpen', open)
        emit('openChange', open)
      }
    })
    const placement = computed(() => props.placement)
    const slotMap = computed(() => sheetVariants({ placement: props.placement }))

    provide(SHEET_CONTEXT, {
      isOpen,
      placement,
      setOpen: (open: boolean) => { isOpen.value = open },
      slots: slotMap
    })

    watch(() => props.activeSnapPoint, (snapPoint) => {
      emit('activeSnapPointChange', snapPoint ?? null)
    })

    return () => slots.default?.({ isOpen: isOpen.value })
  }
})

export const SheetNestedRoot = defineComponent({
  name: 'SheetNestedRoot',
  extends: SheetRoot
})

export const SheetTrigger = defineComponent({
  name: 'SheetTrigger',
  setup (_props, { slots }) {
    const ctx = useSheetContext()
    return () => slots.default?.({ open: () => ctx.setOpen(true), isOpen: ctx.isOpen.value })
  }
})

export const SheetClose = defineComponent({
  name: 'SheetClose',
  setup (_props, { slots }) {
    const ctx = useSheetContext()
    return () => slots.default?.({ close: () => ctx.setOpen(false), isOpen: ctx.isOpen.value })
  }
})

export const SheetBackdrop = defineComponent({
  name: 'SheetBackdrop',
  inheritAttrs: false,
  props: {
    class: classProp,
    variant: { type: String as PropType<TSheetBackdrop>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()

    return () => (
      <div
        {...attrs}
        data-sheet-animate="true"
        data-sheet-overlay=""
        data-slot="sheet-backdrop"
        class={cn(sheetVariants({ backdrop: props.variant, placement: ctx.placement.value }).backdrop(), props.class)}
        hidden={!ctx.isOpen.value}
      >
        {slots.default?.({ isOpen: ctx.isOpen.value })}
      </div>
    )
  }
})

export const SheetContent = defineComponent({
  name: 'SheetContent',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()

    return () => (
      <div
        {...attrs}
        data-sheet-animate="true"
        data-sheet-drawer=""
        data-sheet-drawer-direction={ctx.placement.value}
        data-slot="sheet-content"
        class={cn(ctx.slots.value.content(), props.class)}
        hidden={!ctx.isOpen.value}
      >
        {slots.default?.({ isOpen: ctx.isOpen.value })}
      </div>
    )
  }
})

export const SheetDialog = defineComponent({
  name: 'SheetDialog',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()

    return () => (
      <div
        {...attrs}
        role="dialog"
        data-placement={ctx.placement.value}
        data-slot="sheet-dialog"
        class={cn(ctx.slots.value.dialog(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export const SheetHeader = defineComponent({
  name: 'SheetHeader',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()
    return () => <div {...attrs} data-slot="sheet-header" class={cn(ctx.slots.value.header(), props.class)}>{slots.default?.()}</div>
  }
})

export const SheetHeading = defineComponent({
  name: 'SheetHeading',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()
    return () => <h2 {...attrs} data-slot="sheet-heading" class={cn(ctx.slots.value.heading(), props.class)}>{slots.default?.()}</h2>
  }
})

export const SheetBody = defineComponent({
  name: 'SheetBody',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()
    return () => <div {...attrs} data-slot="sheet-body" class={cn(ctx.slots.value.body(), props.class)}>{slots.default?.()}</div>
  }
})

export const SheetFooter = defineComponent({
  name: 'SheetFooter',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()
    return () => <div {...attrs} data-slot="sheet-footer" class={cn(ctx.slots.value.footer(), props.class)}>{slots.default?.()}</div>
  }
})

export const SheetHandle = defineComponent({
  name: 'SheetHandle',
  inheritAttrs: false,
  props: {
    class: classProp,
    preventCycle: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()

    return () => (
      <div
        {...attrs}
        aria-hidden="true"
        data-sheet-drawer-visible={ctx.isOpen.value ? 'true' : 'false'}
        data-sheet-handle=""
        data-slot="sheet-handle"
        data-prevent-cycle={props.preventCycle ? 'true' : undefined}
        class={cn(ctx.slots.value.handle(), props.class)}
      >
        <span aria-hidden="true" data-slot="sheet-handle-hitarea">
          {slots.default?.() ?? <span data-slot="sheet-handle-bar" class={ctx.slots.value.handleBar()} />}
        </span>
      </div>
    )
  }
})

export const SheetCloseTrigger = defineComponent({
  name: 'SheetCloseTrigger',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    const ctx = useSheetContext()
    return () => (
      <button
        {...attrs}
        type="button"
        data-slot="sheet-close-trigger"
        class={cn(ctx.slots.value.closeTrigger(), props.class)}
        onClick={() => ctx.setOpen(false)}
      >
        {slots.default?.() ?? 'Close'}
      </button>
    )
  }
})
