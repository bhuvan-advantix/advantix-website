import React from 'react';

const Address: React.FC = () => {
  return (
    <div className="space-y-1 text-sm text-white/70">
      <p className="flex items-start">
        <span className="inline-block mr-2">📍</span>
        <span>Chennai, India</span>
      </p>
      <p className="flex items-start">
        <span className="inline-block mr-2">📍</span>
        <span>Trichy, India</span>
      </p>
      <p className="flex items-start">
        <span className="inline-block mr-2">📍</span>
        <span>Detroit, USA</span>
      </p>
    </div>
  );
};

export default Address;
