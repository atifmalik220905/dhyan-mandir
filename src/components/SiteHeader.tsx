import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/experiences", label: "Experiences" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/40 bg-card/95 shadow-elegant backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground ring-1 ring-accent/70">
              <img
                src={logo}
                alt="Dhyan Mandir logo"
                width={20}
                height={20}
                className="h-5 w-5 object-contain drop-shadow-[0_2px_8px_oklch(0.98_0.01_80_/_0.15)]"
              />
            </span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-[2rem]">
              Dhyan <span className="text-accent">Mandir</span>
            </div>
            <div className="text-xs uppercase tracking-[0.32em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[0.82rem]">
              Spirit · Adventure
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-background/85 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919012626002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
          >
            Book on WhatsApp
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-background"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-dark mt-3 mx-4 rounded-2xl p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-background/90 text-base"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919012626002"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
