import { Avatar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const users = [{
  id: 1,
  image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
  name: "John Doe"
}, {
  id: 2,
  image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
  name: "Kate Wilson"
}, {
  id: 3,
  image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
  name: "Emily Chen"
}, {
  id: 4,
  image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
  name: "Michael Brown"
}, {
  id: 5,
  image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
  name: "Olivia Davis"
}];
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      {/* Basic avatar group */}
      <div class="flex -space-x-2">
        {users.slice(0, 4).map(user => <Avatar key={user.id} class="ring-2 ring-background">
            <Avatar.Image alt={user.name} src={user.image} />
            <Avatar.Fallback>
              {user.name.split(" ").map(n => n[0]).join("")}
            </Avatar.Fallback>
          </Avatar>)}
      </div>

      {/* Avatar group with counter */}
      <div class="flex -space-x-2">
        {users.slice(0, 3).map(user => <Avatar key={user.id} class="ring-2 ring-background">
            <Avatar.Image alt={user.name} src={user.image} />
            <Avatar.Fallback>
              {user.name.split(" ").map(n => n[0]).join("")}
            </Avatar.Fallback>
          </Avatar>)}
        <Avatar class="ring-2 ring-background">
          <Avatar.Fallback class="text-xs">+{users.length - 3}</Avatar.Fallback>
        </Avatar>
      </div>
    </div>);
