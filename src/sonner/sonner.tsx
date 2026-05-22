import { defineComponent, type PropType } from 'vue'
import { Toaster as SonnerBase, type ToasterProps } from 'vue-sonner'
const Sonner: any = SonnerBase

/**
 * Toaster — HeroUI-Vue toast region. A faithful port of `shadcn/sonner`: it
 * wraps the `vue-sonner` `<Toaster>` and forwards every prop verbatim, keeping
 * the class-keyed `toastOptions` so toast surfaces stay theme-aware.
 *
 * Only the `<script setup>` → `setup()` and `<template>` → JSX syntax changes.
 * Restyled to HeroUI v3's toast surface — `rounded-xl border border-border
 * bg-background text-foreground shadow-lg` (HeroUI `toast.css` overlay surface),
 * adapted to the repo's tokens.
 */
export const Toaster = defineComponent({
  name: 'SonnerToaster',
  inheritAttrs: false,
  props: {
    invert: { type: Boolean, required: false, default: undefined },
    theme: { type: String as PropType<ToasterProps['theme']>, required: false, default: undefined },
    position: { type: String as PropType<ToasterProps['position']>, required: false, default: undefined },
    hotkey: { type: Array as PropType<string[]>, required: false, default: undefined },
    richColors: { type: Boolean, required: false, default: undefined },
    expand: { type: Boolean, required: false, default: undefined },
    duration: { type: Number, required: false, default: undefined },
    gap: { type: Number, required: false, default: undefined },
    visibleToasts: { type: Number, required: false, default: undefined },
    closeButton: { type: Boolean, required: false, default: undefined },
    toastOptions: { type: Object as PropType<Record<string, any>>, required: false, default: undefined },
    class: { type: String, required: false, default: undefined },
    style: { type: null, required: false, default: undefined },
    offset: { type: [String, Number], required: false, default: undefined },
    dir: { type: String as PropType<ToasterProps['dir']>, required: false, default: undefined },
    icons: { type: Object as PropType<Record<string, any>>, required: false, default: undefined },
    containerAriaLabel: { type: String, required: false, default: undefined },
    pauseWhenPageIsHidden: { type: Boolean, required: false, default: undefined },
    cn: { type: Function as PropType<ToasterProps['cn']>, required: false, default: undefined }
  },
  setup (props) {
    return () => (
      <Sonner
        {...props}
        class={['toaster group', props.class]}
        toast-options={{
          classes: {
            toast:
              'group toast group-[.toaster]:rounded-xl group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
              'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton:
              'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
          }
        }}
      />
    )
  }
})

export default Toaster
