import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Categories from './pages/Categories';
import RandomMeal from './pages/RandomMeal';
import SearchByName from './pages/SearchByName';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="app-content" style={{ padding: '20px' }}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={setIsLoggedIn} />
            }
          />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/saved" element={isLoggedIn ? <SavedRecipes /> : <Navigate to="/" />} />
          <Route
            path="/recipe/:id"
            element={isLoggedIn ? <RecipeDetails /> : <Navigate to="/" />}
          />
          <Route path="/categories" element={isLoggedIn ? <Categories /> : <Navigate to="/" />} />
          <Route path="/random" element={isLoggedIn ? <RandomMeal /> : <Navigate to="/" />} />
          <Route path="/search" element={isLoggedIn ? <SearchByName /> : <Navigate to="/" />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
