import { Button } from '@heroui/react'

/** Reference React demo — the HeroUI v3 React component, for side-by-side parity. */
export default function ButtonDemo() {
  return (
    <div className="demo-row">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>
  )
}
