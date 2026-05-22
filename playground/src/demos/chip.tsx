import { Chip } from '@heroui/react'

export default function ChipDemo() {
  return (
    <div className="demo-row">
      <Chip>Default</Chip>
      <Chip color="accent">Accent</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  )
}
