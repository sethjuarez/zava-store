export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zava-black">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal mesh pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hex-mesh"
              width="56"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M28 66L0 50V16L28 0L56 16V50L28 66ZM28 100L0 84V66L28 50L56 66V84L28 100Z"
                fill="none"
                stroke="#9EC9D9"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-mesh)" />
        </svg>

        {/* Data streams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-data-stream/40 to-transparent animate-pulse-glow" />
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-data-stream/30 to-transparent animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-data-stream/20 to-transparent animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-zava-black/50 to-zava-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Pre-headline */}
        <p className="text-data-stream text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 animate-float">
          Introducing ZavaCore™ Fiber
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide text-white mb-6">
          Weaving the Future with{" "}
          <span className="text-data-stream">Intelligent Fabric</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-4">
          The world's first truly seamless, intelligent textile—combining
          comfort and real-time insight for life's most demanding environments.
        </p>

        {/* Tagline */}
        <p className="text-white text-2xl md:text-3xl font-semibold tracking-wider mb-10">
          Go Ahead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#zavacore"
            className="rounded-md border border-data-stream text-data-stream px-8 py-4 text-sm font-medium tracking-wider hover:bg-data-stream/10 transition-colors duration-300"
          >
            EXPLORE ZAVACORE™
          </a>
          <a
            href="#markets"
            className="rounded-md bg-data-stream text-zava-black px-8 py-4 text-sm font-medium tracking-wider hover:bg-data-stream/90 transition-colors duration-300"
          >
            VIEW MARKETS
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div>
            <p className="text-data-stream text-3xl md:text-4xl font-bold">
              2017
            </p>
            <p className="text-white/50 text-sm mt-1">Founded</p>
          </div>
          <div>
            <p className="text-data-stream text-3xl md:text-4xl font-bold">
              10K+
            </p>
            <p className="text-white/50 text-sm mt-1">Employees</p>
          </div>
          <div>
            <p className="text-data-stream text-3xl md:text-4xl font-bold">6</p>
            <p className="text-white/50 text-sm mt-1">Industries</p>
          </div>
          <div>
            <p className="text-data-stream text-3xl md:text-4xl font-bold">
              Global
            </p>
            <p className="text-white/50 text-sm mt-1">Presence</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-data-stream rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}

