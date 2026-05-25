import { Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-8">
      <TagGroup selectionMode="single" variant="default">
        <Label>Default</Label>
        <TagGroup.List>
          <Tag>News</Tag>
          <Tag>Travel</Tag>
          <Tag>Gaming</Tag>
        </TagGroup.List>
      </TagGroup>

      <TagGroup selectionMode="single" variant="surface">
        <Label>Surface</Label>
        <TagGroup.List>
          <Tag>News</Tag>
          <Tag>Travel</Tag>
          <Tag>Gaming</Tag>
        </TagGroup.List>
      </TagGroup>
    </div>);
