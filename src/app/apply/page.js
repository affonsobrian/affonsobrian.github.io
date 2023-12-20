'use client';

import React, { useState, useEffect } from 'react';
import {
  Column,
  Grid,
  Tag,
  Button,
  Modal,
  TextInput,
  FileUploader,
  NumberInput,
  Loading,
  TextAreaSkeleton,
  TagSkeleton,
  ButtonSkeleton,
  ToastNotification,
} from '@carbon/react';

import { getPosition, createApplication } from '../api_client';

function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [positionData, setPositionData] = useState({
    title: '',
    language: '',
    client: '',
    location: '',
    description: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinLink, setLinkedInLink] = useState('');
  const [salaryExpectation, setSalaryExpectation] = useState(0);
  const [resumeFile, setResumeFile] = useState(null);
  const [positionId, setPositionId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      setPositionId(urlParams.get('position'));

      try {
        const data = await getPosition(urlParams.get('position'));
        setPositionData(data);
      } catch (error) {
        console.error('Error fetching position data:', error.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const handleApply = async () => {
    try {
      setSubmitting(true);

      // Perform submission logic using createApplication function
      const createdApplication = await createApplication(
        name,
        email,
        linkedinLink,
        salaryExpectation,
        resumeFile,
        positionId
      );

      console.log('Application created:', createdApplication);

      // Close the modal after successful submission
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating application:', error);
      setSubmissionError('Please fill all fields.');
      setTimeout(() => {
        setSubmissionError(null);
      }, 8000);
    } finally {
      setSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 8000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNotificationClose = () => {
    setSubmissionSuccess(false);
    setSubmissionError(null);
  };

  return (
    <Grid style={{ maxWidth: '800px', padding: '20px' }}>
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        {loading ? (
          <div>
            <TextAreaSkeleton />
            <TagSkeleton />
            <TagSkeleton />
            <TagSkeleton />
            <TextAreaSkeleton />
            <TextAreaSkeleton />
            <TextAreaSkeleton />
            <TextAreaSkeleton />
            <br />
            <ButtonSkeleton />
          </div>
        ) : (
          <>
            <h1>{positionData.title}</h1>
            <Tag>Language: {positionData.language}</Tag>
            <Tag>Client: {positionData.client}</Tag>
            <Tag>Location: {positionData.location}</Tag>
            <div
              dangerouslySetInnerHTML={{ __html: positionData.description }}
              style={{ width: '100%' }}
            />
            <Button
              style={{ width: '100%' }}
              onClick={() => setIsModalOpen(true)}
              disabled={submitting || loading}
            >
              {submitting ? 'Applying...' : 'Apply'}
            </Button>
            <Modal
              open={isModalOpen}
              onRequestClose={closeModal}
              onRequestSubmit={handleApply}
              primaryButtonText="Apply"
            >
              {/* Form in the modal */}
              <div style={{ padding: '16px' }}>
                <h2>Apply for this position</h2>
                <br />
                <TextInput
                  id="name"
                  labelText="Name"
                  value={name}
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginBottom: '16px' }}
                />
                <TextInput
                  id="email"
                  labelText="Email"
                  value={email}
                  placeholder="john.doe@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginBottom: '16px' }}
                />
                <TextInput
                  id="linkedinLink"
                  labelText="LinkedIn"
                  value={linkedinLink}
                  placeholder="https://linkedin.com/in/john.doe"
                  onChange={(e) => setLinkedInLink(e.target.value)}
                  style={{ marginBottom: '16px' }}
                />
                <NumberInput
                  id="salaryExpectation"
                  min={0}
                  max={1000}
                  label="Salary Expectation (USD/h)"
                  invalidText="Number is not valid"
                  hideSteppers={true}
                  onChange={(e) => {
                    setSalaryExpectation(e.target ? Number(e.target.value) : 0);
                  }}
                />
                <br />
                <FileUploader
                  labelTitle="Upload Resume"
                  labelDescription="Max file size is 50 Mb. Only .pdf files are supported."
                  buttonLabel="Add resume"
                  buttonKind="primary"
                  size="md"
                  filenameStatus="edit"
                  accept={['.pdf']}
                  multiple={false}
                  disabled={false}
                  iconDescription="Delete file"
                  name=""
                  onChange={(event) => {
                    const files = event.target.files;
                    setResumeFile(files && files.length > 0 ? files[0] : null);
                  }}
                />
              </div>
              {/* Primary button for the modal */}
            </Modal>
            {submissionSuccess && (
              <ToastNotification
                kind="success"
                title="Success"
                subtitle="Application submitted successfully!"
                caption=""
                style={{
                  position: 'fixed',
                  top: '64px',
                  left: '16px',
                  transform: 'translate(0, 0)',
                  transition: 'transform 0.5s ease-in-out',
                }}
                onCloseButtonClick={handleNotificationClose}
              />
            )}
            {submissionError && (
              <ToastNotification
                kind="error"
                title="Error"
                subtitle={submissionError}
                caption=""
                style={{
                  position: 'fixed',
                  top: '64px',
                  left: '16px',
                  transform: 'translate(0, 0)',
                  transition: 'transform 0.5s ease-in-out',
                }}
                onCloseButtonClick={handleNotificationClose}
              />
            )}
          </>
        )}
      </Column>
    </Grid>
  );
}

export default ApplyPage;
