import { Chip } from '@heroui/react'
import { currentExample } from '../shared'

export default function ChipDemo() {
  const example = currentExample('basic')
  const variant = example === 'variants' ? 'outline' : undefined

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip variant={variant}>Default</Chip>
      <Chip color="accent" variant={variant}>Accent</Chip>
      <Chip color="success" variant={variant}>Success</Chip>
      <Chip color="warning" variant={variant}>Warning</Chip>
      <Chip color="danger" variant={variant}>Danger</Chip>
      {example === 'with-icon' && <Chip startContent={<span aria-hidden="true">★</span>}>Featured</Chip>}
      {example === 'statuses' && <Chip color="success">Online</Chip>}
    </div>
  )
}
