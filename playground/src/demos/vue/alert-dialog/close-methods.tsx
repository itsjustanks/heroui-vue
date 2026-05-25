import { defineComponent } from 'vue'

/** Vue port of `alert-dialog/close-methods` is not yet authored.
 *  Upstream React source contains constructs (hooks/types/generics) that the
 *  auto-porter can't yet transform. See React side for the upstream example,
 *  or contribute a Vue version at this path.
 *  @see https://www.heroui.com/docs/react/components/alert-dialog
 */
export default defineComponent(() => () => (
  <div class="demo-col" style={{ color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}>
    <p>Vue port pending — see the React side for the upstream example.</p>
  </div>
))
