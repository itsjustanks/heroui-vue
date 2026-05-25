import { Description, FieldError, Input, Label, TextArea, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [username, setUsername] = React.useState("");
  const [bio, setBio] = React.useState("");
  const isUsernameInvalid = username.length > 0 && username.length < 3;
  const isBioInvalid = bio.length > 0 && bio.length < 20;
  return () => <div class="flex w-full max-w-64 flex-col gap-4">
      <TextField isRequired isInvalid={isUsernameInvalid} name="username" value={username} onChange={setUsername}>
        <Label>Username</Label>
        <Input placeholder="jane_doe" />
        {isUsernameInvalid ? <FieldError>Username must be at least 3 characters.</FieldError> : <Description>Choose a unique username for your profile.</Description>}
      </TextField>

      <TextField isRequired isInvalid={isBioInvalid} name="bio" value={bio} onChange={setBio}>
        <Label>Bio</Label>
        <TextArea placeholder="Tell us about yourself..." />
        {isBioInvalid ? <FieldError>Bio must contain at least 20 characters.</FieldError> : <Description>Minimum 20 characters ({bio.length}/20).</Description>}
      </TextField>
    </div>;
});
export default Validation;
