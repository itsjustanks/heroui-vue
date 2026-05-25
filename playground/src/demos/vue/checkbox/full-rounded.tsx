import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <Label class="text-muted">Rounded checkboxes</Label>
        <Checkbox class="[&_[data-slot='checkbox-default-indicator--checkmark']]:size-2" name="small-rounded">
          <Checkbox.Control class="size-3 rounded-full before:rounded-full">
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label>Small size</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
      <div class="flex flex-col gap-3">
        <Checkbox name="default-rounded">
          <Checkbox.Control class="size-4 rounded-full before:rounded-full">
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label>Default size</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
      <div class="flex flex-col gap-3">
        <Checkbox name="large-rounded">
          <Checkbox.Control class="size-5 rounded-full before:rounded-full">
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label>Large size</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
      <div class="flex flex-col gap-3">
        <Checkbox class="[&_[data-slot='checkbox-default-indicator--checkmark']]:size-4" name="xl-rounded">
          <Checkbox.Control class="size-6 rounded-full before:rounded-full">
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label>Extra large size</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
    </div>);
export default FullRounded;
