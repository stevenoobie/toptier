import { Instagram, Facebook, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary/50 border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="text-lg font-bold text-white">TopTier</span>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Professional football media services dedicated to showcasing elite talent to the world's biggest clubs and agencies.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 mb-4">
            <a href="https://www.instagram.com/toptiermedia01/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/TopTierMedia1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@toptiermedia0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <SiTiktok className="h-5 w-5" />
            </a>
          </div>
          <a href="mailto:mediatoptier1@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            mediatoptier1@gmail.com
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
        © 2025 TopTier Media. All rights reserved.
      </div>
    </footer>
  );
}
