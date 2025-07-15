import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">AIDA</span>
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