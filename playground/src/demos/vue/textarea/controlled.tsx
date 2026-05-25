import { Description, TextArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [value, setValue] = React.useState("");
  return () => <div class="flex w-96 flex-col gap-2">
      <TextArea aria-describedby="textarea-controlled-description" aria-label="Announcement" placeholder="Compose an announcement..." value={value} onChange={event => setValue(event.target.value)} />
      <Description id="textarea-controlled-description">
        Characters: {value.length} / 280
      </Description>
    </div>;
});
export default Controlled;
