import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AboutPage() {
  return (
    <div style={{ marginTop: '64px' }}>
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1">
            Our e-learning platform aims to provide high-quality online courses to learners around the globe. We focus on delivering engaging content that enhances learning experiences across various disciplines.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            At our core, we believe in democratizing education and making it accessible to everyone, anywhere, anytime. Our platform connects learners with expert instructors and provides a seamless learning environment.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To empower individuals through education, offering a diverse range of courses that cater to different interests and skill levels. We strive to foster a community of lifelong learners who are passionate about continuous growth and development.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Through innovation and collaboration, we aim to revolutionize online education, ensuring that every learner can achieve their goals and reach their full potential.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          For any inquiries or partnerships, please contact us at <a href="/contact">Contact Us</a>.
        </Typography>
      </Box>
    </Container></div>
  );
}

export default AboutPage;
