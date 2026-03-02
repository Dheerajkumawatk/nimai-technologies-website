import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-brand-navy/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 group"
              aria-label="Nimai Technologies Home"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-blue flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-700 text-white text-base tracking-tight">
                  Nimai
                </span>
                <span className="text-indigo-300 text-[10px] font-medium tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="ml-3 btn-primary text-sm py-2 px-5"
              >
                Get Demo
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <nav
            className="absolute top-0 right-0 h-full w-72 bg-gradient-to-b from-brand-navy to-brand-navy-mid border-l border-white/10 shadow-2xl flex flex-col pt-20 px-6 pb-8"
            aria-label="Mobile navigation"
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary w-full justify-center text-sm"
              >
                Request Demo
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs text-center">
                Nimai Technologies Private Limited
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
