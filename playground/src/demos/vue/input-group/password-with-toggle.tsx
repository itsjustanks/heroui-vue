import { Eye, EyeSlash } from "../../../gravity-icons-vue";
import { Button, InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isVisible = ref(false);
  return () => <TextField class="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" type={isVisible.value ? "text" : "password"} value={isVisible.value ? "87$2h.3diua" : "••••••••"} />
        <InputGroup.Suffix class="pr-0">
          <Button isIconOnly aria-label={isVisible.value ? "Hide password" : "Show password"} size="sm" variant="ghost" onPress={() => isVisible.value = !isVisible.value}>
            {isVisible.value ? <Eye class="size-4" /> : <EyeSlash class="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>;
});
export default PasswordWithToggle;
