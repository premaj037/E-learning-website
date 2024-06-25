import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{
      bgcolor: '#1976d2', // Main background color
      color: '#ffffff',   // Text color
      p: 6,
      mt: 4,              // Top margin
    }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        E-Learning Platform
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        sx={{ mb: 2 }}
      >
        Learn with the best online courses
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 1 }}>
        Follow us:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton
          component={Link}
          href="https://github.com/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: 'inherit' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/company/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: 'inherit' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} E-Learning Platform. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
