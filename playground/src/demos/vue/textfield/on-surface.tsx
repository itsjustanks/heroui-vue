import { Description, Input, Label, Surface, TextArea, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl p-6">
      <TextField name="name" variant="secondary">
        <Label>Your name</Label>
        <Input class="w-full" placeholder="John" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField name="email" type="email" variant="secondary">
        <Label>Email</Label>
        <Input class="w-full" placeholder="john@example.com" />
      </TextField>
      <TextField name="bio" variant="secondary">
        <Label>Bio</Label>
        <TextArea class="w-full" placeholder="Tell us about yourself..." rows={4} />
        <Description>Minimum 4 rows</Description>
      </TextField>
    </Surface>);
export default OnSurface;
