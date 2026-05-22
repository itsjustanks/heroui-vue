import { Button, Separator, Toolbar } from '@heroui/react'

/** React demo — Toolbar (HeroUI v3), mirrors the Vue parity demo. */
export default function ToolbarDemo() {
  return (
    <div className="demo-row">
      <Toolbar aria-label="Text formatting">
        <Button isIconOnly aria-label="Bold" variant="ghost">B</Button>
        <Button isIconOnly aria-label="Italic" variant="ghost">I</Button>
        <Button isIconOnly aria-label="Underline" variant="ghost">U</Button>
        <Separator />
        <Button aria-label="Copy" variant="ghost">Copy</Button>
        <Button aria-label="Cut" variant="ghost">Cut</Button>
      </Toolbar>
    </div>
  )
}
