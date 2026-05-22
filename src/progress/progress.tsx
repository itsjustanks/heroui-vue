import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ProgressIndicator, ProgressRoot, type ProgressRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Progress — HeroUI-Vue progress bar over reka-ui `ProgressRoot` /
 * `ProgressIndicator`. HeroUI `progress-bar.css`: a `rounded-full` track on a
 * neutral surface with a brand-coloured fill that transitions smoothly.
 * Tokens adapted to the repo (`bg-secondary` track, `bg-primary` indicator).
 *
 * Faithful port of `shadcn/progress` — only the `<script setup>` → `setup()`
 * and `<template>` → JSX syntax changes; props/behaviour are identical.
 */
export const Progress = defineComponent({
  name: 'ProgressBar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    indicatorClass: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    modelValue: { type: [Number, null] as PropType<ProgressRootProps['modelValue']>, default: 0 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ProgressRoot
        {...attrs}
        modelValue={props.modelValue}
        class={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
          props.class
        )}
      >
        <ProgressIndicator
          class={cn('h-full w-full flex-1 rounded-full bg-primary transition-all', props.indicatorClass)}
          style={`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`}
        />
        {slots.default?.()}
      </ProgressRoot>
    )
  }
})

export default Progress
