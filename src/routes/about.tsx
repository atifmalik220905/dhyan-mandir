import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero.jpg";
import tours from "@/assets/tours.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dhyan Mandir — Our Story of Spirit & Adventure" },
      { name: "description", content: "Born in the Himalayas, Dhyan Mandir blends sacred travel with thrilling adventure. Meet the team behind your soulful journey." },
      { property: "og:title", content: "About Dhyan Mandir" },
      { property: "og:description", content: "Where spiritual seekers and adventurers find their tribe." },
      { property: "og:image", content: hero },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={hero} alt="" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-6 pb-16 text-background">
          <div className="text-xs uppercase tracking-[0.35em] text-accent mb-4">Our Story</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Travel as a form of <span className="text-gradient-gold italic">prayer.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img src={tours} alt="Mountain road journey" loading="lazy" width={1280} height={960}
            className="rounded-2xl shadow-elegant w-full h-[520px] object-cover" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Founded 2013"
              title="A Himalayan home for seekers."
            />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Dhyan Mandir began on the banks of the Ganga in Rishikesh, when our founders
                — a mountaineer and a meditation teacher — realised that the people they
                guided were chasing the same thing: a quiet inside the noise.
              </p>
              <p>
                Today, we are a small, devoted team of trip curators, sherpas, chefs and
                spiritual hosts. We design every journey by hand, walking each route ourselves
                before we share it with you.
              </p>
              <p>
                Whether you are bowing at Kedarnath, paddling through Ganges rapids, or
                sitting in silence at a forest camp — we are with you, every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Our Promise" title="Three vows we keep, always." />
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { t: "Sacred", d: "We treat every mountain, river and shrine as a teacher — and we expect the same of our guests." },
              { t: "Safe", d: "Certified guides, vetted vendors, 24/7 on-call support and tested medical protocols." },
              { t: "Soulful", d: "Slow mornings, intentional pauses, and space for the unexpected to find you." },
            ].map((v, i) => (
              <div key={v.t} className="rounded-2xl bg-card border border-border p-8 shadow-card hover-lift">
                <div className="font-display text-5xl text-gradient-gold mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl text-foreground">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
