import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Section, SectionHeader } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/hooks/use-portfolio";
import {
  Play,
  Target,
  Video,
  TrendingUp,
  Users,
  Briefcase,
  Search,
  ArrowRight,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import heroImg from "@assets/545455445_1767616427857.jpg";
import heroVideo from "@assets/hero_video.mp4";
import heroImg2 from "@assets/home2.jpeg";
export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const { data: portfolioItems, isLoading } = usePortfolio();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-[#1E90FF] text-sm font-semibold tracking-wide capitalize border border-[#1E90FF]/20 mb-6 ">
              Elite Player Media
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold  text-white mb-6 leading-[1.1] uppercase tracking-wide  ">
              <span className="text-white ">Elevate your game</span>
            </h1>

            <p className="text-l text-white font-semibold max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Premium performance videos, in-depth scouting anaylsis, strategic
              social content crafted to position players for professional
              contracts and raise market value and brand recognition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setContactOpen(true)}
                className="px-8 py-6 text-lg rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 bg-blue-600 hover:bg-blue-700 text-white border-0"
              >
                Request a Video
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Samples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* AUDIENCE SECTION */}
      <Section id="services" className="border-t border-white/5">
        <SectionHeader
          title="Built For The Industry"
          subtitle="Specialized media solutions for every stakeholder in the professional game."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Players",
              desc: "Get scouted faster with broadcast-quality highlight reels that highlight your key attributes.",
              features: ["Season Highlights", "Transfer Reels", "Social Clips"],
            },
            {
              icon: Briefcase,
              title: "Agents",
              desc: "Professional marketing assets to pitch your clients to clubs with confidence and authority.",
              features: [
                "Client Portfolios",
                "Pitch Decks",
                "Contract Year Reels",
              ],
            },
            {
              icon: Search,
              title: "Academies & Scouts",
              desc: "Standardized video analysis and documentation for youth development tracking.",
              features: [
                "Game Analysis",
                "Player Tracking",
                "Development Archives",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-secondary/30 border-white/5 p-8 hover:border-blue-500/30 transition-colors">
                <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-[#3b82f6] dark:text-foreground mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-[#1d2d3d] font-semibold dark:text-muted-foreground mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-[#1d2d3d] font-semibold dark:text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      {/* FEATURES/DIFFERENTIATION */}
      <Section dark className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Performance Media Built On Elite Football Intelligence"
              subtitle="We understand the game. Our editors are analysts first, ensuring every clip serves a purpose."
            />
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Attribute-Focused Editing",
                  desc: "We organize clips by key attributes (e.g., progressive passing, defensive duels) to tell a clear story.",
                },
                {
                  icon: TrendingUp,
                  title: "Position-Specific Storytelling",
                  desc: "A center back's reel shouldn't look like a striker's. We tailor the pacing and focus to your role.",
                },
                {
                  icon: Video,
                  title: "Broadcast-Style Visuals",
                  desc: "Clean freeze-frames, player isolation, and tactical annotations that look like Monday Night Football.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-1">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3b82f6] dark:text-foreground mb-2 capitalize">
                      {feature.title}
                    </h3>
                    <p className="text-[#1d2d3d] font-semibold dark:text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* football match action shot */}
            <img
              src={heroImg2}
              alt="Match Analysis"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-background/90 backdrop-blur border border-white/10 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div>
                      <h4 className="text-[#3b82f6] font-bold">John Doe</h4>
                      <p className="text-xs text-muted-foreground">
                        Central Midfielder • 2004
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400 border-0"
                  >
                    92% Pass Completion
                  </Badge>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* PORTFOLIO SECTION */}
      {/* PROCESS SECTION */}
      <Section id="process" dark>
        <SectionHeader
          title="Simple Process. Elite Results."
          subtitle="From raw footage to a polished product in four simple steps."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0" />

          {[
            {
              step: "01",
              title: "Submit Footage",
              desc: "Upload your raw match files or send us links to your games.",
            },
            {
              step: "02",
              title: "Pro Analysis",
              desc: "We identify your best moments that align with what scouts look for.",
            },
            {
              step: "03",
              title: "Premium Editing",
              desc: "We cut, color grade, and add tactical graphics to highlight your IQ.",
            },
            {
              step: "04",
              title: "Delivery",
              desc: "Receive your HD video ready for Instagram, YouTube, and email pitches.",
            },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-background border-4 border-secondary rounded-full flex items-center justify-center mb-6 relative z-10">
                <span className="text-3xl font-bold text-blue-500 font-mono">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#3b82f6] dark:text-foreground mb-2 capitalize">
                {item.title}
              </h3>
              <p className="text-sm text-[#1d2d3d] font-semibold dark:text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
      {/* PHILOSOPHY / CTA */}
      <section className="py-32 px-4 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-bold text-[#1d2d3d] dark:text-foreground mb-8 tracking-tighter">
            Football Is Performance.
            <br />
            <span className="text-blue-500">Representation Is Power.</span>
          </h2>
          <p className="text-xl text-[#1d2d3d] font-semibold dark:text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't let your hard work go unnoticed. We turn your performances
            into opportunities.
          </p>
          <Button
            size="lg"
            onClick={() => setContactOpen(true)}
            className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-8 rounded-xl font-bold"
          >
            Turn Pro Today
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
