import { createFileRoute } from "@tanstack/react-router";
import { Compass, Tent, Waves, UtensilsCrossed, Mountain, Sparkles, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SectionHeading } from "@/components/SectionHeading";
import camping from "@/assets/camping.jpg";
import rafting from "@/assets/rafting.jpg";
import chardham from "@/assets/chardham.jpg";
import catering from "@/assets/catering.jpg";
import tours from "@/assets/tours.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tours, Camping, Rafting, Char Dham | Dhyan Mandir" },
      { name: "description", content: "Premium travel packages, luxury camping, river rafting, sattvic catering and Char Dham Yatra — all curated by Dhyan Mandir." },
      { property: "og:title", content: "Dhyan Mandir Services" },
      { property: "og:description", content: "Everything you need for a soulful Himalayan journey, in one trusted house." },
      { property: "og:image", content: chardham },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass, img: tours, title: "Tour & Travel Packages",
    desc: "Bespoke itineraries through the Himalayas, Rajasthan, Ladakh, Spiti and beyond — with private transport, premium stays and an on-trip host.",
    features: ["Custom routing", "Private vehicle", "Premium stays", "On-trip host"],
  },
  {
    icon: Tent, img: camping, title: "Camping Experiences",
    desc: "Luxury Swiss tents in pine forests and riversides. Bonfires, live music, sattvic meals and starlit nights you will remember forever.",
    features: ["Swiss tents", "Bonfire nights", "All meals", "Riverside locations"],
  },
  {
    icon: Waves, img: rafting, title: "River Rafting Adventures",
    desc: "Grade I to IV rapids on the sacred Ganges, led by certified river guides with full safety briefing and gear.",
    features: ["Certified guides", "Full safety gear", "Photo coverage", "9km / 16km / 26km"],
  },
  {
    icon: UtensilsCrossed, img: catering, title: "Catering Services",
    desc: "Sattvic, traditional and live counter catering for retreats, weddings and corporate offsites — served with brass elegance.",
    features: ["Sattvic menus", "Live counters", "Custom themes", "Hygiene certified"],
  },
  {
    icon: Mountain, img: chardham, title: "Char Dham Yatra Packages",
    desc: "A complete sacred passage to Yamunotri, Gangotri, Kedarnath and Badrinath — by helicopter or premium road, with priest assistance.",
    features: ["Heli & road options", "Priest assistance", "Premium stays", "VIP darshan"],
  },
  {
    icon: Sparkles, img: hero, title: "Soulful Retreats",
    desc: "Silent meditation, hatha yoga and sound healing retreats hosted in our partner ashrams across Rishikesh, Dharamshala and Kerala.",
    features: ["3-10 day formats", "Trained teachers", "Ayurvedic meals", "Small groups"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={chardham} alt="" width={1920} height={960}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-6 pb-16 text-background">
          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">Our Services</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Everything you need, <br />
            <span className="text-gradient-gold italic">nothing you don't.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
                <img src={s.img} alt={s.title} width={1280} height={960} loading="lazy"
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-5 left-5 h-14 w-14 grid place-items-center rounded-full bg-gradient-gold shadow-gold">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">0{i + 1} / 0{services.length}</div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">{s.title}</h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-6 w-6 grid place-items-center rounded-full bg-accent/15 text-accent">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919012626002?text=I'd%20like%20to%20enquire%20about%20${encodeURIComponent(s.title)}`}
                  className="mt-8 inline-flex items-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
