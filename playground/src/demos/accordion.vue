<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Accordion type="single" collapsible style="width: 100%; max-width: 28rem">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I place an order?</AccordionTrigger>
        <AccordionContent>
          Browse our products, add items to your cart, and proceed to checkout.
          You'll need to provide shipping and payment information to complete your purchase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
        <AccordionContent>
          Yes, you can modify or cancel your order before it's shipped.
          Once your order is processed, you can't make changes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards, including Visa, Mastercard, and American Express.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
