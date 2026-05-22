import { ToggleButton, ToggleButtonGroup } from '@heroui/react'

export default function ToggleGroupDemo() {
  return (
    <div className="demo-row">
      <ToggleButtonGroup selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" id="bold">B</ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" id="italic">
          <ToggleButtonGroup.Separator />
          I
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" id="underline">
          <ToggleButtonGroup.Separator />
          U
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
