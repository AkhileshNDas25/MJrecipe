import { useState } from 'react';
import { Heart, MessageCircle, Share2, BookmarkIcon, Clock } from 'lucide-react';
import type { CommunityPost } from '../types';

// Mock community posts data
const SAMPLE_POSTS: CommunityPost[] = [
  {
    id: '1',
    title: "Homemade Pizza Masterpiece",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    recipe: "My secret pizza recipe includes a 72-hour fermented dough and a blend of three different cheeses.",
    createdAt: "2024-03-10",
    tags: ['Italian', 'Dinner', 'Weekend'],
    likes: 45,
    comments: 12
  },
  {
    id: '2',
    title: "Perfect Chocolate Cake",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    recipe: "The best chocolate cake recipe uses Dutch-processed cocoa and coffee to enhance the flavor.",
    createdAt: "2024-03-09",
    tags: ['Dessert', 'Baking', 'Chocolate'],
    likes: 72,
    comments: 18
  },
  {
    id: '3',
    title: "Thai Green Curry from Scratch",
    author: "Michael Wong",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    recipe: "Making your own curry paste takes time but the flavor is incomparable to store-bought versions.",
    createdAt: "2024-03-08",
    tags: ['Thai', 'Spicy', 'Dinner'],
    likes: 34,
    comments: 8
  }
];

export default function Community() {
  const [posts, setPosts] = useState<CommunityPost[]>(SAMPLE_POSTS);
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    recipe: '',
    image: '',
  });
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags
  const allTags = posts.flatMap(post => post.tags || []);
  const uniqueTags = Array.from(new Set(allTags));
  
  // Filter posts based on selected tag
  const filteredPosts = filter 
    ? posts.filter(post => post.tags?.includes(filter)) 
    : posts;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: CommunityPost = {
      id: Date.now().toString(),
      author: "Current User", // In a real app, this would come from auth
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      tags: ['New'],
      ...newPost
    };
    setPosts([post, ...posts]);
    setIsCreating(false);
    setNewPost({ title: '', recipe: '', image: '' });
  };

  const toggleLike = (postId: string) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Community Recipes</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our culinary community and share your favorite recipes and cooking experiences
            </p>
          </div>
          
          {uniqueTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === null
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All Posts
              </button>
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === tag
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Recipes</h2>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Share Recipe
            </button>
          </div>

          {isCreating && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Share Your Recipe</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Recipe Title
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Recipe Instructions
                  </label>
                  <textarea
                    value={newPost.recipe}
                    onChange={(e) => setNewPost({ ...newPost, recipe: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                    rows={4}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={newPost.image}
                    onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Post Recipe
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCreating(false)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Posted by {post.author} on {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mb-4">{post.recipe}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => toggleLike(post.id.toString())} 
                        className={`flex items-center space-x-1 ${
                          likedPosts.includes(post.id.toString()) 
                            ? 'text-red-500' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        <Heart className="h-5 w-5" fill={likedPosts.includes(post.id.toString()) ? "currentColor" : "none"} />
                        <span>{likedPosts.includes(post.id.toString()) ? (post.likes || 0) + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
