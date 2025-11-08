import React from 'react';
import { useNavigate } from 'react-router-dom'; 

/**
 * A reusable page title component.
 * @param {object} props
 * @param {React.ReactNode} props.children - The text or elements to display as the title.
 * @param {function} [props.onClick] - An optional custom function to run when the back icon is clicked.
 * @param {boolean} [props.showBackIcon=true] - Whether to show the back icon.
 */
const Title = ({ children, onClick, showBackIcon = true }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (onClick) {

      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      <h1 className='flex gap-2 py-6 mb-3 text-3xl items-center text-blue-500'>
        
        {showBackIcon && (
          <img
            src="/icons/back.svg"
            className="w-6 h-6 cursor-pointer" 
            alt="Go back"
            onClick={handleBackClick} 
          />
        )}
        {children}
      </h1>
    </div>
  );
};

export default Title;