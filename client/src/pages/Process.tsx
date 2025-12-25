import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, Video, FileEdit, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function Process() {
  const [contactOpen, setContactOpen] = useState(false);

  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      desc: "We discuss your goals, target audience, and which attributes you want to emphasize. Whether you're a speedster, playmaker, or defensive anchor, we tailor the video to your strengths.",
    },
    {
      icon: Video,
      title: "Footage Collection",
      desc: "Upload your match footage securely OR we can obtain footage for you. We accept all common video formats and can work with footage from multiple sources.",
    },
    {
      icon: FileEdit,
      title: "Professional Editing",
      desc: "Our team carefully selects and edits your best moments, adding dynamic transitions, licensed music, professional graphics, and tactical annotations.",
    },
    {
      icon: CheckCircle2,
      title: "Review & Refine",
      desc: "Preview your highlight reel and request any changes. We offer unlimited revisions (on Pro and Elite packages) to ensure you're completely satisfied.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
            THE PROCESS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            From Consultation to Career-Ready Highlight Reel
          </h1>
          <p className="text-xl text-muted-foreground">
            Our streamlined 4-step process ensures you receive a professional highlight reel that showcases your strengths and meets recruitment standards.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 bg-secondary/30 border-white/5 h-full">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <SectionHeader 
        title="Why Our Process Delivers Results" 
        subtitle="We've refined our workflow to deliver professional-quality highlight reels that meet the exacting standards of scouts."
        centered
      />

      <Footer />
    </div>
  );
}
