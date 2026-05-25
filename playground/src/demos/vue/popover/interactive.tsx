import { Avatar, Button, Popover } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isFollowing = ref(false);
  return () => <div class="flex items-center gap-6">
      <Popover>
        <Popover.Trigger aria-label="User profile">
          <div class="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image alt="Sarah Johnson" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1" />
              <Avatar.Fallback>SJ</Avatar.Fallback>
            </Avatar>
            <div class="flex flex-col">
              <p class="text-sm font-medium">Sarah Johnson</p>
              <p class="text-xs text-muted">@sarahj</p>
            </div>
          </div>
        </Popover.Trigger>
        <Popover.Content class="w-[320px]">
          <Popover.Dialog>
            <Popover.Heading>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <Avatar size="md">
                    <Avatar.Image alt="Sarah Johnson" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1" />
                    <Avatar.Fallback>SJ</Avatar.Fallback>
                  </Avatar>
                  <div>
                    <p class="font-semibold">Sarah Johnson</p>
                    <p class="text-sm text-muted">@sarahj</p>
                  </div>
                </div>
                <Button class="rounded-full" size="sm" variant={isFollowing.value ? "tertiary" : "primary"} onPress={() => isFollowing.value = !isFollowing.value}>
                  {isFollowing.value ? "Following" : "Follow"}
                </Button>
              </div>
            </Popover.Heading>
            <p class="mt-3 text-sm text-muted">
              Product designer and creative director. Building beautiful experiences that matter.
            </p>
            <div class="mt-3 flex gap-4">
              <div>
                <span class="font-semibold">892</span>
                <span class="ml-1 text-sm text-muted">Following</span>
              </div>
              <div>
                <span class="font-semibold">12.5K</span>
                <span class="ml-1 text-sm text-muted">Followers</span>
              </div>
            </div>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>;
});
export default PopoverInteractive;
