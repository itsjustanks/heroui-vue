import { Input } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [value, setValue] = React.useState("heroui.com");
  return () => <div class="flex w-80 flex-col gap-2">
      <Input aria-label="Domain" placeholder="domain" value={value} onChange={event => setValue(event.target.value)} />
      <span class="px-1 text-sm text-muted">https://{value || "your-domain"}</span>
    </div>;
});
