import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/recipes?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Amazing Recipes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Find the perfect recipe for any occasion from our collection of delicious dishes
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full px-6 py-4 text-lg rounded-full border-2 border-orange-200 dark:border-orange-400 dark:bg-gray-800 dark:text-white focus:border-orange-500 dark:focus:border-orange-300 focus:outline-none shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                alt="Healthy Food"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Healthy Recipes</h3>
              <p className="text-gray-600 dark:text-gray-300">Discover nutritious and delicious meals</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d"
                alt="Quick Meals"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Quick & Easy</h3>
              <p className="text-gray-600 dark:text-gray-300">Perfect for busy weeknight dinners</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
                alt="Community Recipes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Community Favorites</h3>
              <p className="text-gray-600 dark:text-gray-300">Try recipes from our community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}