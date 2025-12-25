import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function Pricing() {
  const [contactOpen, setContactOpen] = useState(false);

  const tiers = [
    {
      name: "Essential",
      price: "$299",
      description: "Perfect for players starting their highlight journey",
      features: [
        "7-10 minute highlight video",
        "HD 1080p quality",
        "Professional music track",
        "Basic transitions and effects",
        "1 round of revisions",
        "5-7 day turnaround",
        "Digital delivery",
      ],
    },
    {
      name: "Elite",
      price: "$799",
      popular: true,
      description: "The ultimate package for professional athletes",
      features: [
        "13-25 minute cinematic reel",
        "Premium music and sound design",
        "Custom graphics, overlays & Intro",
        "Unlimited revisions",
        "48-hour rush turnaround",
        "Multiple format delivery",
        "Stats Integration and analysis",
        "Personal branding elements",
        "Priority support",
      ],
    },
    {
      name: "Pro",
      price: "$499",
      description: "Advanced package for serious players",
      features: [
        "10-13 minute highlight video",
        "HD 1080p quality",
        "Premium music and sound design",
        "Advanced transitions and effects",
        "Custom graphics and overlays",
        "Unlimited revisions",
        "3-4 day turnaround",
        "Digital delivery + social media versions",
        "Stats Integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            PRICING
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Professional Packages for Every Player
          </h1>
          <p className="text-xl text-foreground dark:text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the package that fits your needs and budget.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`p-8 bg-secondary/30 border-white/5 flex flex-col h-full relative ${
                tier.popular ? "border-blue-500/50 ring-1 ring-blue-500/50" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-blue-500 mb-4">{tier.price}</div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : "variant-outline"}`}
                onClick={() => setContactOpen(true)}
              >
                {tier.name === "Elite" ? "Choose Elite →" : tier.name === "Pro" ? "Choose Pro" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <SectionHeader 
        title="Ready to Showcase Your Greatness?" 
        subtitle="Contact us today to discuss your project and get started on your professional highlight reel."
        centered
      />
      <div className="flex justify-center pb-20">
        <Button size="lg" className="bg-blue-600" onClick={() => setContactOpen(true)}>
          Contact Us
        </Button>
      </div>

      <Footer />
    </div>
  );
}
