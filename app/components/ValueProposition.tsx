interface ValuePropItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueProps: ValuePropItem[] = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Unmatched Comfort & Integration",
    description:
      "Unlike patchwork solutions or rigid devices, ZavaCore™ is engineered into the very fabric of clothing, furnishings, and equipment—no bulky add-ons, no trade-offs.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Intelligent, Real-Time Analytics",
    description:
      "Proprietary sensor arrays and conductive yarn enable continuous, granular data capture—actionable insights for health, safety, and performance.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Material Superiority",
    description:
      "The unique silver-plated graphene mesh is lightweight, highly durable, heat-resistant, and washable, supporting applications from hospital beds to industrial uniforms.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Modular & Scalable",
    description:
      "ZavaCore™ can be customized for different environments and use cases—healthcare, automotive, sports, or space—giving partners an edge in product differentiation.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Validated & Peer-Reviewed",
    description:
      "Zava's commitment to transparency and scientific rigor is proven by recent publications and open collaboration with industry leaders.",
  },
];

export function ValueProposition() {
  return (
    <section id="zavacore" className="py-24 md:py-32 bg-zava-black relative">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="value-hex"
              width="40"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 47L0 35V12L20 0L40 12V35L20 47Z"
                fill="none"
                stroke="#9EC9D9"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#value-hex)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-data-stream text-sm font-medium tracking-[0.3em] uppercase mb-4">
            VALUE PROPOSITION
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
            What Sets ZavaCore™ Apart
          </h2>
          <div className="bg-data-slate/50 backdrop-blur-sm p-8 max-w-4xl mx-auto border-l-4 border-data-stream">
            <p className="text-data-stream text-xl md:text-2xl font-medium italic">
              "ZavaCore™ Fiber: The world's first truly seamless, intelligent
              textile—combining comfort and real-time insight for life's most
              demanding environments."
            </p>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group p-8 border border-white/10 hover:border-data-stream/50 transition-all duration-300 hover:bg-data-mesh/30"
            >
              <div className="text-data-stream mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {prop.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology highlight */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-data-stream text-sm font-medium tracking-[0.2em] uppercase mb-4">
              THE SCIENCE
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Silver-Plated Graphene Mesh Technology
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              At the heart of ZavaCore™ is our proprietary silver-plated
              graphene mesh—a revolutionary material that combines the
              exceptional conductivity of silver with the strength and
              flexibility of graphene. This unique construction enables:
            </p>
            <ul className="space-y-3">
              {[
                "Superior electrical conductivity for precise sensor readings",
                "Exceptional durability and heat resistance",
                "Lightweight construction without sacrificing performance",
                "Full washability for practical, everyday use",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-data-stream flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual representation */}
          <div className="relative h-80 md:h-96 bg-data-slate/30 overflow-hidden">
            {/* Animated hexagonal pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="tech-hex"
                  width="30"
                  height="52"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M15 0L30 8.66V25.98L15 34.64L0 25.98V8.66L15 0Z"
                    fill="none"
                    stroke="#9EC9D9"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tech-hex)" />
            </svg>

            {/* Data points */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-data-stream rounded-full animate-pulse-glow" />
            <div
              className="absolute top-1/2 right-1/3 w-2 h-2 bg-data-stream rounded-full animate-pulse-glow"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-data-stream/70 rounded-full animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-data-stream text-6xl font-bold">Ag</p>
                <p className="text-white/50 text-sm mt-2">
                  SILVER-PLATED GRAPHENE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

