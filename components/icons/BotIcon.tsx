
import type React from 'react';

const BotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 16.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v.5a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-.5z" />
  </svg>
);
export default BotIcon;
