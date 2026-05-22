<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <RadioGroup default-value="premium" name="plan">
      <label style="font-size: 0.875rem; font-weight: 600; margin-bottom: 4px">Plan selection</label>
      <p style="font-size: 0.75rem; color: var(--color-muted, #6b7280); margin-bottom: 8px">Choose the plan that suits you best</p>

      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer">
        <RadioGroupItem value="basic" id="r-basic" />
        <span>
          <span style="font-size: 0.875rem; font-weight: 500; display: block">Basic Plan</span>
          <span style="font-size: 0.75rem; color: var(--color-muted, #6b7280)">Includes 100 messages per month</span>
        </span>
      </label>

      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer">
        <RadioGroupItem value="premium" id="r-premium" />
        <span>
          <span style="font-size: 0.875rem; font-weight: 500; display: block">Premium Plan</span>
          <span style="font-size: 0.75rem; color: var(--color-muted, #6b7280)">Includes 200 messages per month</span>
        </span>
      </label>

      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer">
        <RadioGroupItem value="business" id="r-business" />
        <span>
          <span style="font-size: 0.875rem; font-weight: 500; display: block">Business Plan</span>
          <span style="font-size: 0.75rem; color: var(--color-muted, #6b7280)">Unlimited messages</span>
        </span>
      </label>
    </RadioGroup>
  </div>
</template>
