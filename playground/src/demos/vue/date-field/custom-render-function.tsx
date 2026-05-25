import { DateField, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <DateField class="w-[256px]" name="date" render={props => <div {...props} data-custom="date-field" />}>
      <Label render={props => <span {...props} data-custom="date-field-label" />}>Date</Label>
      <DateField.Group render={props => <div {...props} data-custom="date-field-group" />}>
        <DateField.Input render={props => <div {...props} data-custom="date-field-input" />}>
          {segment => <DateField.Segment segment={segment} />}
        </DateField.Input>
      </DateField.Group>
    </DateField>);
export default CustomRenderFunction;
