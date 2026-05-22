import { Tag, TagGroup } from '@heroui/react'

export default function TagsInputDemo() {
  return (
    <TagGroup aria-label="Tags" selectionMode="single">
      <TagGroup.List>
        <Tag id="default-news">News</Tag>
        <Tag id="default-travel">Travel</Tag>
        <Tag id="default-gaming">Gaming</Tag>
        <Tag id="default-shopping">Shopping</Tag>
      </TagGroup.List>
    </TagGroup>
  )
}
