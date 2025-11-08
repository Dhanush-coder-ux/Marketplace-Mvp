import React from 'react';

const GradientButton = ({ children, onClick, className = '' }) => {
;

  return (
    <button
      onClick={onClick}
      
      className={`${'btn-gradient-blue'} ${className}`} 
    >
      {children}
    </button>
  );
};

export default GradientButton;