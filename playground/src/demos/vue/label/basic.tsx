import { Input, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-1">
      <Label htmlFor="name">Name</Label>
      <Input class="w-64" id="name" placeholder="Enter your name" type="text" />
    </div>);
export default Basic;
