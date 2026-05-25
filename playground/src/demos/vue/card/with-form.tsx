import { Button, Card, Form, Input, Label, Link, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert("Form submitted successfully!");
  };
  return () => <Card class="w-full max-w-md">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Enter your credentials to access your account</Card.Description>
      </Card.Header>
      <Form onSubmit={onSubmit}>
        <Card.Content>
          <div class="flex flex-col gap-4">
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="email@example.com" variant="secondary" />
            </TextField>
            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="••••••••" variant="secondary" />
            </TextField>
          </div>
        </Card.Content>
        <Card.Footer class="mt-4 flex flex-col gap-2">
          <Button class="w-full" type="submit">
            Sign In
          </Button>
          <Link class="text-center text-sm" href="#">
            Forgot password?
          </Link>
        </Card.Footer>
      </Form>
    </Card>;
});
