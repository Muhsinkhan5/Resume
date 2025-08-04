import React from 'react';

const AnimatedBackground = ({ scrollY }) => (
  <div className="animated-background">
    <div 
      className="bg-gradient"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }}
    />
    <div className="bg-pattern" />
  </div>
);

export default AnimatedBackground;