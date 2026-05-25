import { Checkbox, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox id="render-props-terms">
      {({
    isSelected
  }) => <>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="render-props-terms">
              {isSelected ? "Terms accepted" : "Accept terms"}
            </Label>
            <Description>
              {isSelected ? "Thank you for accepting" : "Please read and accept the terms"}
            </Description>
          </Checkbox.Content>
        </>}
    </Checkbox>);
