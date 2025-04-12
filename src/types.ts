export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary?: string;
  instructions?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  // Additional fields for mock data
  description?: string;
  time?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  category?: string;
  analyzedInstructions?: Array<{
    name: string;
    steps: Array<{
      number: number;
      step: string;
      ingredients?: Array<{
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }>;
      equipment?: Array<{
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }>;
    }>;
  }>;
}

export interface CookingTip {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
}

export interface CommunityPost {
  id: number | string;
  title: string;
  author: string;
  avatar?: string;
  image?: string;
  content?: string;
  date?: string;
  createdAt?: string;
  likes?: number;
  comments?: number;
  tags?: string[];
  recipe?: string;
}
