import React from 'react';

/**
 * A component to display the navigation tabs for the Orders page.
 * @param {object} props
 * @param {string} props.activeTab - The key of the currently active tab (e.g., 'pending').
 * @param {function} props.setActiveTab - The state setter function from the parent.
 * @param {object} props.counts - An object with the counts for each tab.
 */
const OrderTabs = ({ activeTab, setActiveTab, counts }) => {

  const tabs = [
    { key: 'pending', label: 'Pending' },
    { key: 'complete', label: 'Complete' },
    { key: 'canceld', label: 'Canceld' },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex justify-evenly">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-2
                py-4 px-1 text-lg font-semibold transition-colors
                ${isActive
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-gray-700'    
                }
              `}
            >
            
              <span>{tab.label}</span>
              
              <span className={`
                flex items-center justify-center
                w-6 h-6 rounded-full
                text-xs font-bold
                transition-colors
                ${isActive
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700' 
                }
              `}>
                {counts[tab.key] || 0}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default OrderTabs;