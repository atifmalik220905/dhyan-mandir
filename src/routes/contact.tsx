import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dhyan Mandir — Plan Your Journey" },
      { name: "description", content: "Speak with our journey curators. Call +91 90126 26002 or chat on WhatsApp to plan your spiritual adventure." },
      { property: "og:title", content: "Contact Dhyan Mandir" },
      { property: "og:description", content: "We reply within minutes on WhatsApp." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={hero} alt="" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-6 pb-16 text-background">
          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">Get in Touch</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Let's plan your <span className="text-gradient-gold italic">pilgrimage.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-3">Speak with a curator</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team replies on WhatsApp within minutes — no forms, no call centers.
                Just real humans who have walked the routes themselves.
              </p>
            </div>

            <a
              href="https://wa.me/919012626002?text=Hi%20Dhyan%20Mandir%2C%20I'd%20like%20to%20plan%20a%20journey."
              className="flex items-center gap-4 rounded-2xl bg-gradient-gold p-6 shadow-gold hover:scale-[1.02] transition"
            >
              <div className="h-14 w-14 grid place-items-center rounded-full bg-background/20">
                <MessageCircle size={26} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">Fastest Reply</div>
                <div className="font-display text-2xl text-primary-foreground">Chat on WhatsApp</div>
                <div className="text-sm text-primary-foreground/90 mt-0.5">+91 90126 26002</div>
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Phone, t: "Call Us", v: "+91 90126 26002", href: "tel:+919012626002" },
                { Icon: Mail, t: "Email", v: "hello@dhyanmandir.com", href: "mailto:hello@dhyanmandir.com" },
                { Icon: MapPin, t: "Visit", v: "Tapovan, Rishikesh — 249192" },
                { Icon: Clock, t: "Hours", v: "Mon–Sun · 7am – 10pm IST" },
              ].map((c) => {
                const Inner = (
                  <div className="rounded-2xl border border-border bg-card p-5 hover-lift shadow-card h-full">
                    <c.Icon size={20} className="text-accent mb-3" />
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
                    <div className="font-display text-lg text-foreground mt-1">{c.v}</div>
                  </div>
                );
                return c.href ? (
                  <a key={c.t} href={c.href} className="block">{Inner}</a>
                ) : (
                  <div key={c.t}>{Inner}</div>
                );
              })}
            </div>
          </div>

          <form
            className="rounded-2xl bg-card border border-border p-8 shadow-card space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const text = `Hi Dhyan Mandir,%0AI'm ${data.get("name")}.%0AInterest: ${data.get("interest")}%0ADates: ${data.get("dates")}%0AMessage: ${data.get("message")}`;
              window.open(`https://wa.me/919012626002?text=${text}`, "_blank");
            }}
          >
            <h2 className="font-display text-2xl text-foreground">Send an enquiry</h2>
            <p className="text-sm text-muted-foreground -mt-3">We'll continue the conversation on WhatsApp.</p>
            {[
              { n: "name", l: "Your Name", t: "text", p: "Aarav Sharma" },
              { n: "interest", l: "Interested In", t: "text", p: "Char Dham, Camping, Retreat..." },
              { n: "dates", l: "Preferred Dates", t: "text", p: "May 12 – May 18" },
            ].map((f) => (
              <div key={f.n}>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.l}</label>
                <input
                  required
                  name={f.n}
                  type={f.t}
                  placeholder={f.p}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about the journey you're imagining..."
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold hover:bg-foreground transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
