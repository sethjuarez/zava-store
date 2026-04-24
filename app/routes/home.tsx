import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ZavaCore v2 - Design Your Shirt with AI | Zava Smart Materials" },
    { name: "description", content: "Experience ZavaCore™ Fiber - the world's first truly seamless, intelligent textile. Design custom shirts with AI-powered insights built into every thread." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zava-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zava-black/90 backdrop-blur-md border-b border-data-mesh/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-data-stream">ZAVA</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#product"
                  className="text-sm font-medium text-white/70 hover:text-data-stream transition-colors duration-300"
                >
                  PRODUCT
                </a>
                <a
                  href="#segments"
                  className="text-sm font-medium text-white/70 hover:text-data-stream transition-colors duration-300"
                >
                  SEGMENTS
                </a>
                <a
                  href="#technology"
                  className="text-sm font-medium text-white/70 hover:text-data-stream transition-colors duration-300"
                >
                  TECHNOLOGY
                </a>
                <a
                  href="#roadmap"
                  className="text-sm font-medium text-white/70 hover:text-data-stream transition-colors duration-300"
                >
                  ROADMAP
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="rounded-md border border-data-stream text-data-stream px-6 py-3 hover:bg-data-stream/10 transition-colors duration-300 font-semibold">
                Design Your Shirt
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white/70 hover:text-data-stream">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hex Mesh Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cg fill='none' stroke='%23${encodeURIComponent('0D2A35').slice(1)}' stroke-width='1'%3E%3Cpath d='M15 26l15-9 15 9-15 9z'/%3E%3Cpath d='M30 0l15 9v17l-15 9-15-9V9z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 52px'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-white mb-6">
            Design Your Shirt
            <br />
            <span className="text-data-stream">with AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-4">
            Powered by ZavaCore™ Fiber
          </p>
          
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            The world's first truly seamless, intelligent textile—combining comfort and real-time insight 
            for life's most demanding environments.
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-data-stream mb-12">
            Go Ahead.
          </p>
          
          <button className="rounded-md border border-data-stream text-data-stream px-8 py-4 text-lg font-semibold hover:bg-data-stream/10 transition-colors duration-300">
            Design Your Shirt
          </button>
        </div>
      </section>

      {/* Founding Story Section */}
      <section id="product" className="py-16 md:py-24 bg-data-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-data-stream uppercase tracking-wider mb-4">
              OUR STORY
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Built from Frustration.
              <br />
              Engineered for Life.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Founders Kayo Miwa and Ray Tanaka started from frustration with cumbersome health monitors 
                that required external devices, wires, and uncomfortable attachments.
              </p>
              
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                They created smart-textile prototypes that embedded sensing directly into fabric, 
                leading to ZavaCore Fiber — the first production-ready intelligent textile platform.
              </p>
              
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                What started as a solution to personal discomfort became a revolutionary platform 
                that transforms any fabric into a sophisticated sensing network.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-data-stream" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Founders</h3>
                  <p className="text-sm text-white/60">Kayo Miwa & Ray Tanaka</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                "We believe the future of health monitoring isn't about adding more devices to our lives—
                it's about making the devices we already use smarter, more comfortable, and truly seamless."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments Section */}
      <section id="segments" className="py-16 md:py-24 bg-zava-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-data-stream uppercase tracking-wider mb-4">
              TARGET MARKETS
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Built for the World's
              <br />
              Most Demanding Environments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg hover:bg-data-slate/90 transition-all duration-300 ease-out">
              <div className="w-12 h-12 bg-data-stream/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-data-stream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Healthcare & Medical Devices
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Continuous health monitoring without external sensors, enabling seamless patient care 
                and real-time health insights.
              </p>
            </div>

            {/* Performance Apparel */}
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg hover:bg-data-slate/90 transition-all duration-300 ease-out">
              <div className="w-12 h-12 bg-data-stream/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-data-stream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Performance Apparel & Sports
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Real-time athletic performance and recovery data integrated directly into sportswear 
                for elite athletes and fitness enthusiasts.
              </p>
            </div>

            {/* Automotive */}
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg hover:bg-data-slate/90 transition-all duration-300 ease-out">
              <div className="w-12 h-12 bg-data-stream/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-data-stream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Automotive & Mobility
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Driver health monitoring integrated into seating and wearables for enhanced safety 
                and autonomous vehicle systems.
              </p>
            </div>

            {/* Industrial Safety */}
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg hover:bg-data-slate/90 transition-all duration-300 ease-out">
              <div className="w-12 h-12 bg-data-stream/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-data-stream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.415 5 5 0 017.07 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Industrial Safety & Workplace
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Hazard detection and worker health monitoring in high-risk environments including 
                construction, manufacturing, and mining.
              </p>
            </div>

            {/* Aerospace & Defense */}
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg hover:bg-data-slate/90 transition-all duration-300 ease-out md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-data-stream/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-data-stream" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Aerospace & Defense
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Mission-critical biometric monitoring under extreme conditions for pilots, astronauts, 
                and military personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24 bg-data-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-data-stream uppercase tracking-wider mb-4">
              ZAVACORE TECHNOLOGY
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Sensors Inside the Fiber.
              <br />
              Not Attached to It.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Silver-Plated Graphene Mesh</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Conductive pathways woven directly into every thread, creating an invisible sensing network.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Everyday Comfort</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Indistinguishable from premium textiles with no bulk, wires, or uncomfortable attachments.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Durability & Washability</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Rated for 200+ wash cycles while maintaining full sensing capabilities and comfort.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Heat Resistance</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Stable performance from -40°C to 120°C across all environmental conditions.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Millisecond sensor response with edge-processed data for instant insights and alerts.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Modular & Scalable</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Configurable sensor arrays for any use case from basic monitoring to complex analytics.
              </p>
            </div>

            <div className="bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-3">Scientific Credibility</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Peer-reviewed material science with regulatory-ready data for medical and industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24 bg-zava-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-data-stream uppercase tracking-wider mb-4">
              ROADMAP
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              What's Next for ZavaCore
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Needs Assessments with Pilot Partners</h3>
                <p className="text-white/70">
                  Conducting deep-dive assessments with strategic partners across all five target segments to validate use cases and technical requirements.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Partner Pilot Programs</h3>
                <p className="text-white/70">
                  Launching controlled pilot programs with select partners in healthcare, sports, automotive, industrial, and aerospace sectors.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Case Studies and ROI Data Collection</h3>
                <p className="text-white/70">
                  Gathering comprehensive performance data and ROI metrics to demonstrate value proposition across all use cases.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Thought Leadership and Scientific Publications</h3>
                <p className="text-white/70">
                  Publishing peer-reviewed research and establishing thought leadership in intelligent textiles and wearable sensing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Demo Kits and Sample Distribution</h3>
                <p className="text-white/70">
                  Creating comprehensive demo kits and sample textile programs for potential partners and customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-data-stream/20 rounded-full flex items-center justify-center">
                <span className="text-data-stream font-semibold">6</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Regulatory Approvals and Global Expansion</h3>
                <p className="text-white/70">
                  Securing necessary regulatory approvals for medical and industrial applications while expanding into global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zava-black border-t border-data-mesh/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <span className="text-2xl font-bold text-data-stream">ZAVA</span>
              <p className="text-data-stream font-semibold">Go Ahead.</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-8">
              <a
                href="#product"
                className="text-sm text-white/60 hover:text-data-stream transition-colors duration-300"
              >
                PRODUCT
              </a>
              <a
                href="#segments"
                className="text-sm text-white/60 hover:text-data-stream transition-colors duration-300"
              >
                SEGMENTS
              </a>
              <a
                href="#technology"
                className="text-sm text-white/60 hover:text-data-stream transition-colors duration-300"
              >
                TECHNOLOGY
              </a>
              <a
                href="#roadmap"
                className="text-sm text-white/60 hover:text-data-stream transition-colors duration-300"
              >
                ROADMAP
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-data-mesh/30 text-center">
            <p className="text-sm text-white/60">
              © 2026 Zava Smart Materials. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
