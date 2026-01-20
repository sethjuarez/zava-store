import { useState } from "react";
import { Link } from "react-router";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ZAVACORE",
    href: "#zavacore",
    children: [
      { label: "Field (B2C)", href: "#field" },
      { label: "Systems (B2B)", href: "#systems" },
      { label: "Nano", href: "#nano" },
    ],
  },
  { label: "MARKETS", href: "#markets" },
  { label: "RESOURCES", href: "#resources" },
  { label: "ABOUT", href: "#about" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zava-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-data-stream flex items-center justify-center">
              <span className="text-data-stream font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-wide hidden sm:block">
              ZAVA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-white/70 hover:text-data-stream text-sm font-medium tracking-wider transition-colors duration-300"
                >
                  {item.label}
                </a>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 py-2 bg-data-slate/95 backdrop-blur-md min-w-[180px] shadow-lg shadow-black/20">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-white/70 hover:text-data-stream hover:bg-data-mesh/50 text-sm transition-colors duration-200"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="#go-ahead"
              className="rounded-md border border-data-stream text-data-stream px-5 py-2 text-sm font-medium tracking-wider hover:bg-data-stream/10 transition-colors duration-300"
            >
              GO AHEAD
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white/70 hover:text-data-stream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-white/70 hover:text-data-stream text-sm font-medium tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-white/50 hover:text-data-stream text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#go-ahead"
              className="inline-block mt-4 rounded-md border border-data-stream text-data-stream px-5 py-2 text-sm font-medium tracking-wider hover:bg-data-stream/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              GO AHEAD
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

