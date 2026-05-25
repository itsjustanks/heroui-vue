import { Tabs } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';

/** React demo — Tabs (HeroUI v3), mirrors the Vue parity demo. */
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('basic');
  const orientation = example === 'vertical' || example === 'secondary-vertical' ? 'vertical' : 'horizontal';
  const variant = example === 'secondary' || example === 'secondary-vertical' ? 'secondary' : undefined;
  return () => <div class="demo-col">
      <Tabs class="w-full max-w-md" orientation={orientation} variant={variant}>
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id="overview">
              Overview
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="analytics">
              Analytics
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="reports" isDisabled={example === 'disabled'}>
              Reports
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel class="pt-4" id="overview">
          <p>View your project overview and recent activity.</p>
        </Tabs.Panel>
        <Tabs.Panel class="pt-4" id="analytics">
          <p>Track your metrics and analyze performance data.</p>
        </Tabs.Panel>
        <Tabs.Panel class="pt-4" id="reports">
          <p>Generate and download detailed reports.</p>
        </Tabs.Panel>
      </Tabs>
    </div>;
});
