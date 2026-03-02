import { Clock, Cpu, ShieldCheck, Rocket, Scale } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Reduced Administrative Workload',
    description:
      'Automate repetitive tasks — from document processing to scheduling — freeing your staff to focus on what truly matters: student success and institutional growth.',
    stat: '80%',
    statLabel: 'Reduction in admin time',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Decision Making',
    description:
      'Replace gut-feel decisions with data-backed intelligence. Our AI models analyze thousands of variables to surface actionable insights for leadership teams.',
    stat: '3x',
    statLabel: 'Faster strategic decisions',
    color: 'from-indigo-500 to-violet-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Infrastructure',
    description:
      'Built on zero-trust architecture with military-grade encryption. Your institutional data is protected at every layer — storage, transit, and processing.',
    stat: '99.9%',
    statLabel: 'Security compliance rate',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: Rocket,
    title: 'Future-Proof Technology',
    description:
      'Our platform evolves with the AI landscape. Regular model updates, new feature releases, and continuous R&D ensure you always have access to the latest innovations.',
    stat: '2026',
    statLabel: 'Ready technology stack',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    icon: Scale,
    title: 'Scalable Institutional Solutions',
    description:
      'Whether you serve 500 or 50,000 students, our platform scales seamlessly. Modular architecture means you pay for what you need and expand as you grow.',
    stat: '10x',
    statLabel: 'Scalability headroom',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="section-padding dark-section relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Orbs */}
      <div className="orb w-80 h-80 bg-indigo-600/15 top-1/4 -right-20" aria-hidden="true" />
      <div className="orb w-60 h-60 bg-blue-600/10 bottom-1/4 -left-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-sm font-semibold tracking-wide uppercase border border-white/15">
            Why Choose Us
          </span>
        </div>

        {/* H2 Heading */}
        <h2
          id="why-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 leading-tight"
        >
          Why Choose{' '}
          <span className="gradient-text-blue">Nimai Technologies</span>
        </h2>

        <p className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          We don't just deliver software — we deliver transformation. Here's what sets us apart from
          every other EdTech vendor in the market.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLast = index === features.length - 1;
            return (
              <article
                key={feature.title}
                className={`card-hover glass-card rounded-2xl p-6 flex flex-col ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon + Stat row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-white">
                      {feature.stat}
                    </div>
                    <div className="text-white/40 text-xs">{feature.statLabel}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'GDPR Compliant', icon: '🔒' },
            { label: 'ISO 27001 Ready', icon: '✅' },
            { label: 'Ethical AI Certified', icon: '🤖' },
            { label: '24/7 Support', icon: '🛡️' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">{badge.icon}</div>
              <div className="text-white/70 text-xs font-medium">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
