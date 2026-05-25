import { Persons } from "../../../gravity-icons-vue";
import { Button, toast } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex h-full max-w-xl flex-col items-center justify-center">
      <Button size="sm" variant="secondary" onPress={() => {
    toast("You have been invited to join a team", {
      actionProps: {
        children: "Dismiss",
        onPress: () => toast.clear(),
        variant: "tertiary"
      },
      description: "Bob sent you an invitation to join HeroUI team",
      indicator: <Persons />,
      variant: "default"
    });
  }}>
        Show toast
      </Button>
    </div>);
export default Default;
