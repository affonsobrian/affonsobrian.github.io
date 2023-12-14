'use client';
import {
  FormGroup,
  Stack,
  TextInput,
  TextArea,
  RadioButton,
  Button,
} from '@carbon/react';

function RepoPage() {
  return (
    <FormGroup
      style={{
        maxWidth: '800px',
        width: '80%',
      }}
      legendText="Contact Us"
    >
      <Stack gap={7}>
        <TextInput
          id="fullName"
          labelText="Full Name"
          placeholder="John Doe"
          style={{ width: '100%' }}
        />
        <TextInput
          id="company"
          labelText="Company"
          placeholder="Company LLC"
          style={{ width: '100%' }}
        />
        <TextArea
          id="message"
          labelText="Message"
          placeholder="I'd like to hire a Python developer..."
          style={{ width: '100%' }}
        />
        <Button style={{ width: '100%' }}>Submit</Button>
      </Stack>
    </FormGroup>
  );
}

export default RepoPage;
