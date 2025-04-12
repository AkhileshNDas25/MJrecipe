import { ChefHat, Mail, Phone, MapPin, Globe, Heart, Users, BookOpen, Clock, Github, Twitter, Instagram, HelpCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ChefHat className="h-20 w-20 text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">About CulinaryHub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted companion on the journey to becoming a better home chef
          </p>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-orange-400 to-red-500 p-12 flex items-center justify-center">
                <ChefHat className="h-32 w-32 text-white" />
              </div>
              <div className="p-8 md:w-3/5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  At CulinaryHub, we believe that cooking is more than just preparing food—it's about creating experiences, preserving traditions, and bringing people together.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to empower home cooks of all skill levels with the knowledge, recipes, and community support they need to explore new cuisines, master cooking techniques, and share their culinary journeys with others.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Curated Recipes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover thousands of carefully tested recipes for every skill level and occasion.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Supportive Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with fellow food enthusiasts to share recipes, tips, and culinary achievements.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Time-Saving Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Plan meals, create shopping lists, and organize your favorite recipes in one place.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Personalized Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get recommendations based on your preferences, dietary needs, and cooking style.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                alt="Sarah Johnson" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
                <p className="text-orange-500 font-medium mb-2">Founder & Head Chef</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Sarah's passion for cooking started in her grandmother's kitchen at age 5. She founded CulinaryHub to share that joy with the world.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                alt="David Martinez" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">David Martinez</h3>
                <p className="text-orange-500 font-medium mb-2">Executive Chef</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  With 15 years of experience in Michelin-starred restaurants, David brings professional techniques to home kitchens.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                alt="Emily Chen" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Emily Chen</h3>
                <p className="text-orange-500 font-medium mb-2">Recipe Developer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Emily specializes in creating accessible recipes that don't compromise on flavor. She's written three bestselling cookbooks.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is CulinaryHub free to use?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! Our basic features are completely free. We also offer a premium subscription with advanced tools for dedicated home chefs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I contribute my own recipes?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Absolutely! We encourage community contributions. You can share your recipes, tips, and cooking experiences with our community.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I save recipes for later?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Simply click the bookmark icon on any recipe to save it to your personal collection. You can organize saved recipes into custom collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:contact@culinaryhub.com" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                      contact@culinaryhub.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                      +91 7771899999
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Shriram<br />
                      Jabalpur,M.P 492002
                    </p>
                  </div>
                </div>
                <div className="flex justify-start space-x-4 pt-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
