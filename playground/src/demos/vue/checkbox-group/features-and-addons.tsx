import { Bell, Comment, Envelope } from "../../../gravity-icons-vue";
import { Checkbox, CheckboxGroup, Description, Label } from "@itsjustanks/heroui-vue";
import clsx from "clsx";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const addOns = [{
    description: "Receive updates via email",
    icon: Envelope,
    title: "Email Notifications",
    value: "email"
  }, {
    description: "Get instant SMS notifications",
    icon: Comment,
    title: "SMS Alerts",
    value: "sms"
  }, {
    description: "Browser and mobile push alerts",
    icon: Bell,
    title: "Push Notifications",
    value: "push"
  }];
  return () => <div class="flex w-full flex-col items-center gap-10 px-4 py-8">
      <section class="flex w-full min-w-[320px] flex-col gap-4">
        <CheckboxGroup name="notification-preferences">
          <Label>Notification preferences</Label>
          <Description>Choose how you want to receive updates</Description>
          <div class="flex flex-col gap-2">
            {addOns.map(addon => <Checkbox key={addon.value} value={addon.value} variant="secondary" class={clsx("group relative flex-col gap-4 rounded-3xl bg-surface px-5 py-4 transition-all", "data-[selected=true]:bg-accent/10")}>
                <Checkbox.Control class="absolute top-3 right-4 size-5 rounded-full before:rounded-full">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content class="flex flex-row items-start justify-start gap-4">
                  <addon.icon class="size-5 text-accent" />
                  <div class="flex flex-col gap-1">
                    <Label>{addon.title}</Label>
                    <Description>{addon.description}</Description>
                  </div>
                </Checkbox.Content>
              </Checkbox>)}
          </div>
        </CheckboxGroup>
      </section>
    </div>;
});
export default FeaturesAndAddOns;
