<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Tabs default-value="overview" style="width: 100%; max-width: 400px">
      <TabsList aria-label="Options">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" style="padding-top: 16px">
        <p>View your project overview and recent activity.</p>
      </TabsContent>
      <TabsContent value="analytics" style="padding-top: 16px">
        <p>Track your metrics and analyze performance data.</p>
      </TabsContent>
      <TabsContent value="reports" style="padding-top: 16px">
        <p>Generate and download detailed reports.</p>
      </TabsContent>
    </Tabs>
  </div>
</template>
