import { TextArea } from '@heroui/react'

export default function TextareaDemo() {
  return (
    <div className="demo-col">
      <TextArea
        aria-label="Quick project update"
        className="h-32 w-96"
        placeholder="Share a quick project update…"
      />
      <TextArea
        aria-label="Secondary variant"
        className="h-24 w-96"
        placeholder="Secondary variant"
      />
      <TextArea
        aria-label="Disabled"
        className="h-24 w-96"
        placeholder="Disabled textarea"
        isDisabled
      />
    </div>
  )
}
