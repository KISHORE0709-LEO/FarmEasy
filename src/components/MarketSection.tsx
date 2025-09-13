import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  IndianRupee,
  Calendar,
  Truck,
  ShoppingCart,
  Target
} from "lucide-react";

export const MarketSection = () => {
  const marketPrices = [
    {
      crop: "Tomato",
      currentPrice: 45,
      previousPrice: 42,
      trend: "up",
      change: "+7.1%",
      market: "Delhi Mandi",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Wheat",
      currentPrice: 2150,
      previousPrice: 2180,
      trend: "down",
      change: "-1.4%",
      market: "Punjab APMC",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Rice",
      currentPrice: 3200,
      previousPrice: 3180,
      trend: "up",
      change: "+0.6%",
      market: "Haryana Mandi",
      lastUpdated: "3 hours ago"
    },
    {
      crop: "Cotton",
      currentPrice: 6800,
      previousPrice: 6750,
      trend: "up",
      change: "+0.7%",
      market: "Gujarat APMC",
      lastUpdated: "1 hour ago"
    }
  ];

  const recommendedMarkets = [
    {
      name: "Delhi Sabzi Mandi",
      distance: "45 km",
      transport: "₹150",
      netProfit: "₹4,850",
      rating: 4.5,
      crops: ["Tomato", "Onion", "Potato"]
    },
    {
      name: "Gurgaon Wholesale Market",
      distance: "32 km",
      transport: "₹120",
      netProfit: "₹4,650",
      rating: 4.2,
      crops: ["Vegetables", "Fruits"]
    },
    {
      name: "Local Retail Market",
      distance: "8 km",
      transport: "₹25",
      netProfit: "₹3,200",
      rating: 4.0,
      crops: ["All crops"]
    }
  ];

  return (
    <section id="prices" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Market Prices & Recommendations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get real-time market prices and AI-powered recommendations for the best selling opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Prices */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-primary">
                  <IndianRupee className="h-5 w-5 text-primary-foreground" />
                </div>
                Live Market Prices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg text-foreground">{item.crop}</h4>
                        <Badge 
                          variant="secondary" 
                          className={`gap-1 ${item.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}
                        >
                          {item.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {item.change}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {item.market}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        Updated {item.lastUpdated}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">₹{item.currentPrice}</div>
                      <div className="text-sm text-muted-foreground">per quintal</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Prices
              </Button>
            </CardContent>
          </Card>

          {/* Recommended Markets */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-earth">
                  <Target className="h-5 w-5 text-foreground" />
                </div>
                Best Markets to Sell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedMarkets.map((market, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{market.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {market.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Truck className="h-3 w-3" />
                            {market.transport}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{market.netProfit}</div>
                        <div className="text-xs text-muted-foreground">Net Profit</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {market.crops.slice(0, 2).map((crop, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {crop}
                          </Badge>
                        ))}
                        {market.crops.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{market.crops.length - 2} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
                        <span>{market.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="hero" className="w-full mt-4 gap-2">
                <ShoppingCart className="h-4 w-4" />
                Sell Your Produce
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Price Forecast */}
        <Card className="shadow-medium mt-8">
          <CardHeader>
            <CardTitle className="text-center">7-Day Price Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <BarChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Interactive price charts and forecasting coming soon...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Icon component for the chart placeholder
const BarChart = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);