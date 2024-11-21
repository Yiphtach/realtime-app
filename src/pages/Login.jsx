import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setSnackbar({ open: true, message: 'Please fill in all fields.', severity: 'warning' });
      return;
    }

    // Simulate API call for login
    if (email === 'user@example.com' && password === 'password') {
      setSnackbar({ open: true, message: 'Login successful!', severity: 'success' });
      onLogin(true); // Pass login state to parent
    } else {
      setSnackbar({ open: true, message: 'Invalid credentials.', severity: 'error' });
    }
  };

  const handleGuestLogin = () => {
    setSnackbar({ open: true, message: 'Logged in as guest.', severity: 'success' });
    onLogin(true); // Simulate guest login
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
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={handleGuestLogin}
          sx={{ marginTop: 2 }}
        >
          Login as Guest
        </Button>
        <Typography align="center" sx={{ marginTop: 2 }}>
          <Link href="/register" underline="hover">
            Create an Account
          </Link>
          {' | '}
          <Link href="/forgot-password" underline="hover">
            Forgot Password?
          </Link>
        </Typography>
      </Box>

      {/* Snackbar for feedback */}
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

export default Login;
