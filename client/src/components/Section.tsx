import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
        dark ? "bg-background" : "bg-secondary/20",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-20", centered && "text-center")}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[#1d2d3d] dark:text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#1d2d3d] font-semibold dark:text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-blue-600 rounded-full mt-6",
        centered && "mx-auto"
      )} />
    </div>
  );
}
