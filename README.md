# MJrecipe

## About the Project

MJrecipe is a modern web application for discovering, searching, and exploring recipes from around the world. Built with a focus on user experience, it offers an intuitive interface for food enthusiasts to find recipes based on cuisine, dietary preferences, and ingredients.

## Features

- Recipe search with filters for cuisine and dietary preferences
- Detailed recipe information including instructions, ingredients, and nutritional data
- Responsive design that works on desktop and mobile devices
- Dark mode support for comfortable viewing in all lighting conditions
- Community sharing features for recipe discussions

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/AkhileshNDas25/MJrecipe.git
   cd MJrecipe
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Spoonacular API key:
   ```
   VITE_SPOONACULAR_API_KEY=your_api_key_here
   ```
   - Get a free API key from [Spoonacular API](https://spoonacular.com/food-api)

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs the linter to check for code issues

## API Information

This project uses the [Spoonacular API](https://spoonacular.com/food-api) for recipe data. The API provides:

- Access to over 5,000 recipes
- Detailed ingredient information
- Nutritional analysis
- Recipe instructions and cooking times

Note: The free tier of Spoonacular API has usage limits. Check their documentation for current quotas.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
