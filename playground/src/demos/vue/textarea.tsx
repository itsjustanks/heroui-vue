import { TextArea } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('basic');
  const fullWidth = example === 'full-width';
  return () => <div class={fullWidth ? 'demo-col' : 'demo-row'}>
      <TextArea aria-label="Quick project update" class={fullWidth ? 'h-32 w-full' : 'h-32 w-96'} placeholder="Share a quick project update..." rows={example === 'rows' ? 6 : undefined} variant={example === 'variants' || example === 'on-surface' ? 'secondary' : 'primary'} fullWidth={fullWidth} defaultValue={example === 'controlled' ? 'Project is on track.' : undefined} />
      {example === 'variants' && <TextArea aria-label="Secondary textarea" class="h-32 w-96" placeholder="Secondary" variant="secondary" />}
    </div>;
});
