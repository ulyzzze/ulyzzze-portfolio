import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;
