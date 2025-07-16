import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6439ac67-f265-4513-8bd6-f58003405051.png" 
              alt="Vira Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold">Vira</span>
          </div>

          {/* Login Button */}
          <Button variant="outline" size="lg">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}