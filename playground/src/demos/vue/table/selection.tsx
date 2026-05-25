import type { Selection } from "@itsjustanks/heroui-vue";
import { Checkbox, Table } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
const users = [{
  email: "kate@acme.com",
  id: 1,
  name: "Kate Moore",
  role: "CEO",
  status: "Active"
}, {
  email: "john@acme.com",
  id: 2,
  name: "John Smith",
  role: "CTO",
  status: "Active"
}, {
  email: "sara@acme.com",
  id: 3,
  name: "Sara Johnson",
  role: "CMO",
  status: "On Leave"
}, {
  email: "michael@acme.com",
  id: 4,
  name: "Michael Brown",
  role: "CFO",
  status: "Active"
}];
export default defineComponent(() => {
  const selectedKeys = ref(new Set());
  return () => <div class="flex flex-col gap-3">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Table with selection" class="min-w-[600px]" selectedKeys={selectedKeys.value} selectionMode="multiple" onSelectionChange={v => selectedKeys.value = v}>
            <Table.Header>
              <Table.Column class="pr-0">
                <Checkbox aria-label="Select all" slot="selection">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                </Checkbox>
              </Table.Column>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Email</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map(user => <Table.Row key={user.id} id={user.id}>
                  <Table.Cell class="pr-0">
                    <Checkbox aria-label={`Select ${user.name}`} slot="selection" variant="secondary">
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.status}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                </Table.Row>)}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
      <p class="text-sm text-muted">
        Selected:{" "}
        <span class="font-medium">
          {selectedKeys.value === "all" ? "All" : selectedKeys.value.size > 0 ? Array.from(selectedKeys.value).join(", ") : "None"}
        </span>
      </p>
    </div>;
});
export default SelectionDemo;
