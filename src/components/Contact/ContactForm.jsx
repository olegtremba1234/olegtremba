import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string(),
    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert('This functional is in process! If you have any questions or offers! Please contact me on Email!');
    resetForm();
  };

  return (
    <div className='contact-form-container'>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', subject: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='names-inputs-container'>
              <Field name="firstName">
                {({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    id="first-name-input"
                    label="First Name"
                    variant="standard"
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ marginTop: '20px' }}
                  />
                )}
              </Field>
              <Field name="lastName">
                {({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    id="last-name-input"
                    label="Last Name"
                    variant="standard"
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ marginTop: '20px' }}
                  />
                )}
              </Field>
            </div>
            <Field name="email">
              {({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  id="email-input"
                  label="Email"
                  type="email"
                  variant="standard"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ marginTop: '20px' }}
                />
              )}
            </Field>
            <Field name="subject">
              {({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="subject-input"
                  label="Subject"
                  variant="standard"
                  error={touched.subject && !!errors.subject}
                  helperText={touched.subject && errors.subject}
                  sx={{ marginTop: '20px' }}
                />
              )}
            </Field>
            <Field name="message">
              {({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="message-input"
                  label="Message"
                  multiline
                  rows={4}
                  variant="standard"
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                  sx={{ marginTop: '20px' }}
                />
              )}
            </Field>
            <Button type="submit" variant="contained" sx={{ marginTop: '20px', marginBottom: '50px' }}>Send</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

