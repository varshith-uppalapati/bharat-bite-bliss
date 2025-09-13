import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Search, User, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { toast } = useToast();
  
  const navItems = [
    { name: "Recipes", href: "#recipes" },
    { name: "Cultural Diets", href: "#cultural" },
    { name: "Quick Cook", href: "#quick" },
    { name: "Health Hub", href: "#health" },
  ];

  const handleSearchClick = () => {
    toast({
      title: "Search Feature",
      description: "Connect to Supabase for advanced recipe search functionality!",
    });
  };

  const handleLoginClick = () => {
    toast({
      title: "Login Feature", 
      description: "Connect to Supabase to enable user authentication and login!",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-warm p-2 rounded-lg">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-primary">Recipe Hub</span>
            <Badge className="bg-spice-turmeric text-white text-xs">Beta</Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex"
              onClick={handleSearchClick}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLoginClick}
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-warm p-2 rounded-lg">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">Recipe Hub</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button className="w-full bg-gradient-warm">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;