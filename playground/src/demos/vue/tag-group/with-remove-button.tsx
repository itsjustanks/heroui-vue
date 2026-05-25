import type { Key } from "@itsjustanks/heroui-vue";
import { CircleXmarkFill } from "../../../gravity-icons-vue";
import { Description, EmptyState, Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  type TagItem = {
    id: string;
    name: string;
  };
  const tags = ref([{
    id: "news",
    name: "News"
  }, {
    id: "travel",
    name: "Travel"
  }, {
    id: "gaming",
    name: "Gaming"
  }, {
    id: "shopping",
    name: "Shopping"
  }]);
  const frameworks = ref([{
    id: "react",
    name: "React"
  }, {
    id: "vue",
    name: "Vue"
  }, {
    id: "angular",
    name: "Angular"
  }, {
    id: "svelte",
    name: "Svelte"
  }]);
  const onRemoveTags = (keys: Set<Key>) => {
    tags.value = tags.value.filter(tag => !keys.has(tag.id));
  };
  const onRemoveFrameworks = (keys: Set<Key>) => {
    frameworks.value = frameworks.value.filter(framework => !keys.has(framework.id));
  };
  return () => <div class="flex flex-col gap-8">
      <div class="w-sm">
        <TagGroup selectionMode="single" onRemove={onRemoveTags}>
          <Label>Default Remove Button</Label>
          <TagGroup.List items={tags.value} renderEmptyState={() => <EmptyState class="p-1">No categories found</EmptyState>}>
            {tag => <Tag key={tag.name} id={tag.id} textValue={tag.name}>
                {tag.name}
              </Tag>}
          </TagGroup.List>
          <Description>Click the X to remove tags</Description>
        </TagGroup>
      </div>

      <div class="w-md">
        <TagGroup selectionMode="single" onRemove={onRemoveFrameworks}>
          <Label>Custom Remove Button</Label>
          <TagGroup.List items={frameworks.value} renderEmptyState={() => <EmptyState class="p-1">No frameworks found</EmptyState>}>
            {tag => <Tag key={tag.id} id={tag.id} textValue={tag.name}>
                {renderProps => <>
                    {tag.name}
                    {!!renderProps.allowsRemoving && <Tag.RemoveButton>
                        <CircleXmarkFill />
                      </Tag.RemoveButton>}
                  </>}
              </Tag>}
          </TagGroup.List>
          <Description>Custom remove button with icon</Description>
        </TagGroup>
      </div>
    </div>;
});
export default TagGroupWithRemoveButton;
