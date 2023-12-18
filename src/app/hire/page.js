'use client';
import {
  FormGroup,
  Stack,
  TextInput,
  TextArea,
  RadioButton,
  Button,
  TableContainer,
  Column,
  Grid,
} from '@carbon/react';

function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <TableContainer
          title="Contact Us"
          description="Share your information below, and we'll get in touch with you soon"
        >
          <FormGroup
            style={{
              maxWidth: '800px',
              width: '80%',
            }}
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
              <TextInput
                id="email"
                labelText="Email"
                placeholder="john.doe@company.com"
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
        </TableContainer>
      </Column>
    </Grid>
  );
}

export default RepoPage;
