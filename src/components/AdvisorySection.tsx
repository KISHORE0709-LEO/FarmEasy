import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  Shield, 
  CloudRain,
  Thermometer,
  BarChart3,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export const AdvisorySection = () => {
  const advisoryCards = [
    {
      title: "Crop Yield Prediction",
      description: "AI-powered forecasting based on weather, soil, and historical data",
      icon: TrendingUp,
      status: "High Yield Expected",
      confidence: "92%",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Pest Attack Probability",
      description: "Early warning system to prevent crop damage",
      icon: Shield,
      status: "Low Risk",
      confidence: "87%",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Weather Risk Alerts",
      description: "Timely advisories for weather-related decisions",
      icon: CloudRain,
      status: "Rain Expected",
      confidence: "95%",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recommendations = [
    {
      title: "Fertilizer Application",
      task: "Apply NPK 19:19:19 fertilizer",
      timing: "Next 3 days",
      priority: "High",
      icon: Calendar,
      completed: false
    },
    {
      title: "Irrigation Schedule",
      task: "Reduce watering frequency",
      timing: "Starting tomorrow",
      priority: "Medium",
      icon: Thermometer,
      completed: false
    },
    {
      title: "Pest Monitoring",
      task: "Check for aphids on tomato plants",
      timing: "Weekly",
      priority: "High",
      icon: AlertTriangle,
      completed: true
    }
  ];

  return (
    <section id="advisory" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Predictive Analytics Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get AI-powered insights, predictions, and personalized recommendations for your farm
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {advisoryCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${card.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <Badge variant="secondary">{card.confidence}</Badge>
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${card.bgColor} ${card.color}`}>
                    <CheckCircle className="h-4 w-4" />
                    {card.status}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recommendations */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-primary">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              Today's Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const IconComponent = rec.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-smooth hover:shadow-soft ${
                      rec.completed ? 'bg-green-50 border-green-200' : 'bg-background'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${rec.completed ? 'bg-green-100' : 'bg-primary/10'}`}>
                      <IconComponent className={`h-5 w-5 ${rec.completed ? 'text-green-600' : 'text-primary'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.task}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant={rec.priority === 'High' ? 'destructive' : 'secondary'}>
                          {rec.priority} Priority
                        </Badge>
                        <span className="text-xs text-muted-foreground">{rec.timing}</span>
                      </div>
                    </div>

                    <Button 
                      variant={rec.completed ? "outline" : "default"}
                      size="sm"
                      disabled={rec.completed}
                    >
                      {rec.completed ? 'Completed' : 'Mark Done'}
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" size="lg">
                View All Recommendations
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};