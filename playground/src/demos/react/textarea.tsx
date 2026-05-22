import { TextArea } from '@heroui/react'
import { currentExample } from '../shared'

export default function TextAreaDemo() {
  const example = currentExample('basic')
  const fullWidth = example === 'full-width'

  return (
    <div className={fullWidth ? 'demo-col' : 'demo-row'}>
      <TextArea
        aria-label="Quick project update"
        className={fullWidth ? 'h-32 w-full' : 'h-32 w-96'}
        placeholder="Share a quick project update..."
        rows={example === 'rows' ? 6 : undefined}
        variant={example === 'variants' || example === 'on-surface' ? 'secondary' : 'primary'}
        fullWidth={fullWidth}
        defaultValue={example === 'controlled' ? 'Project is on track.' : undefined}
      />
      {example === 'variants' && (
        <TextArea aria-label="Secondary textarea" className="h-32 w-96" placeholder="Secondary" variant="secondary" />
      )}
    </div>
  )
}
