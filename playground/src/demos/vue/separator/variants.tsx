import { Separator } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex max-w-md flex-col items-center gap-3">
      <div>Default Variant</div>
      <Separator variant="default" />
      <div>Secondary Variant</div>
      <Separator variant="secondary" />
      <div>Tertiary Variant</div>
      <Separator variant="tertiary" />
    </div>);
