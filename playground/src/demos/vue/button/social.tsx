import { Button } from "@itsjustanks/heroui-vue";
import { Icon } from "@iconify/react";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex w-full max-w-xs flex-col gap-3">
      <Button class="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      <Button class="w-full" variant="tertiary">
        <Icon icon="mdi:github" />
        Sign in with GitHub
      </Button>
      <Button class="w-full" variant="tertiary">
        <Icon icon="ion:logo-apple" />
        Sign in with Apple
      </Button>
    </div>);
