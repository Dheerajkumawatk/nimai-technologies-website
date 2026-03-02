import { Lightbulb, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';

const highlightCards = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Pioneering AI-first solutions that redefine how institutions operate, learn, and grow in the digital era.',
    color: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-400/20',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'Enterprise-grade data security with end-to-end encryption, compliance frameworks, and ethical AI governance.',
    color: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
  },
  {
    icon: TrendingUp,
    title: 'Institutional Growth',
    description:
      'Measurable outcomes — from improved admission rates to enhanced student retention and academic excellence.',
    color: 'from-brand-indigo/20 to-brand-blue/10',
    iconColor: 'text-indigo-400',
    borderColor: 'border-indigo-400/20',
  },
];

const pillars = [
  'Domain expertise in education & institutional consulting',
  'AI-driven transformation across all institutional workflows',
  'Secure, compliant data architecture built for education',
  'Ethical AI with transparent, explainable decision models',
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-brand-indigo text-sm font-semibold tracking-wide uppercase border border-indigo-100">
            About Us
          </span>
        </div>

        {/* H2 Heading */}
        <h2
          id="about-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-brand-navy mb-6 leading-tight"
        >
          Bridging Traditional Pedagogy with{' '}
          <span className="gradient-text">Cutting-Edge AI</span>
        </h2>

        <p className="text-center text-slate-500 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          At Nimai Technologies, we combine deep domain expertise in education with the transformative
          power of artificial intelligence to create institutional intelligence platforms that truly
          make a difference.
        </p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Content */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-6">
              Our Vision & Mission
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              We envision a future where every educational institution — from premier business schools
              to specialized agencies — operates with the intelligence and efficiency of a Fortune 500
              enterprise. Our mission is to{' '}
              <strong className="text-brand-navy">reduce administrative burden</strong> and{' '}
              <strong className="text-brand-navy">maximize student learning impact</strong> through
              purposeful AI integration.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our platform is built on a foundation of ethical AI compliance, ensuring every
              algorithmic decision is transparent, auditable, and aligned with the highest standards
              of academic integrity and data privacy.
            </p>

            {/* Pillars checklist */}
            <ul className="space-y-3">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-indigo mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm leading-relaxed">{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual stats block */}
          <div className="relative">
            <div className="glass-card-light p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10+', label: 'Years of EdTech Expertise', color: 'text-brand-indigo' },
                  { value: '50+', label: 'Institutions Transformed', color: 'text-brand-blue' },
                  { value: '99.9%', label: 'Platform Uptime SLA', color: 'text-emerald-600' },
                  { value: '100%', label: 'Ethical AI Compliance', color: 'text-amber-600' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-indigo-100/50"
                  >
                    <div className={`font-display text-3xl font-bold mb-1 ${item.color}`}>
                      {item.value}
                    </div>
                    <div className="text-slate-500 text-xs leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy-mid text-white">
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "Our AI doesn't replace educators — it empowers them with the intelligence to make
                  better decisions, faster."
                </p>
                <p className="text-indigo-300 text-xs mt-2 font-medium">
                  — Nimai Technologies Leadership
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className={`card-hover glass-card-light p-6 rounded-2xl border ${card.borderColor} relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50 rounded-2xl`}
                />
                <div className="relative">
                  <div className={`icon-container mb-4 ${card.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
