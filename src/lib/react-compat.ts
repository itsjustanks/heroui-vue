import type { HTMLAttributes, PropType } from 'vue'
import { cn } from './utils'

export const reactClassProps = {
  class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  className: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
}

export const reactDisabledProps = {
  disabled: { type: Boolean as PropType<boolean | undefined>, default: undefined },
  isDisabled: { type: Boolean as PropType<boolean | undefined>, default: undefined }
}

export function reactClass (props: { class?: HTMLAttributes['class'], className?: HTMLAttributes['class'] }) {
  return cn(props.class, props.className)
}

export function reactDisabled (props: { disabled?: boolean, isDisabled?: boolean }) {
  return props.isDisabled ?? props.disabled
}

export function reactPressAttrs (attrs: Record<string, unknown>) {
  const next = { ...attrs }
  const onPress = next.onPress

  delete next.onPress
  if (onPress && !next.onClick) next.onClick = onPress

  return next
}
