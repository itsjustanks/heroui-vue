import { Alert } from '@heroui/react'

export default function AlertDemo() {
  return (
    <div className="demo-col">
      <Alert>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>New features available</Alert.Title>
          <Alert.Description>Dark mode support and improved accessibility have landed.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Profile updated successfully</Alert.Title>
        </Alert.Content>
      </Alert>
      <Alert status="danger">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to connect to server</Alert.Title>
          <Alert.Description>We're experiencing connection issues. Please try again.</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  )
}
