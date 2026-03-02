import { Link } from '@tanstack/react-router';
import { ArrowLeft, Shield, Zap } from 'lucide-react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page header */}
      <div
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%)',
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-blue flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-300" />
              <span className="text-indigo-300 text-sm font-medium">Nimai Technologies</span>
            </div>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: March 2, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-display prose-headings:text-brand-navy">
          <div className="glass-card-light rounded-2xl p-8 sm:p-10 border border-indigo-100">
            <p className="text-slate-600 leading-relaxed mb-6">
              Nimai Technologies Private Limited ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may
              collect on the Site includes:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 ml-4">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your
                name, institution name, email address, and telephone number, that you voluntarily
                give to us when you contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information our servers automatically collect when you
                access the Site, such as your IP address, browser type, operating system, access
                times, and the pages you have viewed.
              </li>
              <li>
                <strong>Institutional Data:</strong> Data related to your institution that you
                provide when using our AI platform services, subject to separate data processing
                agreements.
              </li>
            </ul>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              2. Use of Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth,
              efficient, and customized experience. Specifically, we may use information collected
              about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website and services</li>
              <li>Monitor and analyze usage and trends to improve your experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              3. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We use administrative, technical, and physical security measures to help protect your
              personal information. While we have taken reasonable steps to secure the personal
              information you provide to us, please be aware that despite our efforts, no security
              measures are perfect or impenetrable, and no method of data transmission can be
              guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We may share your information with third parties that perform services for us or on our
              behalf, including data analysis, email delivery, hosting services, customer service,
              and marketing assistance. We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties without your consent.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              You have the right to access, update, or delete the information we have on you. You
              may also have the right to object to or restrict certain processing of your data. To
              exercise these rights, please contact us at{' '}
              <a
                href="mailto:privacy@nimaitechnologies.com"
                className="text-brand-indigo hover:underline"
              >
                privacy@nimaitechnologies.com
              </a>
              .
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              6. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br />
              <strong>Nimai Technologies Private Limited</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:privacy@nimaitechnologies.com"
                className="text-brand-indigo hover:underline"
              >
                privacy@nimaitechnologies.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
