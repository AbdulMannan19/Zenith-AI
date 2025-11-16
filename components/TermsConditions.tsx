import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
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
          Terms and Conditions
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using FYSION's website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Services</h2>
            <p>FYSION provides AI automation and development services. The specific scope, deliverables, and timeline for each project will be outlined in a separate agreement or proposal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of FYSION and is protected by copyright and other intellectual property laws. Unless otherwise agreed in writing, all work products created for clients remain the property of the respective client upon full payment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Payment Terms</h2>
            <p>Payment terms will be specified in individual project agreements. Generally, we require:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>A deposit before work begins</li>
              <li>Milestone payments as outlined in the project agreement</li>
              <li>Final payment upon project completion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Limitation of Liability</h2>
            <p>FYSION shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Confidentiality</h2>
            <p>We respect the confidentiality of our clients' information and will not disclose any confidential information without prior consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Termination</h2>
            <p>Either party may terminate a project agreement with written notice. Terms of termination, including payment for work completed, will be outlined in individual project agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Contact Information</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:fysion3@gmail.com" className="text-cyan-400 hover:text-cyan-300">fysion3@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
