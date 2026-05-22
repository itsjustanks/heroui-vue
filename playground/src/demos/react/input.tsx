import { Input } from '@heroui/react'
import { currentExample } from '../shared'

export default function InputDemo() {
  const example = currentExample('basic')
  const variant = example === 'variants' || example === 'on-surface' ? 'secondary' : 'primary'
  const fullWidth = example === 'full-width'
  const type = example === 'types' ? 'email' : 'text'

  return (
    <div className={fullWidth ? 'demo-col' : 'demo-row'}>
      <Input
        aria-label={type === 'email' ? 'Email' : 'Name'}
        className={fullWidth ? 'w-full' : 'w-64'}
        placeholder={type === 'email' ? 'Enter your email' : 'Enter your name'}
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        defaultValue={example === 'controlled' ? 'Jane Doe' : undefined}
      />
      {example === 'variants' && (
        <Input aria-label="Secondary" className="w-64" placeholder="Secondary" variant="secondary" />
      )}
    </div>
  )
}
