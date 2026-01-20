interface MarketCardProps {
  title: string;
  icon: React.ReactNode;
  opportunity: string;
  differentiation: string;
  recommendation: string;
}

function MarketCard({
  title,
  icon,
  opportunity,
  differentiation,
  recommendation,
}: MarketCardProps) {
  return (
    <div className="bg-data-slate/80 backdrop-blur-sm p-8 shadow-lg shadow-black/20 group hover:shadow-data-stream/10 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 border border-data-stream/50 flex items-center justify-center text-data-stream group-hover:bg-data-stream/10 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-data-stream text-xs font-medium tracking-wider uppercase mb-1">
            OPPORTUNITY
          </p>
          <p className="text-white/70 text-sm leading-relaxed">{opportunity}</p>
        </div>

        <div>
          <p className="text-data-stream text-xs font-medium tracking-wider uppercase mb-1">
            DIFFERENTIATION
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            {differentiation}
          </p>
        </div>

        <div>
          <p className="text-data-stream text-xs font-medium tracking-wider uppercase mb-1">
            RECOMMENDATION
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            {recommendation}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <a
          href="#contact"
          className="text-data-stream text-sm font-medium hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          Learn More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

const markets: MarketCardProps[] = [
  {
    title: "Healthcare & Medical Devices",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    opportunity:
      "The healthcare sector is rapidly embracing remote patient monitoring and personalized medicine. ZavaCore™'s sensor-embedded fibers enable continuous, comfortable, and discreet tracking of vitals.",
    differentiation:
      "Unlike competitors relying on external devices or inflexible substrates, ZavaCore™ delivers seamless integration within everyday garments and bedding.",
    recommendation:
      "Target hospital networks, telehealth providers, eldercare facilities, and medical device OEMs. Develop partnerships for FDA/CE-approved medical wearables.",
  },
  {
    title: "Performance Apparel & Sports",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    opportunity:
      "Elite athletes, teams, and fitness enthusiasts demand real-time insights to optimize performance and recovery. The fitness wearables market leaves opportunity for seamless, garment-based analytics.",
    differentiation:
      "ZavaCore™'s light, breathable, and washable fibers can be woven into base layers, providing granular feedback on heart rate, temperature, hydration, and movement patterns.",
    recommendation:
      "Expand on past success with partners. Target major sports apparel brands and professional teams. Co-develop limited-edition smart training gear with data app integration.",
  },
  {
    title: "Automotive & Mobility",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    opportunity:
      "Automakers are increasingly focused on occupant health, safety, and comfort. Smart fabrics in seats, belts, and vehicle interiors offer new dimensions of interaction and protection.",
    differentiation:
      "ZavaCore™'s form factor and durability allow OEMs to build health and environmental monitoring directly into automotive textiles, from luxury to fleet vehicles.",
    recommendation:
      "Engage with multiple OEMs. Pilot programs with top-tier automakers for premium and safety-focused lineups; explore partnerships for public transport seating upgrades.",
  },
  {
    title: "Industrial Safety & Workplace",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    opportunity:
      "Employers and insurers seek to reduce risk and improve safety. Smart uniforms and PPE with embedded hazard, fatigue, and exposure sensors are in demand.",
    differentiation:
      "ZavaCore™ is uniquely heat-resistant and robust, ideal for industrial, construction, and emergency responder uniforms.",
    recommendation:
      "Partner with industrial apparel suppliers and government agencies to pilot next-generation safety wearables.",
  },
  {
    title: "Aerospace & Defense",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    opportunity:
      "High-performance, adaptive textiles are crucial for mission success in extreme conditions—temperature, pressure, G-force, and radiation.",
    differentiation:
      "ZavaCore™'s graphene-based, silver-plated construction offers exceptional conductivity, lightness, and resilience.",
    recommendation:
      "Respond to government and defense RFPs. Co-develop mission-specific gear for pilots, astronauts, and ground crews.",
  },
];

export function MarketOpportunities() {
  return (
    <section id="markets" className="py-24 md:py-32 bg-data-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-data-stream text-sm font-medium tracking-[0.3em] uppercase mb-4">
            MARKET OPPORTUNITIES
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Strategic Positioning Across Industries
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            The debut of ZavaCore™ Fiber comes at a pivotal moment, as
            organizations across automotive, textiles, healthcare, government,
            and aerospace seek partnerships with Zava.
          </p>
        </div>

        {/* Market Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <MarketCard key={market.title} {...market} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm mb-6">
            Interested in exploring partnership opportunities?
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md border border-data-stream text-data-stream px-8 py-4 text-sm font-medium tracking-wider hover:bg-data-stream/10 transition-colors duration-300"
          >
            CONTACT OUR TEAM
          </a>
        </div>
      </div>
    </section>
  );
}

