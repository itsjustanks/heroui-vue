<script setup lang="ts">
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Kate Moore</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>kate@acme.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Smith</TableCell>
          <TableCell>CTO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>john@acme.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sara Johnson</TableCell>
          <TableCell>CMO</TableCell>
          <TableCell>On Leave</TableCell>
          <TableCell>sara@acme.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Michael Brown</TableCell>
          <TableCell>CFO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>michael@acme.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
