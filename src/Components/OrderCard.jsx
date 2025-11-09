import React from 'react';

const CardButton = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${className}`}
  >
    {text}
  </button>
);

const OrderCard = ({ order }) => {

  const renderButtons = () => {
    switch (order.status) {
      case 'pending':
        return (
          <>
            <CardButton
              text="Cancel"
              className="bg-red-100 text-red-700 hover:bg-red-200"
              onClick={() => console.log('Cancel:', order.id)}
            />
            <CardButton
              text="Complete"
              className="bg-blue-100 text-blue-700 hover:bg-blue-200"
              onClick={() => console.log('Complete:', order.id)}
            />
          </>
        );
      case 'complete':
        return (
          <CardButton
            text="View Details"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => console.log('View:', order.id)}
          />
        );
      case 'canceld':
        return (
          <CardButton
            text="Delete"
            className="bg-red-100 text-red-700 hover:bg-red-200"
            onClick={() => console.log('Delete:', order.id)}
          />
        );
      default:
        return null; 
    }
  };

  return (
    <div className="
      p-5 bg-white rounded-xl shadow-md
      transition-all duration-300 ease-out
      hover:shadow-lg hover:scale-[1.02]
    ">
     
      <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-2">
        
        <span className="font-semibold text-gray-500">Order Id</span>
    
        <span className="text-gray-800">: {order.orderId}</span>
        
        <span className="font-semibold text-gray-500">Name</span>
        <span className="text-gray-800">: {order.name}</span>
        
        <span className="font-semibold text-gray-500">Quantity</span>
        <span className="text-gray-800">: {order.qty}</span>
        
        <span className="font-semibold text-gray-500">Total Price</span>
        <span className="font-semibold text-gray-900">: ₹{order.price}</span>
      </div>

      <div className="flex justify-end gap-2 pt-4 mt-4 border-t border-gray-200">
        {renderButtons()}
      </div>
    </div>
  );
};

export default OrderCard;