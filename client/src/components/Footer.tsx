import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-white/5 py-12 px-4">
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
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Player Highlights</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Scouting Reports</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Social Media Content</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Portfolio Websites</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <a href="mailto:contact@toptier.media" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            contact@toptier.media
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
        © 2025 TopTier Media. All rights reserved.
      </div>
    </footer>
  );
}
