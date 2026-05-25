import { InputOTP, Label, Link, Surface } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="flex w-full flex-col gap-2 rounded-3xl p-6">
      <div class="flex flex-col gap-1">
        <Label>Verify account</Label>
        <p class="text-sm text-muted">We&apos;ve sent a code to a****@gmail.com</p>
      </div>
      <InputOTP maxLength={6} variant="secondary">
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
      <div class="flex items-center gap-[5px] px-1 pt-1">
        <p class="text-sm text-muted">Didn&apos;t receive a code?</p>
        <Link class="text-foreground underline" href="#">
          Resend
        </Link>
      </div>
    </Surface>);
export default OnSurface;
