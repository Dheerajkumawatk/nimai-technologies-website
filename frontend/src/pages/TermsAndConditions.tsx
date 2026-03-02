import { Link } from '@tanstack/react-router';
import { ArrowLeft, FileText, Zap } from 'lucide-react';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
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
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-300" />
              <span className="text-indigo-300 text-sm font-medium">Nimai Technologies</span>
            </div>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60 text-sm">Last updated: March 2, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-light rounded-2xl p-8 sm:p-10 border border-indigo-100">
            <p className="text-slate-600 leading-relaxed mb-6">
              Please read these Terms and Conditions ("Terms") carefully before using the website
              operated by Nimai Technologies Private Limited ("us," "we," or "our"). Your access to
              and use of the Service is conditioned on your acceptance of and compliance with these
              Terms.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              By accessing or using our website and services, you agree to be bound by these Terms.
              If you disagree with any part of the terms, then you may not access the Service. These
              Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              2. Use of Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our services are intended for use by educational institutions, business schools, and
              agencies. By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 ml-4">
              <li>You have the authority to enter into these Terms on behalf of your institution</li>
              <li>Your use of the services will comply with all applicable laws and regulations</li>
              <li>
                You will not use the services for any unlawful or unauthorized purpose
              </li>
              <li>
                You will maintain the confidentiality of any credentials provided to you
              </li>
            </ul>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Service and its original content, features, and functionality are and will remain
              the exclusive property of Nimai Technologies Private Limited and its licensors. Our
              trademarks and trade dress may not be used in connection with any product or service
              without the prior written consent of Nimai Technologies Private Limited.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              4. Data and Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your use of our services is also governed by our Privacy Policy, which is incorporated
              into these Terms by reference. We are committed to protecting your institutional data
              and complying with applicable data protection regulations including GDPR and applicable
              Indian data protection laws.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              In no event shall Nimai Technologies Private Limited, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any indirect, incidental,
              special, consequential, or punitive damages, including without limitation, loss of
              profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of (or inability to access or use) the Service.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              6. Governing Law
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              These Terms shall be governed and construed in accordance with the laws of India,
              without regard to its conflict of law provisions. Any disputes arising under these
              Terms shall be subject to the exclusive jurisdiction of the courts of India.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. We will provide notice of any significant changes by updating the date at the top
              of this page. Your continued use of the Service after any changes constitutes your
              acceptance of the new Terms.
            </p>

            <h2 className="font-display text-xl font-bold text-brand-navy mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              <strong>Nimai Technologies Private Limited</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:legal@nimaitechnologies.com"
                className="text-brand-indigo hover:underline"
              >
                legal@nimaitechnologies.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
