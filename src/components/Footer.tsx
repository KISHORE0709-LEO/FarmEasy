import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Ask Query", href: "#query" },
        { label: "Get Advisory", href: "#advisory" },
        { label: "Market Prices", href: "#prices" },
        { label: "Sell Produce", href: "#marketplace" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Knowledge Base", href: "#" },
        { label: "Video Tutorials", href: "#" },
        { label: "Success Stories", href: "#" },
        { label: "Government Schemes", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Community Forum", href: "#" },
        { label: "SMS Support", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary-foreground/10">
                  <Sprout className="h-8 w-8" />
                </div>
                <span className="text-2xl font-bold">FarmAI</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Empowering farmers with AI-driven advisory, direct market access, and sustainable growth solutions. 
                Building a better future for agriculture.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="h-4 w-4" />
                  <span>support@farmai.com</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="h-4 w-4" />
                  <span>+91 1800-FARM-AI</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-center md:text-left">
              <p>&copy; 2024 FarmAI. All rights reserved.</p>
              <p className="text-sm mt-1">Built for Smart India Hackathon 2024</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};