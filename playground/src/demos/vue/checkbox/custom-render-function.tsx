import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-3">
      <Checkbox id="basic-terms" render={props => <label {...props} data-custom="bar" />}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
      </Checkbox>
      <Label htmlFor="basic-terms">Accept terms and conditions</Label>
    </div>);
export default CustomRenderFunction;
