import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Thermometer, Brain, Droplets, Wind, Heart, Activity } from "lucide-react";
import { useState } from "react";

interface Condition {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  recipes: string[];
}

const conditions: Condition[] = [
  {
    id: "fever",
    name: "Fever",
    icon: <Thermometer className="h-5 w-5" />,
    description: "Light, easily digestible foods",
    recipes: ["Khichdi with Turmeric", "Ginger Tea", "Light Dal Soup", "Coconut Water Rice"]
  },
  {
    id: "cold",
    name: "Cold & Cough",
    icon: <Droplets className="h-5 w-5" />,
    description: "Warm, immunity-boosting recipes",
    recipes: ["Turmeric Milk", "Ginger Honey Tea", "Kadha (Herbal Decoction)", "Steam-cooked Moong Dal"]
  },
  {
    id: "headache", 
    name: "Headache",
    icon: <Brain className="h-5 w-5" />,
    description: "Cooling, hydrating foods",
    recipes: ["Cucumber Raita", "Mint Lassi", "Light Vegetable Soup", "Jeera Water"]
  },
  {
    id: "stomach",
    name: "Stomach Issues",
    icon: <Activity className="h-5 w-5" />,
    description: "Gentle, soothing recipes",
    recipes: ["Plain Rice Porridge", "Buttermilk with Cumin", "Banana with Honey", "Bland Khichdi"]
  },
  {
    id: "weakness",
    name: "Weakness/Fatigue",
    icon: <Heart className="h-5 w-5" />,
    description: "Energy-boosting, nutritious meals",
    recipes: ["Almond Milk Shake", "Date and Nut Laddu", "Protein-rich Dal", "Ghee Rice with Vegetables"]
  }
];

const ImSickSection = () => {
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);

  return (
    <Card className="bg-gradient-fresh border-spice-mint/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Heart className="h-6 w-6 text-spice-paprika" />
          Not Feeling Well?
        </CardTitle>
        <p className="text-muted-foreground">
          Get doctor-recommended recipes based on your condition
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition) => (
            <Dialog key={condition.id}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-3 hover:shadow-card transition-all border-spice-mint/30 hover:border-spice-mint"
                  onClick={() => setSelectedCondition(condition)}
                >
                  <div className="text-spice-paprika">
                    {condition.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{condition.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {condition.description}
                    </div>
                  </div>
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {condition.icon}
                    Recipes for {condition.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {condition.description}. Here are some healing recipes:
                  </p>
                  
                  <div className="space-y-2">
                    {condition.recipes.map((recipe, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{recipe}</span>
                        <Button size="sm" className="bg-gradient-warm">
                          Cook Now
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-spice-cardamom/20 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Tip:</strong> These recipes are suggested for mild symptoms. 
                      For serious health issues, please consult a doctor.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImSickSection;