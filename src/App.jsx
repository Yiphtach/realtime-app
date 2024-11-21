import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Categories from './pages/Categories';
import RandomMeal from './pages/RandomMeal';
import SearchByName from './pages/SearchByName';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound'; // Optional 404 Page

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  return (
    <Router>
      {/* Navbar with dynamic login/logout state */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Main Content Area */}
      <div className="app-content" style={{ padding: '20px' }}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/login"
            element={<Navigate to="/" />}
          />
          <Route
            path="/register"
            element={<div>Registration Page (Coming Soon)</div>}
          />
          <Route
            path="/forgot-password"
            element={<div>Forgot Password Page (Coming Soon)</div>}
          />

          {/* Protected Routes */}
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/saved" element={isLoggedIn ? <SavedRecipes /> : <Navigate to="/" />} />
          <Route
            path="/recipe/:id"
            element={isLoggedIn ? <RecipeDetails /> : <Navigate to="/" />}
          />
          <Route
            path="/categories"
            element={isLoggedIn ? <Categories /> : <Navigate to="/" />}
          />
          <Route
            path="/random"
            element={isLoggedIn ? <RandomMeal /> : <Navigate to="/" />}
          />
          <Route
            path="/search"
            element={isLoggedIn ? <SearchByName /> : <Navigate to="/" />}
          />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
