import { Surface } from '@heroui/react'

export default function SurfaceDemo() {
  return (
    <div className="demo-col">
      <Surface className="p-4">
        <strong>Default surface</strong>
        <p className="m-0 text-sm text-muted">Primary content container.</p>
      </Surface>
      <Surface variant="secondary" className="p-4">
        <strong>Secondary surface</strong>
        <p className="m-0 text-sm text-muted">Subtle grouped content.</p>
      </Surface>
      <Surface variant="tertiary" className="p-4">
        <strong>Tertiary surface</strong>
        <p className="m-0 text-sm text-muted">Low-emphasis section.</p>
      </Surface>
    </div>
  )
}
