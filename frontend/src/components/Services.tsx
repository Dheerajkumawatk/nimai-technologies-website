import { Brain, Filter, BarChart3, LayoutDashboard, Lock, ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';

const services = [
  {
    icon: Brain,
    title: 'Custom LLM Integration for Institutions',
    description:
      'Deploy tailored large language models fine-tuned on your institutional data — enabling intelligent Q&A, automated content generation, and personalized learning pathways for students and faculty.',
    gradient: 'from-violet-500/10 to-indigo-500/10',
    iconBg: 'from-violet-500 to-indigo-600',
    borderColor: 'border-violet-200',
  },
  {
    icon: Filter,
    title: 'Admission Automation & Smart Application Filtering',
    description:
      'Streamline your entire admissions pipeline with AI-powered screening, scoring, and shortlisting. Reduce manual review time by up to 80% while improving candidate quality and diversity.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-200',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics for Student Success',
    description:
      'Leverage machine learning models to identify at-risk students early, predict academic outcomes, and enable proactive interventions that improve retention rates and learning outcomes.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-200',
  },
  {
    icon: LayoutDashboard,
    title: 'AI-powered Academic Intelligence Dashboard',
    description:
      'A unified command center for institutional leaders — real-time insights on enrollment, performance, faculty productivity, and resource utilization, all powered by AI-driven analytics.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconBg: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-200',
  },
  {
    icon: Lock,
    title: 'Data Security & Compliance Architecture',
    description:
      'Enterprise-grade security frameworks designed for educational institutions — FERPA, GDPR, and local compliance built-in, with end-to-end encryption, audit trails, and zero-trust architecture.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconBg: 'from-rose-500 to-pink-600',
    borderColor: 'border-rose-200',
  },
];

function buildWhatsAppUrl(serviceName: string): string {
  const message = `Hello Nimai Technologies, I am interested in ${serviceName}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f8faff 0%, #eef2ff 50%, #f8faff 100%)',
      }}
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-brand-indigo text-sm font-semibold tracking-wide uppercase border border-indigo-200">
            Our Services
          </span>
        </div>

        {/* H2 Heading */}
        <h2
          id="services-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-brand-navy mb-4 leading-tight"
        >
          AI Solutions Built for{' '}
          <span className="gradient-text">Institutional Excellence</span>
        </h2>

        <p className="text-center text-slate-500 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          From admission to graduation, our AI platform covers every touchpoint of the institutional
          journey with precision and intelligence.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;
            return (
              <article
                key={service.title}
                className={`card-hover glass-card-light rounded-2xl border ${service.borderColor} overflow-hidden flex flex-col ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Card gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.iconBg}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  {/* WhatsApp CTA */}
                  <a
                    href={buildWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-sm py-2.5 px-4 w-full justify-center"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Not sure which solution fits your institution?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hello Nimai Technologies, I would like to discuss which AI solution is best for my institution. Please guide me.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
