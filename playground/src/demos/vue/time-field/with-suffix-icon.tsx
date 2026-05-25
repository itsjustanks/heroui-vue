import { Clock } from "@gravity-ui/icons";
import { Label, TimeField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TimeField class="w-[256px]" name="time">
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        <TimeField.Suffix>
          <Clock class="size-4 text-muted" />
        </TimeField.Suffix>
      </TimeField.Group>
    </TimeField>);
