import { Alert } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-col" style={{
  maxWidth: 480
}}>
      <Alert>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>New features available</Alert.Title>
          <Alert.Description>Check out our latest updates including dark mode support.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="accent">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Update available</Alert.Title>
          <Alert.Description>A new version is ready. Please refresh to get the latest features.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Profile updated successfully</Alert.Title>
        </Alert.Content>
      </Alert>
      <Alert status="warning">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Scheduled maintenance</Alert.Title>
          <Alert.Description>Services will be unavailable on Sunday from 2–6 AM UTC.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="danger">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to connect to server</Alert.Title>
          <Alert.Description>Check your internet connection and try refreshing the page.</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>);
