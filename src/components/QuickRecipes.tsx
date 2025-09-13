import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timer, Zap, Clock } from "lucide-react";
import RecipeCard, { Recipe } from "./RecipeCard";

// Import the generated images
import dalCurryImg from "@/assets/dal-curry.jpg";
import butterChickenImg from "@/assets/butter-chicken.jpg";
import chapatiCurryImg from "@/assets/chapati-curry.jpg";
import masalaChaiImg from "@/assets/masala-chai.jpg";

const quickRecipes: Recipe[] = [
  {
    id: "1",
    title: "5-Minute Masala Chai",
    image: masalaChaiImg,
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    tags: ["Quick", "Beverage", "Energizing"],
    description: "Perfect spiced tea to start your day or beat the evening blues"
  },
  {
    id: "2", 
    title: "Quick Chapati Roll",
    image: chapatiCurryImg,
    cookTime: "8 mins",
    servings: 1,
    difficulty: "Easy",
    tags: ["Quick", "Healthy", "Lunch"],
    description: "Stuffed chapati with vegetables and spices for a quick meal"
  },
  {
    id: "3",
    title: "Instant Moong Dal",
    image: dalCurryImg,
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy", 
    tags: ["Quick", "Protein", "Healthy"],
    description: "Pressure-cooked yellow lentils with simple tempering"
  },
  {
    id: "4",
    title: "Quick Butter Masala",
    image: butterChickenImg,
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Medium",
    tags: ["Quick", "Rich", "Dinner"],
    description: "Creamy tomato-based curry using pre-cooked ingredients"
  }
];

const QuickRecipes = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-warm p-3 rounded-full">
              <Timer className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">10-Minute Challenge</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick, delicious Indian recipes for those busy days when you need comfort food fast
          </p>
        </div>

        <Card className="mb-8 bg-gradient-warm text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Challenge Yourself!</h3>
                <p className="text-white/90">
                  Can you cook authentic Indian food in just 10 minutes? 
                  These recipes prove that great taste doesn't need hours of preparation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickRecipes.map((recipe) => (
            <div key={recipe.id} className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-spice-turmeric text-white font-bold animate-pulse">
                  <Clock className="h-3 w-3 mr-1" />
                  {recipe.cookTime}
                </Badge>
              </div>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-warm font-semibold">
            <Timer className="h-4 w-4 mr-2" />
            View All Quick Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickRecipes;