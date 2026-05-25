import { Description, Label, Radio, RadioGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <RadioGroup defaultValue="premium" name="plan-custom-indicator">
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <Radio.Control>
          <Radio.Indicator>
            {({
          isSelected
        }) => isSelected ? <span class="text-xs leading-none text-background">✓</span> : null}
          </Radio.Indicator>
        </Radio.Control>
        <Radio.Content>
          <Label>Basic Plan</Label>
          <Description>Includes 100 messages per month</Description>
        </Radio.Content>
      </Radio>
      <Radio value="premium">
        <Radio.Control>
          <Radio.Indicator>
            {({
          isSelected
        }) => isSelected ? <span class="text-xs leading-none text-background">✓</span> : null}
          </Radio.Indicator>
        </Radio.Control>
        <Radio.Content>
          <Label>Premium Plan</Label>
          <Description>Includes 200 messages per month</Description>
        </Radio.Content>
      </Radio>
      <Radio value="business">
        <Radio.Control>
          <Radio.Indicator>
            {({
          isSelected
        }) => isSelected ? <span class="text-xs leading-none text-background">✓</span> : null}
          </Radio.Indicator>
        </Radio.Control>
        <Radio.Content>
          <Label>Business Plan</Label>
          <Description>Unlimited messages</Description>
        </Radio.Content>
      </Radio>
    </RadioGroup>);
export default CustomIndicator;
