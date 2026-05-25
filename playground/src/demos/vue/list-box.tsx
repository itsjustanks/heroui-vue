import { ListBox } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <ListBox aria-label="Fruits" class="w-[220px]" selectionMode="single">
        <ListBox.Item id="apple">
          Apple
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="banana">
          Banana
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="cherry">
          Cherry
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="mango">
          Mango
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="orange">
          Orange
          <ListBox.ItemIndicator />
        </ListBox.Item>
      </ListBox>
    </div>);
