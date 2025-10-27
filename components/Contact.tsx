import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the data to a backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's Build Together</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Have a project in mind or just want to learn more? We'd love to hear from you.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
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
            <div className="text-center">
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-12 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;