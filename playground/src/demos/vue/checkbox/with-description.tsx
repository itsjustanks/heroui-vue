import { Checkbox, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox id="description-notifications">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="description-notifications">Email notifications</Label>
        <Description>Get notified when someone mentions you in a comment</Description>
      </Checkbox.Content>
    </Checkbox>);
