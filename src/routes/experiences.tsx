import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SectionHeading } from "@/components/SectionHeading";
import camping from "@/assets/camping.jpg";
import rafting from "@/assets/rafting.jpg";
import chardham from "@/assets/chardham.jpg";
import tours from "@/assets/tours.jpg";
import hero from "@/assets/hero.jpg";
import catering from "@/assets/catering.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Featured Experiences — Curated Journeys | Dhyan Mandir" },
      { name: "description", content: "Char Dham Yatra, Rishikesh retreats, Valley of Flowers, Spiti circuits & more — premium curated journeys starting from ₹9,500." },
      { property: "og:title", content: "Featured Experiences — Dhyan Mandir" },
      { property: "og:description", content: "Hand-crafted Himalayan journeys, ready to book." },
      { property: "og:image", content: chardham },
    ],
  }),
  component: ExperiencesPage,
});

const items = [
  { title: "Char Dham Premium Yatra", price: "₹38,500", days: "11 Days", img: chardham, tag: "Most Sacred",
    blurb: "Yamunotri · Gangotri · Kedarnath · Badrinath. Heli upgrades available. Includes priest assistance & VIP darshan." },
  { title: "Rishikesh Riverside Retreat", price: "₹12,800", days: "3 Days", img: camping, tag: "Bestseller",
    blurb: "Luxury glamping, river rafting, daily yoga and Ganga aarti by the holy river." },
  { title: "Valley of Flowers Trek", price: "₹18,400", days: "6 Days", img: tours, tag: "Seasonal",
    blurb: "Hemkund Sahib + alpine meadows in full Himalayan bloom. July–September only." },
  { title: "Kedarnath Helicopter Yatra", price: "₹24,900", days: "1 Day", img: chardham, tag: "Express",
    blurb: "Same-day darshan from Phata helipad with VIP entry and pooja arrangement." },
  { title: "Spiti Valley Circuit", price: "₹32,000", days: "9 Days", img: tours, tag: "Adventure",
    blurb: "Kaza, Key Monastery, Chandratal — high-altitude Himalayan dreamscape." },
  { title: "Himalayan Silence Retreat", price: "₹16,500", days: "5 Days", img: hero, tag: "Inner Journey",
    blurb: "Vipassana-style silence, hatha yoga, ayurvedic meals in a forest ashram." },
  { title: "Ganga Aarti Weekend", price: "₹9,500", days: "2 Days", img: rafting, tag: "Quick Escape",
    blurb: "Friday-Sunday Rishikesh getaway — rafting, aarti, sattvic feast." },
  { title: "Curated Wedding Catering", price: "On Request", days: "Custom", img: catering, tag: "Hospitality",
    blurb: "Sattvic & traditional spreads for destination weddings across Uttarakhand." },
];

function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={tours} alt="" width={1920} height={960}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-6 pb-16 text-background">
          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">Featured Experiences</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Journeys, <span className="text-gradient-gold italic">ready to begin.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="Eight signature experiences."
            subtitle="Each can be customised to your dates, group size and pace. Speak with a curator on WhatsApp."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((e, i) => (
              <article key={e.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={e.img} alt={e.title} width={1280} height={960} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 rounded-full bg-gradient-gold text-primary-foreground px-3 py-1 text-[10px] uppercase tracking-wider font-semibold shadow-gold">
                    {e.tag}
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {e.days}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground leading-snug">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{e.blurb}</p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting From</div>
                      <div className="font-display text-xl text-primary">{e.price}</div>
                    </div>
                    <a
                      href={`https://wa.me/919012626002?text=I'd%20like%20to%20enquire%20about%20${encodeURIComponent(e.title)}`}
                      className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:bg-foreground transition"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
