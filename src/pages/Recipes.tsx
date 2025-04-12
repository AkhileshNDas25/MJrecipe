import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Search, AlertCircle } from 'lucide-react';
import type { Recipe } from '../types';

export default function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [error, setError] = useState<{ message: string; type: string } | null>(null);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  // Validate API key on component mount
  useEffect(() => {
    if (!apiKey || apiKey === 'your_api_key_here') {
      setError({
        message: 'API key is not configured. Please add a valid Spoonacular API key to your .env file.',
        type: 'config'
      });
    } else {
      setError(null);
    }
  }, [apiKey]);
  // Log the API key for debugging (will be masked in production)
  useEffect(() => {
    if (apiKey) {
      console.log('API Key is configured:', apiKey.substring(0, 4) + '...' + apiKey.substring(apiKey.length - 4));
    } else {
      console.error('API Key is not configured');
    }
  }, [apiKey]);

  const { data: recipes = [], isLoading, isError } = useQuery({
    queryKey: ['recipes', query, cuisine, diet],
    queryFn: async () => {
      try {
        // Clear any previous errors
        setError(null);
        
        // Check if API key is valid
        if (!apiKey || apiKey === 'your_api_key_here') {
          throw new Error('Missing or invalid API key');
        }
        
        // Properly encode URL parameters
        const encodedQuery = encodeURIComponent(query);
        const encodedCuisine = cuisine ? encodeURIComponent(cuisine) : '';
        const encodedDiet = diet ? encodeURIComponent(diet) : '';
        
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${encodedQuery}${encodedCuisine ? `&cuisine=${encodedCuisine}` : ''}${encodedDiet ? `&diet=${encodedDiet}` : ''}&number=10`;
        
        console.log('Fetching recipes from:', apiUrl.replace(apiKey, '[REDACTED]'));
        
        const response = await fetch(apiUrl);
        
        // Check for HTTP error responses
        if (!response.ok) {
          if (response.status === 401) {
            setError({
              message: 'Invalid API key. Please check your Spoonacular API key.',
              type: 'auth'
            });
            throw new Error('Invalid API key (401 Unauthorized)');
          } else if (response.status === 402) {
            setError({
              message: 'API quota exceeded. You have reached your daily request limit.',
              type: 'quota'
            });
            throw new Error('API quota exceeded (402 Payment Required)');
          } else {
            setError({
              message: `API request failed with status: ${response.status}`,
              type: 'api'
            });
            throw new Error(`API error: ${response.status}`);
          }
        }
        
        // Log response status for debugging
        console.log('API response status:', response.status);
        
        // Parse JSON response
        let data;
        try {
          data = await response.json();
          console.log('API response data:', data);
        } catch (parseError) {
          console.error('Failed to parse API response:', parseError);
          setError({
            message: 'Failed to parse API response. The server returned invalid data.',
            type: 'parse'
          });
          throw new Error('JSON parse error: ' + String(parseError));
        }
        
        // Check if the response contains an error message from the API
        if (data.code && data.message) {
          const errorMessage = `API Error: ${data.message}`;
          console.error(errorMessage, data);
          setError({
            message: errorMessage,
            type: 'api'
          });
          throw new Error(errorMessage);
        }
        
        // Validate the data structure
        if (!data.results || !Array.isArray(data.results)) {
          console.error('API returned unexpected data structure:', data);
          setError({
            message: 'The API returned an unexpected data format.',
            type: 'format'
          });
          throw new Error('Unexpected data format');
        }
        
        return data.results || [];
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // If no specific error has been set, set a generic one
        if (!error) {
          setError({
            message: 'An unexpected error occurred while fetching recipes.',
            type: 'unknown'
          });
        }
        throw error;
      }
    },
    enabled: !!query && !(error?.type === 'config'),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: query });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full px-6 py-4 text-lg rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex gap-4">
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              >
                <option value="">All Cuisines</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
              </select>

              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              >
                <option value="">All Diets</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
              </select>
            </div>
          </form>

          {/* Error message alert */}
          {error && (
            <div className={`mb-8 p-4 rounded-lg flex items-start gap-3 ${
              error.type === 'auth' || error.type === 'config' 
                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
            }`}>
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{error.message}</p>
                {error.type === 'config' && (
                  <p className="mt-1 text-sm opacity-90">
                    Update your .env file with a valid Spoonacular API key, then restart the development server.
                  </p>
                )}
                {error.type === 'auth' && (
                  <p className="mt-1 text-sm opacity-90">
                    Get a valid API key from <a href="https://spoonacular.com/food-api" className="underline" target="_blank" rel="noopener noreferrer">Spoonacular</a> and add it to your .env file.
                  </p>
                )}
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-8 text-gray-600 dark:text-gray-300">Loading...</div>
          ) : isError && !error ? (
            <div className="text-center py-8 text-red-600 dark:text-red-400">
              Failed to load recipes. Please try again later.
            </div>
          ) : recipes?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{recipe.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{recipe.summary}</p>
                    <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-600 dark:text-gray-300">
              No recipes found. Try a different search!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}