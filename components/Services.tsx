import React from 'react';
import type { Service } from '../types';
import WorkflowIcon from './icons/WorkflowIcon';
import TasksIcon from './icons/TasksIcon';
import BusinessIcon from './icons/BusinessIcon';
import BotIcon from './icons/BotIcon';
import CodeIcon from './icons/CodeIcon';
import MarketingIcon from './icons/MarketingIcon';

const services: Service[] = [
  { icon: WorkflowIcon, title: 'Simplified AI Workflows', description: 'We design and implement intuitive AI-powered workflows to enhance productivity and reduce complexity.' },
  { icon: TasksIcon, title: 'Automating Repetitive Tasks', description: 'Free up your team\'s valuable time by automating mundane and repetitive tasks with intelligent bots.' },
  { icon: BusinessIcon, title: 'AI for Business Owners', description: 'Leverage AI to gain strategic insights, optimize operations, and make data-driven decisions for growth.' },
  { icon: BotIcon, title: 'Automating Customer Service', description: 'Enhance customer satisfaction with 24/7 AI-powered support, instant responses, and personalized interactions.' },
  { icon: MarketingIcon, title: 'Lead Generation Automation', description: 'Automatically identify, qualify, and nurture leads using AI, filling your sales pipeline effortlessly.' },
  { icon: BotIcon, title: 'AI Chatbots', description: 'Deploy intelligent chatbots on your website and social media to engage visitors and convert them into customers.' },
  { icon: BotIcon, title: 'AI Voice Call Agents', description: 'Implement sophisticated voice agents for customer service, appointment setting, and outbound calls.' },
  { icon: CodeIcon, title: 'Web Development', description: 'Creating modern, responsive, and high-performance websites tailored to your business needs.' },
  { icon: CodeIcon, title: 'App Development', description: 'Building custom mobile applications for iOS and Android to connect with your customers on the go.' },
  { icon: BusinessIcon, title: 'Google Business Profiles', description: 'Optimize your GBP listing to improve local SEO, attract more customers, and manage your online reputation.' },
  { icon: MarketingIcon, title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies including SEO, SEM, and content marketing to boost your online presence.' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300">
    <div className="mb-4">
      <service.icon />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">We offer a comprehensive suite of AI and development services to transform your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;