import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you contact us through our website, including your name, email address, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect our rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Cookies</h2>
            <p>Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at fysion3@gmail.com to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:fysion3@gmail.com" className="text-cyan-400 hover:text-cyan-300">fysion3@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
