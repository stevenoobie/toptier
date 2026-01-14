import { Instagram, Facebook, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoPng from "@assets/logo_1766701825273.png";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-secondary/30 border-t border-border py-16 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src={logoPng}
              alt="TopTier Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-[#2086d1] dark:text-[#2086d1]">
              TopTier
            </span>
          </div>
          <p className="text-[#1d2d3d] font-semibold dark:text-muted-foreground max-w-sm leading-relaxed">
            Professional football media services dedicated to showcasing elite
            talent to the world's biggest clubs and agencies.
          </p>
        </div>

        <div>
          <h4 className="text-[#1d2d3d] font-bold mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-[#1d2d3d] font-semibold">
            <li>
              <a
                href="/"
                className="hover:text-primary transition-colors dark:text-muted-foreground"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-primary transition-colors dark:text-muted-foreground"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/process"
                className="hover:text-primary transition-colors dark:text-muted-foreground"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-primary transition-colors dark:text-muted-foreground"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#1d2d3d] font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.instagram.com/toptiermedia01/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-[#1d2d3d] hover:bg-primary hover:text-primary-foreground transition-all dark:bg-muted-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/TopTierMedia1/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-[#1d2d3d] hover:bg-primary hover:text-primary-foreground transition-all dark:bg-muted-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@toptiermedia0"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-[#1d2d3d] hover:bg-primary hover:text-primary-foreground transition-all dark:bg-muted-foreground"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
          </div>
          <a
            href="mailto:ttoptiermedia@gmail.com"
            className="group flex items-center gap-3 text-sm text-[#1d2d3d] font-semibold hover:text-primary transition-colors  "
          >
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors dark:bg-muted-foreground ">
              <Mail className="h-4 w-4" />
            </div>
            <div className="dark:text-muted-foreground">
              ttoptiermedia@gmail.com
            </div>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border text-center text-xs text-[#1d2d3d] font-semibold dark:text-muted-foreground">
        © 2025 TopTier Media. All rights reserved.
      </div>
    </footer>
  );
}
