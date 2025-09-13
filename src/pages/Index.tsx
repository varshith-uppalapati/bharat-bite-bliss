import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CulturalFilters from "@/components/CulturalFilters";
import ImSickSection from "@/components/ImSickSection";
import QuickRecipes from "@/components/QuickRecipes";
import RecipeCard, { Recipe } from "@/components/RecipeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import the generated images
import dalCurryImg from "@/assets/dal-curry.jpg";
import butterChickenImg from "@/assets/butter-chicken.jpg";
import chapatiCurryImg from "@/assets/chapati-curry.jpg";
import masalaChaiImg from "@/assets/masala-chai.jpg";

const featuredRecipes: Recipe[] = [
  {
    id: "1",
    title: "Traditional Dal Tadka",
    image: dalCurryImg,
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    tags: ["Traditional", "Protein-Rich", "Comfort Food", "Vegetarian"],
    description: "Classic yellow lentil curry with aromatic spices and ghee tempering"
  },
  {
    id: "2",
    title: "Butter Chicken Masala",
    image: butterChickenImg,
    cookTime: "35 mins", 
    servings: 4,
    difficulty: "Medium",
    tags: ["Popular", "Rich", "Restaurant Style", "Non-Vegetarian"],
    description: "Creamy tomato-based curry with tender chicken pieces"
  },
  {
    id: "3",
    title: "Fresh Chapati with Sabzi",
    image: chapatiCurryImg,
    cookTime: "20 mins",
    servings: 2,
    difficulty: "Easy",
    tags: ["Healthy", "Daily Meal", "Vegetarian", "Homestyle"],
    description: "Soft handmade bread with mixed vegetable curry"
  },
  {
    id: "4",
    title: "Authentic Masala Chai",
    image: masalaChaiImg,
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    tags: ["Beverage", "Traditional", "Energizing", "Comfort"],
    description: "Perfect blend of tea, milk, and aromatic spices"
  }
];

const Index = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Cultural Filters Section */}
      <section id="cultural" className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <CulturalFilters 
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
          />
        </div>
      </section>

      {/* I'm Sick Section */}
      <section id="health" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ImSickSection />
        </div>
      </section>

      {/* Quick Recipes */}
      <section id="quick" className="bg-muted/30">
        <QuickRecipes />
      </section>

      {/* Featured Recipes */}
      <section id="recipes" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the most loved recipes from different regions of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Recipe Hub</h3>
          <p className="text-primary-foreground/80 mb-6">
            "Less Haste, Better Taste" - Bringing all Indian recipes to one place
          </p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 Recipe Hub. Made with ❤️ for Indian food lovers.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
