<script setup lang="ts">
import {
  Drawer,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerDialog,
  DrawerHeader,
  DrawerHeading,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Drawer>
      <DrawerTrigger as-child>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerBackdrop>
        <DrawerContent placement="right">
          <DrawerDialog>
            <DrawerHeader>
              <DrawerHeading>Drawer Title</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>This is a right drawer built over reka-ui Dialog. It slides in from the side with a smooth CSS transition.</p>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="secondary">Cancel</Button>
              <Button>Confirm</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  </div>
</template>
