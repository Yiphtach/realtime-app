# Realtime-App: Recipe Finder

**Description**: Realtime-App is a recipe discovery application that allows users to search for recipes based on ingredients they have at home. It prioritizes a simple, visually appealing design with real-time data updates, making it quick and easy to find recipes tailored to what users already have.

---

## Project Outline

### Core Stack and Tools
- **Frontend Framework**: React
- **Styling**: CSS Flexbox and/or CSS Grid
- **CSS/Component Library**: MUI (or Tailwind, Bulma, or Chakra)
- **Data Source**: 1-2 third-party APIs (e.g., Spoonacular for recipes)
- **Backend for Securing Keys**: Node.js/Express with endpoints for accessing APIs that require keys
- **Deployment**: Frontend on Vercel or Netlify, Backend on Heroku or DigitalOcean

---

### Wireframes
Creating wireframes early in the design process helps ensure a clear, intuitive layout.

1. **Homepage**:
   - **Top Section**: A search bar where users can enter ingredients.
   - **Search Results**: Displays a list of recipe cards with each card showing the recipe image, title, and a brief description.
   - **Save Button**: A button on each recipe card allowing users to save recipes for later.

   # Homepage
Allows users to search for recipes based on ingredients.

-----------------------------------------
|              Realtime-App             |
|   [Logo]      [Saved Recipes]         |
-----------------------------------------

[Enter Ingredients Here]  [Search Button]

-----------------------------------------
|             Recipe Results            |
|                                       |
|  +-------------------+   +-----------+|
|  |   Recipe Image    |   | Recipe    | |
|  |    Recipe Title   |   | Image     | |
|  | Brief Description |   | Recipe    | |
|  |     [Save]        |   | Title     | |
|  +-------------------+   | Brief     | |
|                           | Description |
|                           |   [Save]    |
-----------------------------------------

**Components**:
    - **Header**: Contains app name or logo on the left, and a "Saved Recipes" link on the right.
    - **Search Section**: Input field for entering ingredients with a search button.
    - **Recipe Results**: A grid of recipe cards displaying each recipe’s image, title, brief description, and a "Save" button for each card.


2. **Saved Recipes Page**:
   - **Saved List**: Displays saved recipes in a card format similar to the search results, with the option to remove items.
   - **Navigation**: Button or link to return to the homepage for more searches.


   # Saved Recipes Page
Displays recipes saved by the user.

-----------------------------------------
|              Realtime-App             |
|   [Logo]      [Search Recipes]        |
-----------------------------------------

-----------------------------------------
|           Saved Recipes List          |
|                                       |
|  +-------------------+   +-----------+|
|  |   Recipe Image    |   | Recipe    | |
|  |    Recipe Title   |   | Image     | |
|  |     [Remove]      |   | Recipe    | |
|  +-------------------+   | Title     | |
|                           | [Remove]   |
-----------------------------------------

**Components**:
    **Header**: Similar to the homepage header with app name/logo and a link to "Search Recipes."
    **Saved Recipes List**: A grid layout similar to the homepage, showing saved recipe cards with each card including the recipe image, title, and a "Remove" button.


3. **Recipe Details Modal** (Optional):
   - **Details**: On clicking a recipe card, a modal opens with full recipe details like ingredients, instructions, and nutritional information.
   - **Save Button**: Allows users to save the recipe if they haven’t already.

   # Recipe Details Modal (Optional)
Shows detailed information about a recipe when clicked.

-----------------------------------------
|               Recipe Title            |
-----------------------------------------
|                                       |
|              [Recipe Image]           |
|                                       |
-----------------------------------------
| Ingredients                           |
| - Ingredient 1                        |
| - Ingredient 2                        |
| - ...                                 |
|                                       |
| Instructions                          |
| 1. Step 1                             |
| 2. Step 2                             |
| - ...                                 |
|                                       |
| Nutritional Info (optional)           |
| - Calories: ...                       |
| - Fat: ...                             |
-----------------------------------------
|                [Save]   [Close]       |
-----------------------------------------


---

**Components**:
    **Modal Structure**: A centered, pop-up modal overlaid on the page background.
    **Content**:
        **Recipe Title**: Displayed at the top.
        **Recipe Image**: Large image below the title.
        **Ingredients List**: A scrollable list of ingredients.
        **Instructions**: A detailed list of cooking steps.
        **Nutritional Information**: (Optional) displays nutritional details.
    **Actions**: "Save" button if the recipe is not already saved, and "Close" button or icon to exit the modal.

### Key Development Steps

### Entity Relationship Diagram (ERD)

For this project, we’ll use a lightweight data solution such as Airtable or local storage for saved recipes, keeping the structure simple:

1. **User** (Optional for future versions)
   - *Fields*: `user_id`, `username`, `email`, `password_hash`
   
2. **Recipe**
   - *Fields*: `recipe_id`, `title`, `image_url`, `summary`, `ingredients`, `instructions`, `nutritional_info`
   - *Relationships*: A user can save multiple recipes (one-to-many relationship)

3. **User_Saved_Recipes** (If using user accounts)
   - *Fields*: `user_id`, `recipe_id` (Composite Key)

This ERD keeps the app’s data requirements minimal. Currently, the only data storage is for saved recipes. Adding a `User` table in future versions would enable a more personalized experience with account-specific saved recipes.

---

### Key Development Steps

#### User Stories and MVP Functionality
Develop features incrementally, focusing on one story at a time.

**User Stories**:
1. **As a user, I want to search recipes based on ingredients I have at home.**
2. **As a user, I want to save recipes for easy access later.**
3. **As a user, I want to easily navigate between search results and saved recipes.**
4. **As a user, I want a responsive, visually cohesive UI with subtle animations.**

#### Implementing Dynamic UI and Data Visualization
- **Recipe Cards**: Hover effects and smooth transitions.
- **Real-Time Data**: Ingredient-based recipe search updates in real time.
- **Data Visualization**: Nutritional breakdowns displayed in chart format for selected recipes.

---

### Technical Details
- **Third-Party API Integration**: Use AJAX with a backend proxy server.
- **Data Storage**: Use Airtable for saved recipes.
- **API Handling**: Implement error management and logging.

---

### README Documentation Requirements
- **App Name and Logo**: “Realtime-App - Quick and Simple Recipes Based on What You Have”
- **Screenshot**: Add a screenshot of the landing page.
- **Getting Started**:
  - Link to the deployed app, planning materials, and backend repository.
- **Attributions**: List resources, libraries, and APIs.
- **Technologies Used**: React, Express, CSS (with Flex/Grid), MUI.
- **Next Steps**: Advanced filters, user accounts, and social sharing.

---

### Development Checklist

#### Frontend Application
- [x] **React Component Structure**: Modular components like `Search`, `RecipeCard`, and `SavedRecipes`.
- [x] **Styling**: MUI with custom CSS for Flex/Grid layout.
- [x] **AJAX Requests**: Use Axios or Fetch for AJAX requests.
- [x] **State Management**: Use `useState` and `useEffect`.
- [x] **Error Handling**: Display user-friendly error messages.

#### UI/UX Requirements
- [x] **Visual Theme**: Consistent color palette and layout.
- [x] **Navigation**: Clear, accessible navigation bar.
- [x] **Accessibility**: High contrast and alt text for images.
- [x] **Responsive Layout**: Test on multiple screen sizes.
- [x] **Animated UI**: Animate recipe cards, loading spinners, and save confirmations.

#### Backend Application
- [x] **Express Routes**: Build routes for API calls.
- [x] **Environment Variables**: Use `dotenv` to secure API keys.
- [x] **Testing**: Add error handling and logging.

#### Deployment
- [x] **Frontend**: Deploy on Vercel or Netlify.
- [x] **Backend**: Deploy on Heroku or DigitalOcean.

