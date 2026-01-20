import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-zava-black border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-data-stream flex items-center justify-center">
                <span className="text-data-stream font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-wide">
                ZAVA
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Weaving the future with intelligent fabric. ZavaCore™ technology
              is revolutionizing how we interact with textiles across
              healthcare, sports, automotive, and beyond.
            </p>
            <p className="text-data-stream font-semibold tracking-wider">
              Go Ahead.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">
              ZAVACORE
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Field (B2C)", href: "#field" },
                { label: "Systems (B2B)", href: "#systems" },
                { label: "Nano", href: "#nano" },
                { label: "Technology", href: "#technology" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-data-stream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Zava", href: "#about" },
                { label: "Leadership", href: "#leadership" },
                { label: "Careers", href: "#careers" },
                { label: "Press", href: "#press" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-data-stream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">
              GLOBAL FACILITIES
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>North America</li>
              <li>Europe</li>
              <li>Asia Pacific</li>
              <li>Middle East</li>
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-4 text-sm tracking-wider">
              CONNECT
            </h4>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="text-white/50 hover:text-data-stream transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className="text-white/50 hover:text-data-stream transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="text-white/50 hover:text-data-stream transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Zava Technologies, Inc. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-200"
              >
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

