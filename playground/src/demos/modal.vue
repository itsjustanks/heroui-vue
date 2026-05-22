<script setup lang="ts">
import {
  Modal,
  ModalTrigger,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalCloseTrigger,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalFooter,
  Button,
} from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Modal>
      <ModalTrigger as-child>
        <Button variant="secondary">Open Modal</Button>
      </ModalTrigger>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog>
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalHeading>Welcome to HeroUI</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>A beautiful, fast, and modern Vue UI library for building accessible and customizable web applications with ease.</p>
            </ModalBody>
            <ModalFooter>
              <Button style="width: 100%">Continue</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  </div>
</template>
