export function CallToAction() {
  return (
    <section
      id="go-ahead"
      className="py-24 md:py-32 bg-data-mesh relative overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-mesh"
              width="50"
              height="86"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0L50 14.43V43.3L25 57.73L0 43.3V14.43L25 0ZM25 86L50 71.57V57.73L25 43.3L0 57.73V71.57L25 86Z"
                fill="none"
                stroke="#9EC9D9"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-mesh)" />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-data-mesh via-transparent to-data-slate/50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-data-stream/10 border border-data-stream/30 px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-data-stream animate-pulse-glow" />
          <span className="text-data-stream text-sm font-medium tracking-wider">
            NOW ACCEPTING PARTNERSHIPS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Weave Intelligence Into Your Products?
        </h2>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Zava stands at the threshold of a smart textile revolution. ZavaCore™
          isn't just a product—it's a platform for innovation that will define
          the next era of health, safety, and performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contact"
            className="rounded-md bg-data-stream text-zava-black px-8 py-4 text-sm font-semibold tracking-wider hover:bg-data-stream/90 transition-colors duration-300 w-full sm:w-auto"
          >
            PARTNER WITH ZAVA
          </a>
          <a
            href="#demo"
            className="rounded-md border border-white/30 text-white px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto"
          >
            REQUEST A DEMO
          </a>
        </div>

        {/* Trust indicators */}
        <div className="pt-10 border-t border-white/10">
          <p className="text-white/40 text-sm mb-6 tracking-wider">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Placeholder company logos - represented as text for now */}
            {[
              "HEALTHCARE",
              "AUTOMOTIVE",
              "AEROSPACE",
              "SPORTS",
              "INDUSTRIAL",
            ].map((industry) => (
              <div
                key={industry}
                className="text-white/20 text-sm font-semibold tracking-widest"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion quote */}
        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="text-white/70 text-lg md:text-xl italic leading-relaxed">
            "By targeting high-value segments, forging strategic alliances, and
            communicating a bold, differentiated value proposition, Zava can
            ensure ZavaCore™ Fiber is woven into the fabric of tomorrow's
            world."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

