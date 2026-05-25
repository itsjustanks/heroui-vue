import type { Color } from "@itsjustanks/heroui-vue";
import { Button, ColorField, ColorSwatch, Description, Form, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const isSubmitting = ref(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.value) {
      return;
    }
    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
      console.log("Color submitted:", {
        color: value.value.toString("hex")
      });
      value.value = null;
      isSubmitting.value = false;
    }, 1500);
  };
  return () => <Form class="flex w-[280px] flex-col gap-4" onSubmit={handleSubmit}>
      <ColorField fullWidth isRequired class="w-full" name="brand-color" value={value.value} onChange={v => value.value = v}>
        <Label>Brand Color</Label>
        <ColorField.Group>
          <ColorField.Prefix>
            <ColorSwatch color={value.value ?? undefined} size="xs" />
          </ColorField.Prefix>
          <ColorField.Input placeholder="#000000" />
        </ColorField.Group>
        <Description>Choose your brand's primary color</Description>
      </ColorField>
      <Button class="w-full" isDisabled={!value.value} isPending={isSubmitting.value} type="submit" variant="primary">
        {isSubmitting.value ? "Saving..." : "Save Color"}
      </Button>
    </Form>;
});
export default FormExample;
