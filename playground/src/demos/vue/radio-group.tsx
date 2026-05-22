import { defineComponent } from 'vue'
import { Description, Label, Radio, RadioGroup } from '@itsjustanks/heroui-vue'
import { currentExample } from '../shared'

export default defineComponent(() => () => {
  const example = currentExample('basic')
  const disabled = example === 'disabled'
  const orientation = example === 'horizontal' ? 'horizontal' : 'vertical'
  const variant = example === 'variants' || example === 'on-surface' ? 'secondary' : undefined

  return (
    <div class="demo-row">
      <RadioGroup defaultValue="premium" name="plan" isDisabled={disabled} orientation={orientation} variant={variant}>
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <Radio.Control>
          <Radio.Indicator />
        </Radio.Control>
        <Radio.Content>
          <Label>Basic Plan</Label>
          <Description>Includes 100 messages per month</Description>
        </Radio.Content>
      </Radio>
      <Radio value="premium">
        <Radio.Control>
          <Radio.Indicator />
        </Radio.Control>
        <Radio.Content>
          <Label>Premium Plan</Label>
          <Description>Includes 200 messages per month</Description>
        </Radio.Content>
      </Radio>
      <Radio value="business">
        <Radio.Control>
          <Radio.Indicator />
        </Radio.Control>
        <Radio.Content>
          <Label>Business Plan</Label>
          <Description>Unlimited messages</Description>
        </Radio.Content>
      </Radio>
      </RadioGroup>
    </div>
  )
})
