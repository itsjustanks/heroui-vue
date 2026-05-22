import { Label, Slider } from '@heroui/react'
import { currentExample } from '../shared'

export default function SliderDemo() {
  const example = currentExample('default')
  const vertical = example === 'vertical'
  const range = example === 'range'

  return (
    <div className="demo-row">
      <Slider
        className={vertical ? 'h-48' : 'w-full max-w-xs'}
        defaultValue={range ? [25, 65] : 30}
        orientation={vertical ? 'vertical' : 'horizontal'}
        isDisabled={example === 'disabled'}
      >
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb />
          {range && <Slider.Thumb />}
        </Slider.Track>
      </Slider>
    </div>
  )
}
