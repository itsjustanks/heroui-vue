import { defineComponent } from 'vue'
import { DateField, Label } from '@itsjustanks/heroui-vue'

type Segment = { part: string; value: string }

export default defineComponent(() => () => (
  <div class="demo-row">
    <DateField class="w-64" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>
          {{
            default: (segment: Segment) => <DateField.Segment segment={segment} />,
          }}
        </DateField.Input>
      </DateField.Group>
    </DateField>
  </div>
))
