import { Zap, ArrowRight, Heart } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from '@tanstack/react-router';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Custom LLM Integration for Institutions',
  'Admission Automation & Smart Application Filtering',
  'Predictive Analytics for Student Success',
  'AI-powered Academic Intelligence Dashboard',
  'Data Security & Compliance Architecture',
];

function buildServiceWhatsApp(serviceName: string): string {
  const message = `Hello Nimai Technologies, I am interested in ${serviceName}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appId =
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.hostname)
      : 'nimai-technologies';

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #1e3a8a 100%)',
      }}
      aria-label="Site footer"
    >
      {/* Top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Orbs */}
      <div className="orb w-64 h-64 bg-indigo-600/10 top-0 right-1/4" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-blue flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base tracking-tight">
                  Nimai
                </span>
                <span className="text-indigo-300 text-[10px] font-medium tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              AI-powered Institutional Intelligence Platform for Business Schools &amp; Agencies.
              Transforming education through smart automation and predictive intelligence.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hello Nimai Technologies, I would like to learn more about your AI solutions.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-4 inline-flex"
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-indigo-300 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href={buildServiceWhatsApp(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-indigo-300 text-sm transition-colors duration-200 flex items-start gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} Nimai Technologies Private Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link
              to="/privacy-policy"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-4 text-center">
          <p className="text-white/25 text-xs flex items-center justify-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-indigo-400 fill-indigo-400" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
