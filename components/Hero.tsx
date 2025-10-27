import React from 'react';
import BotIcon from './icons/BotIcon';
import CodeIcon from './icons/CodeIcon';
import WorkflowIcon from './icons/WorkflowIcon';
import MarketingIcon from './icons/MarketingIcon';
import TasksIcon from './icons/TasksIcon';
import BusinessIcon from './icons/BusinessIcon';

const CubeFace: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`cube-face ${className}`}>{children}</div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Supercharge
              </span> Your Business with AI & Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              We build intelligent solutions to streamline your workflows, boost efficiency, and drive unprecedented growth.
            </p>
            <a href="#services" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 inline-block">
              Explore Our Solutions
            </a>
          </div>
          <div className="perspective-container flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] overflow-hidden">
             <div className="w-[200px] h-[200px] relative cube">
                <CubeFace className="front"><BotIcon /></CubeFace>
                <CubeFace className="back"><CodeIcon /></CubeFace>
                <CubeFace className="right"><WorkflowIcon /></CubeFace>
                <CubeFace className="left"><MarketingIcon /></CubeFace>
                <CubeFace className="top"><TasksIcon /></CubeFace>
                <CubeFace className="bottom"><BusinessIcon /></CubeFace>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
       <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
       <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-gray-900"></div>

    </section>
  );
};

export default Hero;