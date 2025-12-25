import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function About() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            ABOUT US
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            TopTier Media Agency
          </h1>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <p>
            TopTier is a professional media agency specializing in premium player highlight films and athlete profiles. We combine football editorial expertise with cinematic production values to craft videos that communicate a player’s strengths quickly and credibly. Each film is designed to be understood by scouts and sporting directors immediately.
          </p>
          <p>
            Our team includes top notch editors, and senior video producers who know what clubs look for and how to present it. We consult on footage selection, structure, and narrative — then deliver a finished product optimized for clubs, scouting platforms, agent presentations, and media outreach. We operate with discretion, speed, and a strict quality standard.
          </p>
          <p>
            TopTier produces bespoke player highlight films that translate performance into refined visual narratives. We work with agents, club recruitment teams, and professional players to present a player’s profile with editorial clarity, tactical context, and cinematic polish. Our work is not casual highlight reels — it’s curated representation designed to influence perception, support negotiations, and position talent for the next level.
          </p>
          <div className="bg-secondary/30 p-8 rounded-xl border border-white/5 my-12">
            <h3 className="text-2xl font-bold text-white mb-4 mt-0">We deliver:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Editorial accuracy that respects scouting standards.</li>
              <li>Professional craftsmanship that elevates the player’s image.</li>
              <li>Discretion and professionalism in all client interactions.</li>
              <li>Market-focused outputs tailored to scouts, sporting directors, and PR teams.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
