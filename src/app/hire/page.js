'use client';

import React, { useState } from 'react';
import {
  FormGroup,
  Stack,
  TextInput,
  TextArea,
  Button,
  Column,
  Grid,
  ToastNotification,
} from '@carbon/react';

// Import the sendMessage function
import { sendMessage } from '../api_client';

function RepoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNotificationClose = () => {
    setSubmissionError(null);
    setSubmissionSuccess(false);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      await sendMessage(formData.fullName, formData.company, formData.email, formData.message);
      setSubmissionSuccess(true);
      // Optionally, you can reset the form after successful submission
      setFormData({
        fullName: '',
        company: '',
        email: '',
        message: '',
      });
      setTimeout(() => {
        window.location.href = window.location.href.replace("/hire", '');
      }, 8000);
    } catch (error) {
      setSubmissionSuccess(false);
      setSubmissionError("Please fill all fields.");
      setTimeout(() => {
        handleNotificationClose();
      }, 8000);
      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid>
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
      <div style={{ display: "grid", justifyContent:'center', padding: '20px'}}>
        <h1>Find Engineers</h1>
        <h4>Share your information below, and we will get in touch with you soon</h4>
        {/* <TableContainer
          title="Contact Us"
          description="Share your information below, and we'll get in touch with you soon"
          style={{maxWidth: '800px',
          width: '80%'}}
        > */}
            <FormGroup
              style={{
                maxWidth: '820px',
                width: '100%',
              }}
            >
              <Stack gap={7}>
                <TextInput
                  id="fullName"
                  labelText="Full Name"
                  placeholder="John Doe"
                  style={{ width: '100%' }}
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  required
                />
                <TextInput
                  id="company"
                  labelText="Company"
                  placeholder="Company LLC"
                  style={{ width: '100%' }}
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                />
                <TextInput
                  id="email"
                  labelText="Email"
                  placeholder="john.doe@company.com"
                  style={{ width: '100%' }}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
                <TextArea
                  id="message"
                  labelText="Message"
                  placeholder="I'd like to hire a Python developer..."
                  style={{ width: '100%' }}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                />
                <Button style={{ width: '100%' }} onClick={handleSubmit} disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </Button>
                {submissionError && (
                  <ToastNotification
                    kind="error"
                    title="Error"
                    subtitle={submissionError}
                    caption=""
                    style={{ position: 'fixed', top: '64px', left: '16px', transform: 'translate(0, 0)', transition: 'transform 0.5s ease-in-out' }}
                    onCloseButtonClick={handleNotificationClose}
                  />
                )}
                {submissionSuccess && (
                  <ToastNotification
                    kind="success"
                    title="Success"
                    subtitle="Message sent successfully! Redirecting you to the home page."
                    caption=""
                    style={{ position: 'fixed', top: '64px', left: '16px', transform: 'translate(0, 0)', transition: 'transform 0.5s ease-in-out' }}
                  />
                )}
              </Stack>
            </FormGroup>
        {/* </TableContainer> */}
        </div>
      </Column>
    </Grid>
  );
}

export default RepoPage;
