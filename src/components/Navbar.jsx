import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navbar.css"; // Optional for additional styling

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); // Redirect to login
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Realtime-App
        </Typography>
        <Box>
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button color="inherit" component={Link} to="/saved">
                Saved Recipes
              </Button>
              <Button color="inherit" component={Link} to="/categories">
                Categories
              </Button>
              <Button color="inherit" component={Link} to="/random">
                Random Meal
              </Button>
              <Button color="inherit" component={Link} to="/search">
                Search by Name
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/forgot-password">
                Forgot Password
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
