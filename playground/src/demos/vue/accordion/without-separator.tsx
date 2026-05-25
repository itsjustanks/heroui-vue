import { ChevronDown, CreditCard, Receipt, ShoppingBag } from "../../../gravity-icons-vue";
import { Accordion } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const items = [{
  content: "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
  icon: <ShoppingBag />,
  title: "How do I place an order?"
}, {
  content: "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
  icon: <Receipt />,
  title: "Can I modify or cancel my order?"
}, {
  content: "We accept all major credit cards, including Visa, Mastercard, and American Express.",
  icon: <CreditCard />,
  title: "What payment methods do you accept?"
}];
export default defineComponent(() => () => <Accordion hideSeparator class="w-full max-w-md">
      {items.map((item, index) => <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.icon ? <span class="mr-3 size-4 shrink-0 text-muted">{item.icon}</span> : null}
              {item.title}
              <Accordion.Indicator>
                <ChevronDown />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>)}
    </Accordion>);
export default WithoutSeparator;
