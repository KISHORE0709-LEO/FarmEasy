import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Mic, 
  Camera, 
  Send,
  Sparkles,
  Leaf,
  Bug,
  Droplets
} from "lucide-react";

export const QuerySection = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<'text' | 'voice' | 'image'>('text');

  const queryModes = [
    { id: 'text', label: 'Text Query', icon: MessageSquare },
    { id: 'voice', label: 'Voice Query', icon: Mic },
    { id: 'image', label: 'Image Analysis', icon: Camera },
  ];

  const quickSuggestions = [
    { text: "My tomato plants have yellow leaves", category: "Disease", icon: Bug },
    { text: "Best fertilizer for wheat in winter", category: "Fertilizer", icon: Leaf },
    { text: "How much water does rice need?", category: "Irrigation", icon: Droplets },
    { text: "When to harvest cotton?", category: "Harvest", icon: Sparkles },
  ];

  const handleSubmit = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="query" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ask Your Farming Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant AI-powered answers to all your agricultural queries. Text, voice, or image - we support them all.
          </p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              AI Farm Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Query Mode Selection */}
            <div className="flex flex-wrap gap-2">
              {queryModes.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <Button
                    key={mode.id}
                    variant={activeMode === mode.id ? "default" : "outline"}
                    onClick={() => setActiveMode(mode.id as any)}
                    className="gap-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    {mode.label}
                  </Button>
                );
              })}
            </div>

            {/* Text Input */}
            {activeMode === 'text' && (
              <div className="space-y-4">
                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask your farming question here... (e.g., 'My tomato plants have brown spots on leaves')"
                  className="min-h-[120px] text-base"
                />
                <Button 
                  onClick={handleSubmit}
                  disabled={!query.trim() || isLoading}
                  className="w-full gap-2"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Get AI Answer
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Voice Input */}
            {activeMode === 'voice' && (
              <div className="text-center py-8">
                <div className="inline-flex p-8 rounded-full gradient-primary mb-4">
                  <Mic className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voice Query</h3>
                <p className="text-muted-foreground mb-6">Click to start recording your question</p>
                <Button variant="hero" size="lg">
                  Start Recording
                </Button>
              </div>
            )}

            {/* Image Input */}
            {activeMode === 'image' && (
              <div className="text-center py-8">
                <div className="inline-flex p-8 rounded-full gradient-earth mb-4">
                  <Camera className="h-12 w-12 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Analysis</h3>
                <p className="text-muted-foreground mb-6">Upload or capture an image of your crop, pest, or disease</p>
                <Button variant="earth" size="lg">
                  Upload Image
                </Button>
              </div>
            )}

            {/* Quick Suggestions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Quick Suggestions:</h4>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => {
                  const IconComponent = suggestion.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setQuery(suggestion.text)}
                      className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-accent transition-smooth text-left text-sm"
                    >
                      <IconComponent className="h-4 w-4 text-primary" />
                      <span>{suggestion.text}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {suggestion.category}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};