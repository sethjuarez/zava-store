import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ZavaCore™ v2 — Smart Fibers. Real-Time Intelligence." },
    {
      name: "description",
      content:
        "ZavaCore v2 by Zava — the world's first truly seamless intelligent textile. Embedded biometric sensors, graphene mesh, and real-time data for healthcare, sports, automotive, industrial, and aerospace applications.",
    },
  ];
}

const segments = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "HEALTHCARE",
    title: "Healthcare & Medical",
    description:
      "Remote patient monitoring, hospital wearables, telehealth, eldercare, and medical OEM integration. Continuous biometric data without disruptive devices.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "SPORTS",
    title: "Performance & Sports",
    description:
      "Elite athletes, professional teams, fitness enthusiasts, and sports apparel brands. Real-time performance metrics woven directly into training gear.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    label: "AUTOMOTIVE",
    title: "Automotive & Mobility",
    description:
      "Vehicle interior textiles, OEM seat integration, and public transport seating. Passenger biometric and environmental monitoring at scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    label: "INDUSTRIAL",
    title: "Industrial & Safety",
    description:
      "Smart uniforms, PPE, emergency responders, and government safety programs. Environmental hazard detection and worker vitals in real time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    label: "AEROSPACE",
    title: "Aerospace & Defense",
    description:
      "Extreme-environment gear for pilots, astronauts, and defense operators. Mission-critical biometric monitoring in the harshest conditions on Earth — and beyond.",
  },
];

const differentiators = [
  {
    title: "Embedded Sensors",
    description: "Sensors woven directly into fabric — no rigid housings, no external attachments, no compromises on comfort or performance.",
  },
  {
    title: "Comfort First",
    description: "Designed for everyday wear, bedding, uniforms, and vehicle interiors. Indistinguishable from conventional high-performance textiles.",
  },
  {
    title: "Graphene Mesh Core",
    description: "Silver-plated graphene mesh: lightweight, durable, heat-resistant, and fully washable. Built to survive the environments your team operates in.",
  },
  {
    title: "Continuous Intelligence",
    description: "Real-time biometric, environmental, and performance data streams — 24/7, without interruption, without charging external devices.",
  },
  {
    title: "Modular Platform",
    description: "A single scalable substrate adapts to healthcare, automotive, sports, industrial, and aerospace requirements without re-engineering.",
  },
  {
    title: "Peer-Reviewed Science",
    description: "Every claim is backed by published research and open industry collaboration. ZavaCore™ is engineered, not marketed.",
  },
];

const roadmapSteps = [
  { phase: "01", title: "Needs Assessment", description: "Cross-industry stakeholder interviews and workshops to map exact monitoring requirements per vertical." },
  { phase: "02", title: "Pilot Partnerships", description: "Targeted pilots with anchor partners in each vertical — generating case studies and measurable ROI data." },
  { phase: "03", title: "Thought Leadership", description: "White papers, peer-reviewed publications, and flagship conference presence to establish scientific credibility." },
  { phase: "04", title: "Sales Enablement", description: "Segment-specific demos, sample kits, tailored messaging, and co-marketing programs with OEM partners." },
  { phase: "05", title: "Feedback & Iteration", description: "Rapid iteration cycles from partner input to refine sensing accuracy, wash durability, and data pipelines." },
  { phase: "06", title: "Global Expansion", description: "Licensing, OEM integration, and direct sales into new geographies following regulatory approvals." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zava-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-zava-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-widest text-white">ZAVA</span>
          <span className="hidden sm:block text-white/30 text-sm">|</span>
          <span className="hidden sm:block text-xs font-semibold tracking-widest text-data-stream uppercase">ZavaCore™ v2</span>
        </div>
        <a
          href="#design"
          className="rounded-md border border-data-stream text-data-stream px-5 py-2 text-sm font-semibold tracking-wide hover:bg-data-stream/10 transition-colors duration-300"
        >
          Design Your Shirt
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(158,201,217,0.08) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 0 L60 17.3 L60 34.6 L30 52 L0 34.6 L0 17.3 Z' fill='none' stroke='%239EC9D9' stroke-width='0.4' stroke-opacity='0.12'/%3E%3C/svg%3E")
          `,
        }}
      >
        <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-6">
          Zava Smart Materials · ZavaCore™ v2
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-white leading-tight max-w-5xl mb-4">
          Smart Fibers.
          <br />
          <span className="text-data-stream">Real-Time Intelligence.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-4 tracking-wide">
          Powered by ZavaCore™ Fiber
        </p>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
          The world's first truly seamless, intelligent textile — combining comfort and real-time insight for life's most demanding environments.
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-data-stream mb-10 tracking-wide">
          Go Ahead.
        </p>
        <a
          id="design"
          href="#segments"
          className="rounded-md border border-data-stream text-data-stream px-8 py-4 text-lg font-semibold tracking-wide hover:bg-data-stream/10 transition-colors duration-300"
        >
          Design Your Shirt
        </a>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-data-mesh/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">
            Our Story
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 max-w-3xl leading-snug">
            Health monitoring should disappear into what you wear.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20">
              <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-3">The Problem</p>
              <p className="text-white/80 leading-relaxed">
                Biomedical engineer <strong className="text-white">Kayo Miwa</strong> and materials physicist{" "}
                <strong className="text-white">Ray Tanaka</strong> grew frustrated with bulky, uncomfortable health monitors that patients refused to wear — and athletes stripped off after every session.
              </p>
            </div>
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20">
              <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-3">The Breakthrough</p>
              <p className="text-white/80 leading-relaxed">
                In 2017 they built the <strong className="text-white">ThermoCore Baselayer</strong> — a prototype that embedded sensing directly into fiber. The insight was simple: if monitoring disappears into clothing, people stop taking it off.
              </p>
            </div>
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20">
              <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-3">The Platform</p>
              <p className="text-white/80 leading-relaxed">
                Eight years of peer-reviewed research and cross-industry collaboration produced the{" "}
                <strong className="text-white">ZavaCore Fiber platform</strong> in 2025 — a global smart-textiles standard built on scientific rigor, not marketing claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section id="segments" className="py-16 md:py-24 px-6 md:px-12 bg-zava-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">
            Markets
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 max-w-2xl leading-snug">
            Built for every environment that demands more.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((s) => (
              <div
                key={s.label}
                className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 group hover:bg-data-slate transition-colors duration-300"
              >
                <div className="text-data-stream mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <p className="text-xs font-semibold tracking-widest text-data-stream/70 uppercase mb-2">{s.label}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-data-stream/10 border border-data-stream/20 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-2">Your Vertical</p>
                <h3 className="text-lg font-semibold text-white mb-3">Is your application different?</h3>
                <p className="text-white/70 text-sm leading-relaxed">ZavaCore™ is a modular platform. If your environment has a monitoring challenge, we want to hear about it.</p>
              </div>
              <a
                href="#design"
                className="mt-6 inline-block rounded-md border border-data-stream text-data-stream px-5 py-2 text-sm font-semibold tracking-wide hover:bg-data-stream/10 transition-colors duration-300 text-center"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-data-mesh/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">
            Differentiation
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 max-w-2xl leading-snug">
            Why ZavaCore™ v2 is different.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <div key={d.title} className="border-l-2 border-data-stream pl-5 py-1">
                <h3 className="text-base font-semibold text-white mb-2">{d.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Fiber Technology */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-zava-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">
            Technology
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 max-w-2xl leading-snug">
            Intelligence woven at the fiber level.
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 leading-relaxed">
            ZavaCore™ uses a silver-plated graphene mesh co-woven with conventional textile yarns. Sensing elements are integrated at the fiber junction — invisible, washable, and structurally load-bearing.
          </p>
          {/* Visual fiber diagram */}
          <div className="relative rounded-sm bg-data-slate/40 border border-white/5 p-8 md:p-12 overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%239EC9D9' stroke-width='0.5'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='%239EC9D9' stroke-width='0.5'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: "01",
                  title: "Graphene Mesh",
                  desc: "Silver-plated graphene filaments form a conductive lattice — lightweight, heat-resistant, and washable up to 200 cycles.",
                },
                {
                  step: "02",
                  title: "Sensor Nodes",
                  desc: "Micro-sensor nodes at fiber junctions capture biometric, thermal, and motion data continuously at up to 512 Hz.",
                },
                {
                  step: "03",
                  title: "Data Stream",
                  desc: "Low-power BLE and proprietary mesh protocol transmit data to edge compute or cloud in under 50 ms latency.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center gap-3">
                  <span className="text-4xl font-bold text-data-stream/30 tracking-widest">{item.step}</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Connector line */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-data-stream/20 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Roadmap / What's Next */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-data-mesh/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 max-w-2xl leading-snug">
            What's next for ZavaCore™.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roadmapSteps.map((step) => (
              <div key={step.phase} className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20">
                <p className="text-3xl font-bold text-data-stream/20 tracking-widest mb-3">{step.phase}</p>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-zava-black border-t border-data-stream/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-data-stream uppercase mb-4">Ready?</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-snug">
            Experience intelligence in every thread.
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Design a ZavaCore™ shirt tailored to your application — configure fabric, sensing profile, color, and size.
          </p>
          <a
            href="#design"
            className="inline-block rounded-md border border-data-stream text-data-stream px-8 py-4 text-lg font-semibold tracking-wide hover:bg-data-stream/10 transition-colors duration-300"
          >
            Design Your Shirt
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zava-black border-t border-white/5 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold tracking-widest text-white mb-1">ZAVA</p>
            <p className="text-xs tracking-widest text-white/40 uppercase">Smart Materials · Go Ahead.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-white/40 tracking-widest uppercase">
            <a href="#segments" className="hover:text-data-stream transition-colors duration-300">Markets</a>
            <a href="#" className="hover:text-data-stream transition-colors duration-300">Technology</a>
            <a href="#" className="hover:text-data-stream transition-colors duration-300">Research</a>
            <a href="#" className="hover:text-data-stream transition-colors duration-300">Partners</a>
            <a href="#" className="hover:text-data-stream transition-colors duration-300">Contact</a>
          </div>
          <p className="text-xs text-white/30">© 2025 Zava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
