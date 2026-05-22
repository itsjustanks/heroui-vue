/**
 * TagGroup + Tag — faithful Vue port of HeroUI v3 `TagGroup` and `Tag`.
 *
 * HeroUI v3 ships these as two separate compound components that cooperate
 * via context. This Vue port keeps the same two-compound API.
 *
 * Compound API — TagGroup:
 *   `TagGroup`          — root (= TagGroupRoot)
 *   `TagGroup.Root`     — TagGroupRoot
 *   `TagGroup.List`     — TagGroupList
 *
 * Compound API — Tag:
 *   `Tag`               — root (= TagRoot)
 *   `Tag.Root`          — TagRoot
 *   `Tag.RemoveButton`  — TagRemoveButton
 *
 * Removed (breaking change from v0):
 *   TagsInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputInput
 *   (replaced by TagGroup/Tag compound API above).
 *
 * Kept (convenience):
 *   TagsInputItemText  → re-exported as TagItemText for label-only use inside TagRoot.
 *   TagsInputInput     → re-exported as TagGroupInput for the free-text input field.
 */
import { TagGroupRoot } from './tags-input'
import { TagGroupList } from './tags-input-list'
import { TagRoot } from './tags-input-item'
import { TagRemoveButton } from './tags-input-item-delete'
import { TagsInputItemText as TagItemText } from './tags-input-item-text'
import { TagsInputInput as TagGroupInput } from './tags-input-input'

/* -------------------------------------------------------------------------------------------------
 * TagGroup compound
 * -----------------------------------------------------------------------------------------------*/
export const TagGroup = Object.assign(TagGroupRoot, {
  Root: TagGroupRoot,
  List: TagGroupList,
})

/* -------------------------------------------------------------------------------------------------
 * Tag compound
 * -----------------------------------------------------------------------------------------------*/
export const Tag = Object.assign(TagRoot, {
  Root:         TagRoot,
  RemoveButton: TagRemoveButton,
})

/* -------------------------------------------------------------------------------------------------
 * Named exports
 * -----------------------------------------------------------------------------------------------*/
export { TagGroupRoot, TagGroupList, TagRoot, TagRemoveButton, TagItemText, TagGroupInput }

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { tagGroupVariants } from '@heroui/styles'
export { tagVariants }      from '@heroui/styles'

export type { TagGroupVariants } from '@heroui/styles'
export type { TagVariants }      from '@heroui/styles'
