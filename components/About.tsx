import React from 'react';

const About: React.FC = () => {
  const points = [
    { title: 'Innovation at Core', description: 'We are constantly exploring new AI technologies to deliver cutting-edge solutions.' },
    { title: 'Client-Centric Approach', description: 'Your success is our priority. We work closely with you to understand your needs and goals.' },
    { title: 'Expert Team', description: 'Our team consists of experienced AI specialists, developers, and digital strategists.' },
  ];
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're not just a service provider; we're your dedicated partner in innovation. We combine technical excellence with a deep understanding of business challenges to create solutions that deliver real, measurable impact.
            </p>
            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-500/20 text-blue-300 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-2xl"></div>
             <img src="https://picsum.photos/seed/about/600/400" alt="Team discussing" className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;