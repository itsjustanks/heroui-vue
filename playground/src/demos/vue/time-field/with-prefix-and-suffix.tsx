import { ChevronDown, Clock } from "@gravity-ui/icons";
import { Description, Label, TimeField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TimeField class="w-[256px]" name="time">
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Prefix>
          <Clock class="size-4 text-muted" />
        </TimeField.Prefix>
        <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        <TimeField.Suffix>
          <ChevronDown class="size-4 text-muted" />
        </TimeField.Suffix>
      </TimeField.Group>
      <Description>Enter a time</Description>
    </TimeField>);
