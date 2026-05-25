import { Input } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('basic');
  const variant = example === 'variants' || example === 'on-surface' ? 'secondary' : 'primary';
  const fullWidth = example === 'full-width';
  const type = example === 'types' ? 'email' : 'text';
  return () => <div class={fullWidth ? 'demo-col' : 'demo-row'}>
      <Input aria-label={type === 'email' ? 'Email' : 'Name'} class={fullWidth ? 'w-full' : 'w-64'} placeholder={type === 'email' ? 'Enter your email' : 'Enter your name'} type={type} variant={variant} fullWidth={fullWidth} defaultValue={example === 'controlled' ? 'Jane Doe' : undefined} />
      {example === 'variants' && <Input aria-label="Secondary" class="w-64" placeholder="Secondary" variant="secondary" />}
    </div>;
});
