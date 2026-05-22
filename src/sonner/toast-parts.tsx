import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { toastVariants, type ToastVariants } from '@heroui/styles'
import { Button } from '@/button'
import { CloseButton } from '@/close-button'
import { InfoIcon, SuccessIcon, WarningIcon, DangerIcon } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * Toast compound parts — faithful Vue transcription of HeroUI v3's `toast.tsx`
 * (`packages/react/src/components/toast/toast.tsx`).
 *
 * HeroUI's React `Toast` is built on React Aria's `UNSTABLE_Toast` primitives;
 * heroui-vue's runtime queue is `vue-sonner` (see `sonner.tsx`). These parts are
 * the presentational compound pieces — `Toast`, `Toast.Content`, `Toast.Indicator`,
 * `Toast.Title`, `Toast.Description`, `Toast.ActionButton`, `Toast.CloseButton` —
 * each emitting the same `data-slot` + `toastVariants` BEM classes as HeroUI,
 * so a custom-render toast is styled identically. They can be composed inside a
 * `Toast.Provider` custom render function.
 */

const classProp = { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }

/* ------------------------------------------------------------------------------------------------
 * Toast — the single toast surface (HeroUI `Toast`, `data-slot="toast"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastRoot = defineComponent({
  name: 'Toast',
  inheritAttrs: false,
  props: {
    class: classProp,
    /** Visual variant — mirrors HeroUI `ToastVariants['variant']`. */
    variant: { type: String as PropType<ToastVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const slotsMap = toastVariants({ variant: props.variant })

      return (
        <div {...attrs} data-slot="toast" class={cn(slotsMap.toast(), props.class)}>
          {slots.default?.()}
        </div>
      )
    }
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.Content (HeroUI `ToastContent`, `data-slot="toast-content"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastContent = defineComponent({
  name: 'ToastContent',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="toast-content" class={cn(toastVariants({}).content(), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.Indicator (HeroUI `ToastIndicator`, `data-slot="toast-indicator"`).
 * Falls back to a variant-specific status icon when no children are given.
 * --------------------------------------------------------------------------------------------- */
export const ToastIndicator = defineComponent({
  name: 'ToastIndicator',
  inheritAttrs: false,
  props: {
    class: classProp,
    variant: { type: String as PropType<ToastVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const defaultIcon = (() => {
        switch (props.variant) {
          case 'success': return <SuccessIcon data-slot="toast-default-icon" />
          case 'warning': return <WarningIcon data-slot="toast-default-icon" />
          case 'danger':  return <DangerIcon data-slot="toast-default-icon" />
          default:        return <InfoIcon data-slot="toast-default-icon" />
        }
      })()

      return (
        <div {...attrs} data-slot="toast-indicator" class={cn(toastVariants({}).indicator(), props.class)}>
          {slots.default ? slots.default() : defaultIcon}
        </div>
      )
    }
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.Title (HeroUI `ToastTitle`, `data-slot="toast-title"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastTitle = defineComponent({
  name: 'ToastTitle',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="toast-title" {...{ slot: 'title' }} class={cn(toastVariants({}).title(), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.Description (HeroUI `ToastDescription`, `data-slot="toast-description"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastDescription = defineComponent({
  name: 'ToastDescription',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="toast-description"
        {...{ slot: 'description' }}
        class={cn(toastVariants({}).description(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.CloseButton (HeroUI `ToastCloseButton`, `data-slot="toast-close"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastCloseButton = defineComponent({
  name: 'ToastCloseButton',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <CloseButton {...attrs} data-slot="toast-close" {...{ slot: 'close' }} class={cn(toastVariants({}).close(), props.class)}>
        {slots.default?.()}
      </CloseButton>
    )
  }
})

/* ------------------------------------------------------------------------------------------------
 * Toast.ActionButton (HeroUI `ToastActionButton`, `data-slot="toast-action-button"`).
 * --------------------------------------------------------------------------------------------- */
export const ToastActionButton = defineComponent({
  name: 'ToastActionButton',
  inheritAttrs: false,
  props: { class: classProp },
  setup (props, { attrs, slots }) {
    return () => (
      <Button {...attrs} data-slot="toast-action-button" class={cn(toastVariants({}).action(), props.class)}>
        {slots.default?.()}
      </Button>
    )
  }
})
