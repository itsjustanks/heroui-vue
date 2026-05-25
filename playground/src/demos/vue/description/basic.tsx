import { Description, Input, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-1">
      <Label htmlFor="email">Email</Label>
      <Input aria-describedby="email-description" class="w-64" id="email" placeholder="you@example.com" type="email" />
      <Description id="email-description">
        We'll never share your email with anyone else.
      </Description>
    </div>);
export default Basic;
