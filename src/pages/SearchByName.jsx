import { useState } from 'react';
import { searchMealByName } from '../services/recipeService';

function SearchByName() {
  const [name, setName] = useState(''); // Input for meal name
  const [meals, setMeals] = useState([]); // Results from the API
  const [error, setError] = useState(''); // Error message for feedback

  const handleSearch = async () => {
    if (!name.trim()) {
      setError('Please enter a valid meal name.');
      return;
    }

    try {
      setError(''); // Clear previous errors
      const data = await searchMealByName(name.trim()); // Call service
      if (data && data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No meals found with the given name.');
      }
    } catch (error) {
      console.error('Error searching meal by name:', error);
      setError('An error occurred while searching for meals. Please try again.');
    }
  };

  return (
    <div>
      <h1>Search Meals by Name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter meal name"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ marginBottom: '1rem' }}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '200px' }} />
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchByName;
