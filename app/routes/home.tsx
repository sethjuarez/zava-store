import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ZavaCore™ v2 — Intelligent Textiles by Zava" },
    {
      name: "description",
      content:
        "ZavaCore™ v2 is the world's first truly seamless smart textile platform — engineered directly into fabric for real-time analytics across healthcare, performance, industrial, and defense applications.",
    },
  ];
}

const segments = [
  {
    label: "Healthcare & Medical",
    description:
      "Continuous, comfortable biometric monitoring without bulky wearables. ZavaCore™ fiber enables cardiac, respiratory, and motion analytics woven directly into clinical garments.",
  },
  {
    label: "Performance & Sports",
    description:
      "Real-time muscle activation, hydration, and load metrics for elite athletes. Gain a competitive edge without compromising range of motion or comfort.",
  },
  {
    label: "Automotive & Mobility",
    description:
      "Driver fatigue detection, occupant health sensing, and seat-integrated monitoring. Smart textiles built for the cabin of tomorrow.",
  },
  {
    label: "Industrial Safety & PPE",
    description:
      "Embedded environmental and physiological sensors in workwear that protect without slowing workers down. Real-time alerts, zero bulk.",
  },
  {
    label: "Aerospace & Defense",
    description:
      "Mission-critical physiological monitoring for personnel in extreme environments. Lightweight, heat-resistant, washable — field-proven smart fabric.",
  },
];

const differentiators = [
  {
    title: "Seamless Textile Integration",
    body: "The fiber is engineered into the fabric itself — not clipped on, stitched over, or added after. No pods, no sensors, no compromises.",
  },
  {
    title: "Comfort-Driven Continuous Wear",
    body: "Because monitoring only works when people actually wear it. ZavaCore™ is designed for all-day, every-day compliance without fatigue or irritation.",
  },
  {
    title: "Real-Time Granular Analytics",
    body: "Embedded sensor arrays and conductive yarn deliver millisecond-precision data streams across temperature, pressure, motion, and biometric signals.",
  },
  {
    title: "Silver-Plated Graphene Mesh",
    body: "Lightweight. Durable. Heat-resistant. Machine-washable. Our proprietary graphene mesh outperforms traditional conductive fabrics across every dimension.",
  },
  {
    title: "Modular by Vertical",
    body: "Configuration adapts to your application — from clinical-grade accuracy requirements to ruggedized field deployments — without changing the underlying platform.",
  },
  {
    title: "Scientific Credibility",
    body: "Peer-reviewed research, validated performance data, and a regulatory-ready materials dossier. We speak the language of procurement and compliance teams.",
  },
];

const roadmapPhases = [
  {
    phase: "01",
    title: "Needs Assessment",
    description:
      "Segment-specific discovery to identify the highest-value monitoring use cases and establish baseline performance requirements.",
  },
  {
    phase: "02",
    title: "Strategic Pilots",
    description:
      "Pilot-ready samples and demo configurations for target verticals. Controlled trials that generate real-world performance evidence.",
  },
  {
    phase: "03",
    title: "Case Studies & ROI Evidence",
    description:
      "Publish validated outcomes from pilot programs. Translate sensor data into business value — reduced incidents, improved performance, lower costs.",
  },
  {
    phase: "04",
    title: "Thought Leadership & Sales Enablement",
    description:
      "Segment-specific whitepapers, technical briefs, and sales tools built to support enterprise and government procurement cycles.",
  },
  {
    phase: "05",
    title: "Feedback-Driven Iteration",
    description:
      "Continuous improvement based on field feedback. Each pilot cycle informs the next product revision and expands the configuration library.",
  },
  {
    phase: "06",
    title: "Global Expansion & OEM Integration",
    description:
      "Regulatory approvals in target markets followed by OEM partnerships and licensed integration with established apparel and equipment manufacturers.",
  },
];

export default function Home() {
  return (
    <div className="bg-zava-black text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur-md bg-zava-black/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-widest text-white uppercase">
            Zava
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-white/60">
            <a href="#story" className="hover:text-data-stream transition-colors duration-300">
              Story
            </a>
            <a href="#segments" className="hover:text-data-stream transition-colors duration-300">
              Markets
            </a>
            <a href="#differentiators" className="hover:text-data-stream transition-colors duration-300">
              Technology
            </a>
            <a href="#roadmap" className="hover:text-data-stream transition-colors duration-300">
              Roadmap
            </a>
          </div>
          <a
            href="#design"
            className="rounded-md border border-data-stream text-data-stream px-6 py-3 text-sm font-semibold tracking-wide hover:bg-data-stream/10 transition-colors duration-300"
          >
            Design Your Shirt
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0d2a35 0%, #0a0c0c 70%)",
        }}
      >
        {/* Mesh pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(60deg, #9ec9d9 0, #9ec9d9 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <p className="text-xs tracking-[0.3em] uppercase text-data-stream font-semibold">
            Introducing
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide leading-tight">
            ZavaCore™ v2
          </h1>
          <p className="text-lg md:text-xl font-semibold text-white/60">
            Powered by ZavaCore™ Fiber
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl">
            The world's first truly seamless, intelligent textile — combining
            comfort and real-time insight for life's most demanding environments.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-data-stream">
            Go Ahead.
          </p>
          <a
            href="#design"
            className="rounded-md border border-data-stream text-data-stream px-8 py-4 text-lg font-semibold hover:bg-data-stream/10 transition-colors duration-300"
          >
            Design Your Shirt
          </a>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-data-stream font-semibold mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Engineered into the fabric. Not added on top.
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-4">
              Traditional wearables compromise. Bulky sensors, rigid housings,
              and battery packs that get in the way. We rejected that
              trade-off entirely.
            </p>
            <p className="text-base md:text-lg text-white/70 mb-4">
              ZavaCore™ Fiber is a smart textile platform woven directly into
              the fabric at the yarn level. No add-ons. No pods. No compromise
              on comfort or performance — just intelligence embedded where it
              belongs: in the material itself.
            </p>
            <p className="text-base md:text-lg text-white/70">
              Built for the people who can't afford failure — clinicians,
              athletes, field operators, and defense personnel — ZavaCore™ v2
              is the result of years of materials science, validated in
              peer-reviewed research and real-world deployments.
            </p>
          </div>
          <div className="bg-data-slate/80 backdrop-blur-sm p-8 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-6">
              {[
                ["Platform", "Smart textile fiber — not a wearable"],
                ["Integration", "Yarn-level, seamless, invisible"],
                ["Material", "Silver-plated graphene mesh"],
                ["Durability", "Lightweight, heat-resistant, washable"],
                ["Validation", "Peer-reviewed, regulatory-ready"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-xs tracking-widest uppercase text-white/40 pt-0.5 shrink-0">
                    {label}
                  </span>
                  <span className="text-sm text-white/80 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section id="segments" className="py-16 md:py-24 px-6 bg-data-mesh/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-data-stream font-semibold mb-4">
              Markets
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Built for the industries that demand the most.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg) => (
              <div
                key={seg.label}
                className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 hover:bg-data-slate transition-colors duration-300"
              >
                <h3 className="text-sm tracking-widest uppercase text-data-stream font-semibold mb-3">
                  {seg.label}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {seg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section id="differentiators" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-data-stream font-semibold mb-4">
              Technology
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold">
              What makes ZavaCore™ different.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="border border-white/10 p-6 hover:border-data-stream/40 transition-colors duration-300">
                <div className="w-8 h-0.5 bg-data-stream mb-4" />
                <h3 className="text-base font-semibold mb-3">{d.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-16 md:py-24 px-6 bg-data-mesh/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-data-stream font-semibold mb-4">
              Roadmap
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold">
              From pilot to global platform.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="flex gap-4">
                <div className="text-3xl font-bold text-data-stream/30 leading-none shrink-0 mt-1">
                  {phase.phase}
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        id="design"
        className="py-16 md:py-24 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #0d2a35 0%, #0a0c0c 80%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Ready to wear the future?
          </h2>
          <p className="text-base md:text-lg text-white/60 mb-8">
            Design a custom ZavaCore™ shirt and experience intelligent textiles
            for yourself.
          </p>
          <a
            href="#design"
            className="inline-block rounded-md border border-data-stream text-data-stream px-8 py-4 text-lg font-semibold hover:bg-data-stream/10 transition-colors duration-300"
          >
            Design Your Shirt
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-sm">
          <span className="text-lg font-bold tracking-widest text-white uppercase">
            Zava
          </span>
          <nav className="flex gap-6 tracking-widest uppercase text-xs">
            <a href="#story" className="hover:text-data-stream transition-colors duration-300">
              Story
            </a>
            <a href="#segments" className="hover:text-data-stream transition-colors duration-300">
              Markets
            </a>
            <a href="#differentiators" className="hover:text-data-stream transition-colors duration-300">
              Technology
            </a>
            <a href="#roadmap" className="hover:text-data-stream transition-colors duration-300">
              Roadmap
            </a>
          </nav>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Zava Smart Materials. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
