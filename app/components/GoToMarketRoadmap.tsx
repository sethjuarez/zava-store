interface RoadmapStep {
  number: string;
  title: string;
  description: string;
}

const roadmapSteps: RoadmapStep[] = [
  {
    number: "01",
    title: "Cross-Industry Needs Assessment",
    description:
      "Conduct in-depth interviews and workshops with stakeholders across healthcare, automotive, and government to refine product-market fit and prioritize segments based on urgency, adoption readiness, and revenue potential.",
  },
  {
    number: "02",
    title: "Pilot Partnerships",
    description:
      "Launch strategic pilot programs with select partners in each target segment. Collect case studies and quantitative data to demonstrate ROI and real-world benefits.",
  },
  {
    number: "03",
    title: "Thought Leadership & Media",
    description:
      "Publish white papers and speak at major industry events to shape the smart textile narrative and position Zava as the trusted authority.",
  },
  {
    number: "04",
    title: "Sales Enablement & Training",
    description:
      "Arm sales teams with technical demos, sample kits, and tailored value propositions for each segment. Develop co-marketing campaigns with high-profile launch partners.",
  },
  {
    number: "05",
    title: "Feedback Loops & Iteration",
    description:
      "Rapidly incorporate partner and user feedback to refine the fiber and its applications, staying ahead of evolving customer needs.",
  },
  {
    number: "06",
    title: "Global Expansion",
    description:
      "As regulatory approvals and pilot results accumulate, scale into new geographies and verticals through licensing, direct sales, and OEM integration.",
  },
];

export function GoToMarketRoadmap() {
  return (
    <section id="resources" className="py-24 md:py-32 bg-data-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-data-stream text-sm font-medium tracking-[0.3em] uppercase mb-4">
            STRATEGIC ROADMAP
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Go-To-Market Strategy
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Our phased approach ensures ZavaCore™ Fiber captures the
            imagination—and investment—of the world's most influential sectors.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-data-stream via-data-stream/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-data-mesh/50 backdrop-blur-sm p-8 border border-white/5 hover:border-data-stream/30 transition-colors duration-300 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-xl`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-data-stream text-3xl font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center point */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-data-stream rounded-full border-4 border-data-slate hidden md:block" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <p className="text-data-stream text-sm font-medium tracking-[0.3em] uppercase mb-4">
              MARKET LANDSCAPE
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Emerging Trends in Smart Textiles
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare Integration",
                desc: "Surge in interest for continuous, non-invasive patient monitoring and remote diagnostics.",
              },
              {
                title: "Wearable Fitness & Lifestyle",
                desc: "Expanding beyond wristbands into apparel, shoes, and bedding for athletes and wellness-conscious consumers.",
              },
              {
                title: "Industrial & Occupational Safety",
                desc: "Smart uniforms for hazardous environments with embedded sensors for heat, chemical, and fatigue detection.",
              },
              {
                title: "Automotive Interiors",
                desc: "Intelligent seating and upholstery with built-in occupant monitoring, climate adaptation, and safety detection.",
              },
              {
                title: "Aerospace & Defense",
                desc: "Lightweight, multifunctional fabrics for extreme environments, adaptive camouflage, and survivability gear.",
              },
              {
                title: "Sustainable Materials",
                desc: "Eco-friendly fibers and closed-loop recyclability gaining traction as regulatory and consumer focus intensifies.",
              },
            ].map((trend) => (
              <div
                key={trend.title}
                className="p-6 bg-zava-black/50 border border-white/5"
              >
                <h4 className="text-data-stream font-medium mb-2">
                  {trend.title}
                </h4>
                <p className="text-white/50 text-sm">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

