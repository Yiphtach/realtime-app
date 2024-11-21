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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setSnackbar({ open: true, message: 'All fields are required.', severity: 'warning' });
      return;
    }

    try {
      // Simulate API call for registration
      console.log('User registered:', form);
      setSnackbar({ open: true, message: 'Registration successful!', severity: 'success' });
      navigate('/profile'); // Redirect to profile page
    } catch {
      setSnackbar({ open: true, message: 'Registration failed.', severity: 'error' });
    }
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
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Register
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

export default Registration;
