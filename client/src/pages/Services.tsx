import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  History, 
  Calendar, 
  Zap, 
  Search, 
  Target, 
  Dribbble, 
  Shield, 
  Activity, 
  Brain, 
  Users 
} from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function Services() {
  const [contactOpen, setContactOpen] = useState(false);

  const mainCategories = [
    {
      title: "Career Performance Archive",
      icon: History,
      desc: "Highlights covering multiple seasons across the player’s career",
      features: [
        "Actions collected from different seasons and clubs",
        "Large volume of clips showing long-term performance",
        "Role-based actions across various tactical systems",
        "Progression and consistency over time",
        "Suitable for club presentations and scouting review"
      ]
    },
    {
      title: "Season Performance",
      icon: Calendar,
      desc: "Highlights covering one full competitive season",
      features: [
        "Actions selected based on the player’s position",
        "Attacking, defensive, and build-up situations",
        "Performances from multiple matches across the season"
      ]
    }
  ];

  const attributeServices = [
    {
      title: "Speed & Pace Showcase",
      icon: Zap,
      desc: "Highlight explosive acceleration, sprint speed, and rapid transitions. Perfect for wingers and forwards who rely on pace.",
      features: ["Sprint highlights", "Acceleration bursts", "Recovery runs", "Transition speed"]
    },
    {
      title: "Passing & Vision",
      icon: Search,
      desc: "Demonstrate precise passing, through balls, and creative playmaking. Ideal for midfielders and playmakers.",
      features: ["Key passes", "Through balls", "Long-range distribution", "Assist compilations"]
    },
    {
      title: "Finishing & Goals",
      icon: Target,
      desc: "Showcase clinical finishing, shot power, and goal-scoring ability. Essential for strikers and attacking players.",
      features: ["Goal compilations", "Shot accuracy", "Headers", "Weak foot finishes"]
    },
    {
      title: "Dribbling & Skills",
      icon: Dribbble,
      desc: "Display technical ability, ball control, and 1v1 situations. Great for creative attacking players.",
      features: ["Skill moves", "Close control", "Take-ons", "Ball manipulation"]
    },
    {
      title: "Defensive Prowess",
      icon: Shield,
      desc: "Emphasize tackling, interceptions, and defensive positioning. Perfect for defenders and defensive midfielders.",
      features: ["Tackles", "Interceptions", "Clearances", "Defensive positioning"]
    },
    {
      title: "Physical & Strength",
      icon: Activity,
      desc: "Highlight physical dominance, aerial ability, and strength in duels. Ideal for target men and physical players.",
      features: ["Aerial duels", "Physical battles", "Hold-up play", "Strength displays"]
    }
  ];

  const tacticalServices = [
    {
      title: "Game Intelligence",
      icon: Brain,
      desc: "Showcase tactical awareness, positioning, and decision-making. Perfect for all positions.",
      features: ["Positioning", "Decision-making", "Tactical awareness", "Off-ball movement"]
    },
    {
      title: "Leadership & Character",
      icon: Users,
      desc: "Demonstrate leadership qualities, communication, and team impact. Great for captains and experienced players.",
      features: ["Communication", "Team organization", "Motivation", "Game management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-blue-600 selection:text-white">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge variant="outline" className="px-4 py-1 border-blue-500/30 text-blue-400 bg-blue-500/5">
            OUR SERVICES
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Specialized Highlight Videos for Every Attribute
          </h1>
          <p className="text-xl text-muted-foreground">
            We create tailored highlight reels that showcase your specific strengths, whether you're a speedster, playmaker, finisher, or defensive anchor.
          </p>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 bg-blue-600/10 border-blue-500/20 h-full hover:border-blue-500/40 transition-all">
                <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/40">
                  <cat.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-3">
                  {cat.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ATTRIBUTE GRID */}
      <Section className="py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attributeServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group h-full bg-secondary/30 border-white/5 p-8 hover:border-blue-500/30 transition-all overflow-hidden">
                <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="h-1 w-1 rounded-full bg-blue-500/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TACTICAL GRID */}
      <Section className="py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tacticalServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-blue-600/10 border-blue-500/20 h-full flex items-start gap-6">
                <div className="shrink-0 h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/20">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f, j) => (
                      <Badge key={j} variant="secondary" className="bg-white/5 border-white/10 text-gray-400">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
