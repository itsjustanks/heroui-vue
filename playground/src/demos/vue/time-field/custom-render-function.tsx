import { Label, TimeField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TimeField class="w-[256px]" name="time" render={props => <div {...props} data-custom="foo" />}>
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
      </TimeField.Group>
    </TimeField>);
