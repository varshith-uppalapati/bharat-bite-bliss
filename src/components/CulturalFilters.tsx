import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Zap, Heart, Flower2 } from "lucide-react";

interface CulturalFilter {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const culturalFilters: CulturalFilter[] = [
  {
    id: "jain",
    name: "Jain Food",
    description: "No onion, garlic, root vegetables",
    icon: <Flower2 className="h-5 w-5" />,
    color: "bg-spice-mint"
  },
  {
    id: "vrat",
    name: "Fasting/Vrat",
    description: "Traditional fasting recipes",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-spice-turmeric"
  },
  {
    id: "vegan",
    name: "Vegan",
    description: "Plant-based Indian recipes",
    icon: <Leaf className="h-5 w-5" />,
    color: "bg-spice-mint"
  },
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    description: "Balanced, healing recipes",
    icon: <Heart className="h-5 w-5" />,
    color: "bg-spice-paprika"
  }
];

interface CulturalFiltersProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const CulturalFilters = ({ selectedFilters, onFilterChange }: CulturalFiltersProps) => {
  const toggleFilter = (filterId: string) => {
    if (selectedFilters.includes(filterId)) {
      onFilterChange(selectedFilters.filter(f => f !== filterId));
    } else {
      onFilterChange([...selectedFilters, filterId]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flower2 className="h-5 w-5 text-primary" />
          Cultural Diet Preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {culturalFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
              onClick={() => toggleFilter(filter.id)}
              className={`h-auto p-4 flex flex-col items-center gap-2 ${
                selectedFilters.includes(filter.id) 
                  ? `${filter.color} text-white hover:opacity-90` 
                  : "hover:bg-muted"
              }`}
            >
              {filter.icon}
              <div className="text-center">
                <div className="font-semibold text-sm">{filter.name}</div>
                <div className="text-xs opacity-80">{filter.description}</div>
              </div>
            </Button>
          ))}
        </div>
        
        {selectedFilters.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium">Active filters:</span>
              {selectedFilters.map((filterId) => {
                const filter = culturalFilters.find(f => f.id === filterId);
                return filter ? (
                  <Badge key={filterId} className={`${filter.color} text-white`}>
                    {filter.name}
                  </Badge>
                ) : null;
              })}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onFilterChange([])}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear all
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CulturalFilters;