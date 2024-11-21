import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Sorry, the page you are looking for does not exist. It may have been moved or removed.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ marginTop: '20px' }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
