import { Button, Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    alert(`Form submitted with:\n${Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`).join("\n")}`);
  };
  return () => <form class="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Checkbox id="form-notifications" name="notifications" value="on">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox>
          <Checkbox.Content>
            <Label htmlFor="form-notifications">Enable notifications</Label>
          </Checkbox.Content>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox defaultSelected id="form-newsletter" name="newsletter" value="on">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox>
          <Checkbox.Content>
            <Label htmlFor="form-newsletter">Subscribe to newsletter</Label>
          </Checkbox.Content>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox id="form-marketing" name="marketing" value="on">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox>
          <Checkbox.Content>
            <Label htmlFor="form-marketing">Receive marketing updates</Label>
          </Checkbox.Content>
        </div>
      </div>
      <Button class="mt-4" size="sm" type="submit" variant="primary">
        Submit
      </Button>
    </form>;
});
