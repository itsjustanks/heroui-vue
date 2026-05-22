/**
 * Shadcn/reka-ui compat exports for apps migrating from local `@/components/heroui`
 * wrappers. HeroUI v3 canonical names (`TextArea`, `Breadcrumbs`, `ProgressBar`, …)
 * remain the primary API; these aliases preserve the older import surface.
 */
import BreadcrumbRoot from './breadcrumb/breadcrumb'
import BreadcrumbEllipsis from './breadcrumb/breadcrumb-ellipsis'
import BreadcrumbItem from './breadcrumb/breadcrumb-item'
import BreadcrumbLink from './breadcrumb/breadcrumb-link'
import BreadcrumbList from './breadcrumb/breadcrumb-list'
import BreadcrumbPage from './breadcrumb/breadcrumb-page'
import BreadcrumbSeparator from './breadcrumb/breadcrumb-separator'
import ScrollAreaRoot from './scroll-area/scroll-area'
import { ScrollBar } from './scroll-area/scroll-bar'
import ToggleGroupRoot from './toggle-group/toggle-group'
import ToggleGroupItem from './toggle-group/toggle-group-item'
import TagsInputRoot from './tags-input/tags-input'
import TagsInputInput from './tags-input/tags-input-input'
import TagsInputItemRoot from './tags-input/tags-input-item'
import TagsInputItemDelete from './tags-input/tags-input-item-delete'
import TagsInputItemText from './tags-input/tags-input-item-text'
import { Progress } from './progress/progress'
import { TextArea } from '../textarea'

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Root: BreadcrumbRoot,
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
})

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Root: ScrollAreaRoot,
  Bar: ScrollBar,
})

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
})

export const TagsInputItem = Object.assign(TagsInputItemRoot, {
  Root: TagsInputItemRoot,
  Delete: TagsInputItemDelete,
  Text: TagsInputItemText,
})

export const TagsInput = Object.assign(TagsInputRoot, {
  Root: TagsInputRoot,
  Input: TagsInputInput,
  Item: TagsInputItem,
})

export { Progress, ScrollBar }
export const Textarea = TextArea

export type { TBadgeVariants, TBadgeColor } from './badge-variants'

/** Alias used by Unfold date/time field wrappers. */
export type TDateInputGroupVariants = import('@heroui/styles').DateInputGroupVariants

/** Alias used by Unfold date/time segmented inputs. */
export type TTimeSegment = { part: string; value: string }
