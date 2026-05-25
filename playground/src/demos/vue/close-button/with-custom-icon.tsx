import { CircleXmark, Xmark } from "../../../gravity-icons-vue";
import { CloseButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <CloseButton>
          <CircleXmark />
        </CloseButton>
        <span class="text-xs text-muted">Custom Icon</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <CloseButton>
          <Xmark />
        </CloseButton>
        <span class="text-xs text-muted">Alternative Icon</span>
      </div>
    </div>);
export default WithCustomIcon;
