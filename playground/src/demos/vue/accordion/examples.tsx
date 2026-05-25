import { defineComponent } from 'vue'
import { Accordion } from '@itsjustanks/heroui-vue'
import { currentExample, faqItems } from '../../shared'

function AccordionList({ extraTrigger, rootProps = {} }: { extraTrigger?: boolean; rootProps?: Record<string, unknown> }) {
  return (
    <Accordion class="w-full max-w-md" type="single" collapsible {...rootProps}>
      {faqItems.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {extraTrigger ? <span class="demo-icon">{index + 1}</span> : null}
              {item.title}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default defineComponent(() => () => {
  const example = currentExample()

  if (example === 'multiple') return <AccordionList rootProps={{ type: 'multiple' }} />
  if (example === 'disabled') return <AccordionList rootProps={{ disabled: true }} />
  if (example === 'without-separator') return <AccordionList extraTrigger rootProps={{ hideSeparator: true }} />
  if (example === 'surface') return <AccordionList rootProps={{ variant: 'surface' }} />
  if (example === 'custom-indicator' || example === 'faq' || example === 'custom-styles') return <AccordionList extraTrigger />
  if (example === 'controlled' || example === 'custom-render-function') return <AccordionList />

  return <AccordionList />
})
