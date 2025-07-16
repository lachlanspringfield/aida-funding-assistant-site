import { Button } from "@/components/ui/button";
import targetIcon from "@/assets/vira-target-icon.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div 
              className="h-8 w-8 bg-gradient-primary"
              style={{
                maskImage: `url(${targetIcon})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${targetIcon})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center'
              }}
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