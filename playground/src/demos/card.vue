<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Card style="width: 320px">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>Standard card appearance (bg-surface)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>The default card variant for most use cases.</p>
      </CardContent>
    </Card>

    <Card variant="secondary" style="width: 320px">
      <CardHeader>
        <CardTitle>Secondary Card</CardTitle>
        <CardDescription>Medium prominence (bg-surface-secondary)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use to draw moderate attention.</p>
      </CardContent>
    </Card>

    <Card variant="tertiary" style="width: 320px">
      <CardHeader>
        <CardTitle>Tertiary Card</CardTitle>
        <CardDescription>Higher prominence (bg-surface-tertiary)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use for primary or featured content.</p>
      </CardContent>
      <CardFooter>
        <span>Footer action</span>
      </CardFooter>
    </Card>
  </div>
</template>
