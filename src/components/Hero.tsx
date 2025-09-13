import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Recipe Hub
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          All Indian Recipes in One Place
        </p>
        <p className="text-2xl md:text-3xl text-spice-turmeric font-bold mb-8 drop-shadow-md">
          "Less Haste, Better Taste"
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search for recipes..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-spice-turmeric text-foreground"
            />
          </div>
          <Button variant="secondary" size="lg" className="bg-white/95 hover:bg-white text-primary font-semibold">
            Search
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Cultural Diets</h3>
            <p className="text-sm">Jain, Vrat, Vegan & Ayurvedic recipes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Health-Based</h3>
            <p className="text-sm">Recipes for when you're feeling unwell</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="font-bold text-lg mb-2">Quick Cooking</h3>
            <p className="text-sm">10-minute recipes for busy days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;