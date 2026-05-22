import { defineComponent } from 'vue'
import { TimeField, Label } from '@itsjustanks/heroui-vue'

type Segment = { part: string; value: string }

export default defineComponent(() => () => (
  <div class="demo-row">
    <TimeField class="w-64" name="time">
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input>
          {{
            default: (segment: Segment) => <TimeField.Segment segment={segment} />,
          }}
        </TimeField.Input>
      </TimeField.Group>
    </TimeField>
  </div>
))
