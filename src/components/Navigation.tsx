import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Sprout, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Ask Query', href: '#query' },
    { label: 'Advisory', href: '#advisory' },
    { label: 'Market Prices', href: '#prices' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg gradient-primary">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FarmAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};