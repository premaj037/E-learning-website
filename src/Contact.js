import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, e.g., send data to server, show success message
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div  style={{ marginTop: '64px' }}>
      <Container sx={{ py: 5, border: '1px solid #ccc', borderRadius: '5px' }} maxWidth="md">
        <Typography variant="h5" gutterBottom>
         CONTACT US
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
        {submitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Message submitted successfully!
          </Alert>
        )}
      </Container></div>
  );
}

export default Contact;
