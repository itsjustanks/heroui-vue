import { Label, Slider } from '@heroui/react'

export default function SliderDemo() {
  return (
    <div className="demo-col">
      <Slider className="w-full max-w-xs" defaultValue={30}>
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb />
        </Slider.Track>
      </Slider>

      <Slider
        className="w-full max-w-xs"
        defaultValue={[200, 700]}
        formatOptions={{ currency: 'USD', style: 'currency' }}
        maxValue={1000}
        minValue={0}
        step={50}
      >
        <Label>Price Range</Label>
        <Slider.Output />
        <Slider.Track>
          {({ state }: { state: { values: number[] } }) => (
            <>
              <Slider.Fill />
              {state.values.map((_, i) => (
                <Slider.Thumb key={i} index={i} />
              ))}
            </>
          )}
        </Slider.Track>
      </Slider>
    </div>
  )
}
