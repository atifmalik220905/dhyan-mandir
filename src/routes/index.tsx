import { createFileRoute, Link } from "@tanstack/react-router";
import { Mountain, Tent, Waves, UtensilsCrossed, Sparkles, Compass, ArrowRight, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero.jpg";
import camping from "@/assets/camping.jpg";
import rafting from "@/assets/rafting.jpg";
import chardham from "@/assets/chardham.jpg";
import catering from "@/assets/catering.jpg";
import tours from "@/assets/tours.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhyan Mandir — Where Spirituality Meets Adventure" },
      { name: "description", content: "Curated Himalayan journeys, camping, river rafting, Char Dham Yatra & soulful retreats. Book your spiritual adventure on WhatsApp." },
      { property: "og:title", content: "Dhyan Mandir — Where Spirituality Meets Adventure" },
      { property: "og:description", content: "Divine journeys, thrilling experiences and soulful retreats in the Himalayas." },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Compass, title: "Tour & Travel", desc: "Bespoke Himalayan itineraries crafted around your soul.", img: tours, to: "/services" as const },
  { icon: Tent, title: "Luxury Camping", desc: "Bonfires under starlit skies in pine forest retreats.", img: camping, to: "/services" as const },
  { icon: Waves, title: "River Rafting", desc: "Ride the sacred Ganges through roaring rapids.", img: rafting, to: "/services" as const },
  { icon: UtensilsCrossed, title: "Catering Services", desc: "Sattvic feasts served with brass and marigold elegance.", img: catering, to: "/services" as const },
  { icon: Mountain, title: "Char Dham Yatra", desc: "A sacred passage through the four divine abodes.", img: chardham, to: "/services" as const },
  { icon: Sparkles, title: "Soulful Retreats", desc: "Meditation, yoga & silence in nature's lap.", img: hero, to: "/experiences" as const },
];

const experiences = [
  { title: "Char Dham Premium Yatra", price: "₹38,500", days: "11 Days", img: chardham, blurb: "Yamunotri · Gangotri · Kedarnath · Badrinath with luxury stays." },
  { title: "Rishikesh Riverside Retreat", price: "₹12,800", days: "3 Days", img: camping, blurb: "Glamping, rafting, yoga & Ganga aarti by the river." },
  { title: "Valley of Flowers Trek", price: "₹18,400", days: "6 Days", img: tours, blurb: "Hemkund Sahib & alpine meadows in full Himalayan bloom." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Meditator overlooking Himalayan valley at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-6 text-center text-background pt-24">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-accent mb-6 animate-fade-in">
            <span className="h-px w-10 bg-accent/70" />
            Est. in the Himalayas
            <span className="h-px w-10 bg-accent/70" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl mx-auto animate-fade-up">
            Where <span className="text-gradient-gold italic">Spirituality</span>
            <br /> Meets Adventure
          </h1>
          <p className="mt-7 max-w-xl mx-auto text-base md:text-lg text-background/85 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Explore divine journeys, thrilling experiences and soulful retreats —
            curated by seekers, for seekers.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/919012626002?text=Hi%20Dhyan%20Mandir%2C%20I%27d%20like%20to%20book%20a%20journey."
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.04] transition-transform"
            >
              Book Your Journey on WhatsApp <ArrowRight size={16} />
            </a>
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-background hover:bg-background/15 transition"
            >
              View Experiences
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { n: "12+", l: "Years of Devotion" },
              { n: "5,200", l: "Happy Travellers" },
              { n: "40+", l: "Curated Journeys" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-accent">{s.n}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-background/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/70 text-xs tracking-[0.3em] uppercase animate-fade-in">
          ↓ Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-gradient-earth">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={hero} alt="Sacred Himalayan landscape" width={900} height={1100} loading="lazy"
              className="rounded-2xl shadow-elegant w-full h-[520px] object-cover" />
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass-dark rounded-2xl p-6 max-w-xs shadow-elegant">
              <div className="flex items-center gap-1 text-accent mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-background/90 italic">
                "More than a trip — it felt like a homecoming to myself."
              </p>
              <p className="text-xs text-background/60 mt-2">— Aarti S., Mumbai</p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Journeys that move the soul, not just the body."
              subtitle="Dhyan Mandir was born from a simple belief: that travel can be a sacred act. We weave together the ancient stillness of the Himalayas with the raw thrill of the wild — designing experiences where rivers roar, mountains whisper, and you finally hear yourself."
            />
            <div className="grid grid-cols-2 gap-5 mt-2">
              {[
                { t: "Spirit", d: "Temples, mantras, meditation." },
                { t: "Adventure", d: "Rafting, treks, camping." },
                { t: "Comfort", d: "Premium stays & hospitality." },
                { t: "Care", d: "Personal hosts, end-to-end." },
              ].map((b) => (
                <div key={b.t} className="rounded-xl bg-card border border-border p-5 hover-lift shadow-card">
                  <div className="font-display text-lg text-primary">{b.t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
              Discover our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="Crafted with intention. Delivered with grace."
            subtitle="Every service is hand-curated by our in-house team of mountaineers, monks and hospitality experts."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} width={1280} height={960} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute top-4 left-4 h-12 w-12 grid place-items-center rounded-full bg-gradient-gold shadow-gold">
                    <s.icon size={20} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Explore More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="py-24 md:py-32 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Featured Journeys"
            title="Signature experiences, ready to begin."
            subtitle="Starting prices per person on twin sharing. Every itinerary is fully customisable."
          />
          <div className="grid md:grid-cols-3 gap-7">
            {experiences.map((e) => (
              <article key={e.title} className="group rounded-2xl overflow-hidden bg-card shadow-card hover-lift border border-border">
                <div className="relative h-64 overflow-hidden">
                  <img src={e.img} alt={e.title} width={1280} height={960} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {e.days}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-foreground">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{e.blurb}</p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting From</div>
                      <div className="font-display text-2xl text-primary">{e.price}</div>
                    </div>
                    <a
                      href={`https://wa.me/919012626002?text=I'd%20like%20to%20enquire%20about%20${encodeURIComponent(e.title)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold hover:bg-foreground transition"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Why Dhyan Mandir"
            title="The difference is in the devotion."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: "Premium Service", d: "Hand-picked stays, curated meals, every detail considered." },
              { t: "Spirit + Adventure", d: "The only travel house blending sadhana with thrill." },
              { t: "Trusted Planning", d: "12+ years of safe, seamless Himalayan journeys." },
              { t: "Personalised", d: "Every itinerary tailored to your pace and prayer." },
            ].map((w, i) => (
              <div key={w.t} className="text-center p-7 rounded-2xl border border-border bg-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}>
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold grid place-items-center mb-5 shadow-gold">
                  <span className="font-display text-xl text-primary-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl text-foreground">{w.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-24 overflow-hidden">
        <img src={chardham} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" width={1920} height={960} />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container mx-auto px-6 text-center text-background">
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Your <span className="text-gradient-gold italic">pilgrimage</span> begins with a message.
          </h2>
          <p className="mt-5 text-background/80 max-w-xl mx-auto">
            Speak directly with our journey curators on WhatsApp — no forms, no waiting.
          </p>
          <a
            href="https://wa.me/919012626002"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition"
          >
            Chat on WhatsApp: +91 90126 26002
          </a>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
