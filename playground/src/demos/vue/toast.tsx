import { defineComponent } from 'vue'
import { Button, Toast, toast } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-col">
    <Toast.Provider />
    <div class="demo-row">
      <Button size="sm" variant="secondary" onClick={() => toast('Simple message')}>Default</Button>
      <Button size="sm" variant="secondary" onClick={() => toast.success('Operation completed')}>Success</Button>
      <Button size="sm" variant="secondary" onClick={() => toast.info('New update available')}>Info</Button>
      <Button size="sm" variant="secondary" onClick={() => toast.warning('Please check your settings')}>Warning</Button>
      <Button size="sm" variant="secondary" onClick={() => toast.error('Something went wrong')}>Error</Button>
    </div>
  </div>
))
