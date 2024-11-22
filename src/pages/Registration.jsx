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
} from '@mui/material';

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  const handleCloseSnackbar = () => setSnackbar({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSnackbar({ open: true, message: 'User registered successfully!', severity: 'success' });
        navigate('/'); // Redirect to login
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
    handleRegister();
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={form.password}
            onChange={handleChange}
          />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Register
          </Button>
        </form>
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

export default Registration;
