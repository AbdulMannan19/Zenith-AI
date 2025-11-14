import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact3D: React.FC = () => (
  <div className="absolute bottom-10 left-10 w-16 h-16 floating-shape opacity-15 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative robot-3d">
      <div className="absolute inset-0 bg-cyan-400/20 rounded-lg transform rotate-45 border border-cyan-400/30"></div>
      <div className="absolute inset-2 bg-blue-500/20 rounded-lg border border-blue-500/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full"></div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitStatus('idle'); // Clear status when user types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call - replace with actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900/50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Contact3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's Build Together</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Have a project in mind or just want to learn more? We'd love to hear from you.</p>
        </div>
        <div ref={formRef} className={`max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 scroll-scale-up ${formVisible ? 'visible' : ''}`}>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@email.com" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tell us about your project..." required></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-12 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;