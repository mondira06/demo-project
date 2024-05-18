// src/Footer.js
import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.dark',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; 2024 Anotech Solutions Pvt.&nbsp;Ltd. All the rights are reserved  
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
          <Link href="/contact" color="inherit" underline="hover" sx={{ mx: 2 }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
