import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';

interface FormData {
  institutionName: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = {
  institutionName: '',
  contactPerson: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.institutionName.trim()) newErrors.institutionName = 'Institution name is required';
    if (!form.contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello Nimai Technologies,

I would like to get in touch with you. Here are my details:

🏫 Institution: ${form.institutionName}
👤 Contact Person: ${form.contactPerson}
📧 Email: ${form.email}
📞 Phone: ${form.phone}

💬 Message:
${form.message}

Looking forward to hearing from you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-indigo" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-60" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-brand-indigo text-sm font-semibold tracking-wide uppercase border border-indigo-100">
            Contact Us
          </span>
        </div>

        {/* H2 Heading */}
        <h2
          id="contact-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-brand-navy mb-4 leading-tight"
        >
          Get In Touch
        </h2>

        <p className="text-center text-slate-500 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Ready to transform your institution with AI? Let's start a conversation. Our experts are
          available to guide you through the right solution.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-4">
                Let's Build Something Remarkable
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you're exploring AI for the first time or looking to upgrade your existing
                systems, our team is here to help you navigate the journey.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+91 XXXXXXXXXX',
                  href: `https://wa.me/${WHATSAPP_NUMBER}`,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@nimaitechnologies.com',
                  href: 'mailto:hello@nimaitechnologies.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 XXXXXXXXXX',
                  href: `tel:+${WHATSAPP_NUMBER}`,
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'India',
                  href: undefined,
                },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200">
                    <div className="icon-container">
                      <Icon className="w-5 h-5 text-brand-indigo" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                      <div className="text-slate-700 text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hello Nimai Technologies, I would like to learn more about your AI solutions for institutions.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-sm"
            >
              <SiWhatsapp className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass-card-light rounded-2xl p-6 sm:p-8 border border-indigo-100">
              <h3 className="font-display text-xl font-bold text-brand-navy mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Institution Name */}
                <div>
                  <label
                    htmlFor="institutionName"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Institution Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="institutionName"
                    name="institutionName"
                    type="text"
                    value={form.institutionName}
                    onChange={handleChange}
                    placeholder="e.g. ABC Business School"
                    className={`form-input ${errors.institutionName ? 'border-rose-400 focus:border-rose-500' : ''}`}
                    aria-describedby={errors.institutionName ? 'institutionName-error' : undefined}
                  />
                  {errors.institutionName && (
                    <p id="institutionName-error" className="mt-1 text-xs text-rose-500">
                      {errors.institutionName}
                    </p>
                  )}
                </div>

                {/* Contact Person */}
                <div>
                  <label
                    htmlFor="contactPerson"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Contact Person <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    value={form.contactPerson}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`form-input ${errors.contactPerson ? 'border-rose-400' : ''}`}
                    aria-describedby={errors.contactPerson ? 'contactPerson-error' : undefined}
                  />
                  {errors.contactPerson && (
                    <p id="contactPerson-error" className="mt-1 text-xs text-rose-500">
                      {errors.contactPerson}
                    </p>
                  )}
                </div>

                {/* Email + Phone row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@institution.edu"
                      className={`form-input ${errors.email ? 'border-rose-400' : ''}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className={`form-input ${errors.phone ? 'border-rose-400' : ''}`}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-rose-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your institution and what you're looking to achieve with AI..."
                    className={`form-input resize-none ${errors.message ? 'border-rose-400' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-whatsapp w-full justify-center text-base py-3.5"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                  <Send className="w-4 h-4 ml-auto" />
                </button>

                <p className="text-center text-slate-400 text-xs">
                  Your message will open in WhatsApp. We typically respond within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
