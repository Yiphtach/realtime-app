import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar, Alert } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleCloseSnackbar = () => setSnackbar({ open: false, message: '', severity: 'success' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setSnackbar({ open: true, message: 'Please enter your email.', severity: 'warning' });
      return;
    }

    // Simulate sending a password reset email
    setSnackbar({
      open: true,
      message: 'Password reset link sent to your email.',
      severity: 'success',
    });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box
        sx={{
          boxShadow: 3,
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Send Reset Link
          </Button>
        </form>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ForgotPassword;
