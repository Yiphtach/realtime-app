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


### Entity Relationship Diagram (ERD)

For this project, we’ll use a lightweight data solution such as Airtable or local storage for saved recipes, keeping the structure simple:

1. **User** (Optional for future versions)
   - *Fields*: `user_id`, `username`, `email`, `password_hash`
   
2. **Recipe**
   - *Fields*: `recipe_id`, `title`, `image_url`, `summary`, `ingredients`, `instructions`, `nutritional_info`
   - *Relationships*: A user can save multiple recipes (one-to-many relationship)

3. **User_Saved_Recipes** (If using user accounts)
   - *Fields*: `user_id`, `recipe_id` (Composite Key)

   # Entity Relationship Diagram (ERD) for Realtime-App

## User (Optional for Future Versions)
- **Description**: Stores user information for account-based features. 
  - Used to associate saved recipes with individual users if account functionality is implemented.

----------------------------------------------
|  Field Name       | Data Type     | Notes       |
|-------------------|---------------|-------------|
|  user_id          | UUID          | Primary Key, Unique identifier for each user |
|  username         | String        | Unique, Required, Display name for the user   |
|  email            | String        | Unique, Required, User’s email address        |
|  password_hash    | String        | Required, Hashed password for user security   |
|  created_at       | Timestamp     | Required, Auto-generated on user creation     |
|  updated_at       | Timestamp     | Auto-generated on updates to user info        |
----------------------------------------------

## Recipe
- **Description**: Stores information for each recipe, including basic details, ingredients, instructions, and optional nutritional data.

----------------------------------------------
|  Field Name       | Data Type     | Notes       |
|-------------------|---------------|-------------|
|  recipe_id        | UUID          | Primary Key, Unique identifier for each recipe |
|  title            | String        | Required, Title of the recipe                   |
|  image_url        | String        | URL to an image representing the recipe        |
|  summary          | Text          | Brief description or summary of the recipe     |
|  ingredients      | JSON Array    | List of ingredients required                   |
|  instructions     | Text          | Step-by-step instructions for cooking          |
|  nutritional_info | JSON          | Optional, Nutritional information (e.g., calories, fat, protein) |
|  source_url       | String        | Optional, Original URL for reference or full details |
|  created_at       | Timestamp     | Auto-generated on recipe creation              |
----------------------------------------------

## User_Saved_Recipes
- **Description**: Junction table that links users with saved recipes, enabling many-to-many relationships between users and recipes.
  - Allows users to save multiple recipes, and each recipe can be saved by multiple users.

----------------------------------------------
|  Field Name       | Data Type     | Notes       |
|-------------------|---------------|-------------|
|  user_id          | UUID          | Foreign Key, References User(user_id)         |
|  recipe_id        | UUID          | Foreign Key, References Recipe(recipe_id)      |
|  saved_at         | Timestamp     | Auto-generated timestamp of when the recipe was saved |
----------------------------------------------

## Relationships
- **User ↔ Recipe (Many-to-Many)**: 
  - Each user can save multiple recipes.
  - Each recipe can be saved by multiple users.
  - Relationship managed via `User_Saved_Recipes` junction table.

## Example Usage
- **User** `user_id` is linked to recipes through the `User_Saved_Recipes` table.
- **Recipe** details are pulled using `recipe_id` and displayed with `title`, `image_url`, and `summary`.
- **Ingredients** and **instructions** fields are rendered in recipe details for user guidance.

---

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
- **Third-Party API Integration**: Using AJAX with a backend proxy server.
- **Data Storage**: Using Airtable for saved recipes.
- **API Handling**: Implementing error management and logging.

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