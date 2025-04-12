import { useState } from 'react';
import { Search, Lightbulb, Clock, ThermometerSun, Scale, Filter } from 'lucide-react';
import type { CookingTip } from '../types';

// Mock cooking tips data
const COOKING_TIPS: CookingTip[] = [
  {
    id: 1,
    title: 'Perfect Rice Every Time',
    content: 'Rinse rice before cooking to remove excess starch. Use a 1:2 ratio of rice to water for fluffy results. Let it rest after cooking to absorb remaining moisture.',
    category: 'Basics',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906'
  },
  {
    id: 2,
    title: 'Knife Sharpening',
    content: 'A sharp knife is safer than a dull one. Sharpen regularly with a whetstone and hone before each use with a honing steel.',
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1566454419290-57a0589c9b51'
  },
  {
    id: 3,
    title: 'Steak Doneness',
    content: "Use the finger test to check steak doneness: touch your thumb to your index finger and press the base of your thumb - that's how rare steak feels. Moving to middle, ring, and pinky fingers simulates medium-rare, medium, and well-done",
    category: 'Techniques',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba'
  },
  {
    id: 4,
    title: 'Prevent Wooden Boards from Warping',
    content: 'Never soak wooden cutting boards. Clean them with hot water and soap, then dry immediately. Oil them monthly with food-grade mineral oil to prevent cracking.',
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1545167496-c1e5203e6890'
  },
  {
    id: 5,
    title: 'Salting Vegetables',
    content: 'Salt vegetables like eggplant and zucchini before cooking to draw out excess moisture. This prevents sogginess and improves texture when cooking.',
    category: 'Techniques',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999'
  },
  {
    id: 6,
    title: 'Measuring Ingredients',
    content: 'For baking, always measure by weight rather than volume for consistent results. Invest in a kitchen scale for precision.',
    category: 'Basics',
    image: 'https://images.unsplash.com/photo-1516511588859-537dbf1305c0'
  },
  {
    id: 7,
    title: 'Tasting While Cooking',
    content: 'Always taste your food as you cook. Keep a clean spoon nearby to check seasoning and adjust flavors throughout the cooking process.',
    category: 'Basics',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f'
  },
  {
    id: 8,
    title: 'Resting Meat',
    content: 'Always rest meat after cooking. This allows juices to redistribute, keeping the meat moist. Rest steaks for 5-10 minutes, larger roasts for 15-20 minutes.',
    category: 'Techniques',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976'
  }
];

export default function Tips() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'categories'>('grid');
  
  // Get unique categories
  const categories = Array.from(new Set(COOKING_TIPS.map(tip => tip.category)));
  
  // Filter tips based on search query and selected category
  const filteredTips = COOKING_TIPS.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? tip.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cooking Tips & Techniques</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse our collection of professional cooking tips to elevate your culinary skills
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none shadow-md"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Tips
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'}`}
              aria-label="Grid view"
            >
              <Filter className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('categories')}
              className={`p-2 rounded-md ${viewMode === 'categories' ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'}`}
              aria-label="Category view"
            >
              <Lightbulb className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {filteredTips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">No tips found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map(tip => (
              <div key={tip.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tip.image} 
                    alt={tip.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium rounded-full">
                    {tip.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">{tip.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Lightbulb className="h-6 w-6 text-orange-500 mr-2" />
                Essential Kitchen Tips
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full mr-4 text-orange-800 dark:text-orange-100">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Sharp Knives are Safer</h3>
                    <p className="text-gray-600 dark:text-gray-300">Keep your knives sharp - they're actually safer than dull ones and make prep work easier.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full mr-4 text-orange-800 dark:text-orange-100">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Mise en Place</h3>
                    <p className="text-gray-600 dark:text-gray-300">Prepare and organize all ingredients before you start cooking to make the process smoother.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <ThermometerSun className="h-6 w-6 text-orange-500 mr-2" />
                Temperature Control
              </h2>
              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300">Understanding temperature is crucial for cooking:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Let meat rest at room temperature before cooking</li>
                  <li>Preheat your pan before adding ingredients</li>
                  <li>Use a meat thermometer for perfect doneness</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Scale className="h-6 w-6 text-orange-500 mr-2" />
                Seasoning Guidelines
              </h2>
              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300">Master the art of seasoning:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Season in layers throughout cooking</li>
                  <li>Taste as you go</li>
                  <li>Remember that you can add but can't take away</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                <Clock className="h-6 w-6 text-orange-500 mr-2" />
                Time Management
              </h2>
              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300">Efficient cooking requires good timing:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Start with ingredients that take longest to cook</li>
                  <li>Clean as you go</li>
                  <li>Use a timer instead of relying on memory</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
