import { Avatar, Badge } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const AVATAR_URL = "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg";
export default defineComponent(() => {
  const colors = ["accent", "success", "warning", "danger"] as const;
  return () => <div class="flex items-center gap-6">
      {colors.map(color => <Badge.Anchor key={color}>
          <Avatar>
            <Avatar.Image src={AVATAR_URL} />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
          <Badge color={color} placement="bottom-right" size="sm" />
        </Badge.Anchor>)}
    </div>;
});
export default BadgeDot;
