import { InputOTP, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex w-[280px] flex-col gap-2">
      <Label>Enter PIN</Label>
      <InputOTP maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>
    </div>);
