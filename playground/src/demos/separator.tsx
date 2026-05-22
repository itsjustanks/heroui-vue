import { Separator } from '@heroui/react'

export default function SeparatorDemo() {
  return (
    <div className="demo-col" style={{ maxWidth: '400px' }}>
      <div>
        <div className="text-medium font-medium">HeroUI v3 Components</div>
        <div className="text-small text-muted mt-1">
          Beautiful, fast and modern React UI library.
        </div>
      </div>
      <Separator className="my-2" />
      <div className="text-small flex h-5 items-center gap-4">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
      <Separator variant="secondary" className="my-2" />
      <div className="text-small text-muted">Secondary variant above</div>
      <Separator variant="tertiary" className="my-2" />
      <div className="text-small text-muted">Tertiary variant above</div>
    </div>
  )
}
