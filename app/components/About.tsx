export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-zava-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="about-hex"
              width="60"
              height="104"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0L60 17.32V51.96L30 69.28L0 51.96V17.32L30 0Z"
                fill="none"
                stroke="#9EC9D9"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hex)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-data-stream text-sm font-medium tracking-[0.3em] uppercase mb-4">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Pioneering the Smart Textile Revolution
          </h2>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline Visual */}
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-data-stream" />
                <div className="w-px h-full bg-data-stream/30" />
              </div>
              <div className="pb-8">
                <p className="text-data-stream font-semibold mb-2">2017</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  The Beginning
                </h3>
                <p className="text-white/60">
                  Founded through the visionary partnership of biomedical
                  engineer Kayo Miwa and materials physicist Ray Tanaka, Zava
                  was born from a frustration with cumbersome health monitors.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-data-stream/70" />
                <div className="w-px h-full bg-data-stream/30" />
              </div>
              <div className="pb-8">
                <p className="text-data-stream font-semibold mb-2">2018</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  ThermoCore Baselayer™
                </h3>
                <p className="text-white/60">
                  Our initial prototype demonstrated that intelligent materials
                  could be both comfortable and functional, capturing the
                  attention of early adopters.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-data-stream/50" />
                <div className="w-px h-full bg-data-stream/30" />
              </div>
              <div className="pb-8">
                <p className="text-data-stream font-semibold mb-2">2020-2024</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Rapid Growth
                </h3>
                <p className="text-white/60">
                  Expanded across industries, built strategic partnerships, and
                  grew to over 10,000 employees worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-data-stream" />
              </div>
              <div>
                <p className="text-data-stream font-semibold mb-2">2025</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  ZavaCore™ Fiber Launch
                </h3>
                <p className="text-white/60">
                  The groundbreaking debut of our most advanced technology yet,
                  positioning Zava at the forefront of the smart textile
                  revolution.
                </p>
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="bg-data-slate/30 p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Founded by Visionaries
            </h3>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-data-mesh flex items-center justify-center flex-shrink-0">
                  <span className="text-data-stream text-xl font-bold">KM</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Kayo Miwa</h4>
                  <p className="text-data-stream text-sm mb-2">
                    Co-Founder & Chief Science Officer
                  </p>
                  <p className="text-white/50 text-sm">
                    Biomedical engineer with a passion for merging healthcare
                    technology with everyday comfort.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-data-mesh flex items-center justify-center flex-shrink-0">
                  <span className="text-data-stream text-xl font-bold">RT</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ray Tanaka</h4>
                  <p className="text-data-stream text-sm mb-2">
                    Co-Founder & CEO
                  </p>
                  <p className="text-white/50 text-sm">
                    Materials physicist dedicated to revolutionizing how
                    materials interact with our daily lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/60 italic">
                "We believed that intelligence should be woven into
                materials—not layered on top. ZavaCore™ Fiber is the culmination
                of that vision."
              </p>
              <p className="text-data-stream text-sm mt-3">
                — Kayo Miwa & Ray Tanaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

