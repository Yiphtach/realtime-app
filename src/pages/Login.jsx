import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCloseSnackbar = () => setSnackbar({ open: false, message: '', severity: 'success' });

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user info
        setSnackbar({ open: true, message: 'Login successful!', severity: 'success' });
        onLogin(true); // Update login state
        navigate('/profile'); // Redirect to profile
      } else {
        const error = await response.json();
        setSnackbar({ open: true, message: error.message, severity: 'error' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Something went wrong. Please try again.', severity: 'error' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
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
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
        <Typography align="center" sx={{ marginTop: 2 }}>
          <Link href="/register" underline="hover">
            Create an Account
          </Link>
        </Typography>
      </Box>
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
