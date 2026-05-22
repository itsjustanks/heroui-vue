<script setup lang="ts">
import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxContent } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Checkbox id="terms">
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxContent>
        <label for="terms">Accept terms and conditions</label>
      </CheckboxContent>
    </Checkbox>

    <Checkbox id="marketing" default-checked>
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxContent>
        <label for="marketing">Send me marketing emails</label>
      </CheckboxContent>
    </Checkbox>

    <Checkbox id="newsletter" variant="secondary">
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxContent>
        <label for="newsletter">Subscribe to newsletter</label>
      </CheckboxContent>
    </Checkbox>

    <Checkbox id="disabled" disabled>
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxContent>
        <label for="disabled">Disabled option</label>
      </CheckboxContent>
    </Checkbox>
  </div>
</template>
