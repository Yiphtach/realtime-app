# Realtime-App

## Overview

**Realtime-App** is a full-stack MERN application designed to help users find and save recipes. Users can search for recipes by name, ingredient, or category, save their favorite recipes, and revisit them on a personalized "Saved Recipes" page.

---

## Features

- **Search by Name**: Find meals by their name.
- **Search by Ingredient**: Discover recipes based on available ingredients.
- **Explore Categories**: Browse recipes by meal categories.
- **Random Meal Generator**: Get a random recipe suggestion.
- **Save Recipes**: Save recipes for later viewing on the "Saved Recipes" page.
- **User Authentication**: Register and log in to personalize the app experience.

---

## Technologies Used

### Frontend
- **React** (via Vite) for the user interface.
- **Material-UI** for modern and responsive UI components.
- **Axios** for HTTP requests to the backend.

### Backend
- **Node.js** and **Express** for the RESTful API.
- **MongoDB** for storing user data and saved recipes.
- **Mongoose** for object modeling and data validation.

---

## Installation

### Prerequisites
1. **Node.js** (v14+ recommended)
2. **MongoDB** (local or Atlas cluster)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/realtime-app.git
   cd realtime-app/backend


# Usage
Register or Log In:

Access the app at http://localhost:5173.
Register a new account or log in with existing credentials.
Search for Recipes:

Use the search bar to find recipes by name or ingredient.
Browse categories or explore a random recipe.
Save Recipes:

Click "Save" on any recipe card to add it to your saved recipes.
View Saved Recipes:

Navigate to the "Saved Recipes" page to view or remove saved recipes.

frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # React pages (e.g., Home, SearchByName)
│   ├── services/           # API calls (recipeService.js)
│   ├── styles/             # CSS files
│   ├── App.jsx             # Main app component
│   └── main.jsx            # React entry point
├── vite.config.js          # Vite configuration

backend/
├── src/
│   ├── routes/             # API routes
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose models (e.g., SavedRecipe)
│   ├── config/             # Environment and database setup
│   ├── app.js              # Express app setup
├── .env                    # Environment variables


Future Enhancements
User-Specific Saved Recipes: Associate saved recipes with individual user accounts.
Recipe Reviews: Allow users to add reviews and ratings to recipes.
Advanced Filters: Add filters for dietary restrictions, cooking time, etc.
