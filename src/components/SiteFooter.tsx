import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.18_0.02_60)] text-background/80 pt-20 pb-10 mt-24">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
            <div>
              <div className="font-display text-xl text-background">
                Dhyan <span className="text-gradient-gold">Mandir</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-background/60">
                Spirit · Adventure
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-background/65">
            Curating soulful journeys where the silence of the Himalayas meets the thrill
            of the wild. Travel with intention.
          </p>
        </div>

        <div>
          <h4 className="font-display text-accent text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
            <li><Link to="/experiences" className="hover:text-accent transition">Experiences</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-accent text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-accent" />
              <a href="tel:+919012626002" className="hover:text-accent">+91 90126 26002</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-accent" />
              <a href="mailto:hello@dhyanmandir.com" className="hover:text-accent">hello@dhyanmandir.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span>Rishikesh, Uttarakhand, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-accent text-lg mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full border border-background/20 hover:border-accent hover:text-accent transition"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/919012626002"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-14 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/50">
        <p>© {new Date().getFullYear()} Dhyan Mandir. All rights reserved.</p>
        <p>Crafted with devotion in the lap of the Himalayas.</p>
      </div>
    </footer>
  );
}
