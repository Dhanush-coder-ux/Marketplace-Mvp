import React from 'react'

const StatusButton = ({isOnline,setIsOnline}) => {
  return (
    <>
      <div className="flex gap-2">
          <button 
            onClick={() => setIsOnline(false)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              !isOnline ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Offline
          </button>
          <button 
            onClick={() => setIsOnline(true)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              isOnline ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Online
          </button>
        </div>
      
    </>
  )
}

export default StatusButton
