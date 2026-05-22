import { defineComponent } from 'vue'
import { InputOTP, Label, Link } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="flex w-[280px] flex-col gap-2">
    <div class="flex flex-col gap-1">
      <Label>Verify account</Label>
      <p class="text-sm text-muted">We've sent a code to a****@gmail.com</p>
    </div>
    <InputOTP maxlength={6}>
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
      <p class="text-sm text-muted">Didn't receive a code?</p>
      <Link class="text-foreground underline" href="#">Resend</Link>
    </div>
  </div>
))
