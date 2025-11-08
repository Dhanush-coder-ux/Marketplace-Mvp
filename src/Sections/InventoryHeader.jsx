import CircularProgress from '@/Components/CircularProgress'
import DetailView from '@/Components/DetailView'
import GradientButton from '@/Components/GradientButton'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InventoryHeader = ({
    onSearchChange, 
    count,
    percentage,
    searchValue, 
    size, 
    label ,
    lowestStockLabel,
    lowestStockValue,
    }) => {
      
    const [isViewOpen, setViewOpen] = useState(false);

  
    const handleConfirmDelete = () => {
        console.log("Deleting all items...");
       
        setViewOpen(false); 
    };

        
    return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      
      <div className='flex flex-col md:flex-row gap-4'>
    
        <div className='progress-indicator'>
          <CircularProgress 
          size={size}
          progressColor='stroke-green-300' 
          textColor='text-white'
          value={percentage} />
          <div className='space-y-1.5 ml-4'>
            <h1 className='text-xl font-semibold'>{label}</h1>
            <p className='text-lg '>{count} (in products)</p>
          </div>
        </div>

     
        <div className="progress-indicator">
          <CircularProgress 
            size={size} 
            value={lowestStockValue} 
            progressColor="stroke-red-500"
            textColor='text-white'
          />
          <div className='space-y-1.5 ml-4'>
            <h1 className='text-xl font-semibold'>{lowestStockLabel}</h1> 
            <p className='text-lg '>{lowestStockValue} (in stock)</p> 
          </div>
        </div>
      </div>

  
      <div className="relative w-full lg:w-72">
        <input
          type="text"
          placeholder="Search items..."
          className="w-full pl-10 pr-4 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchValue}       
          onChange={onSearchChange}   
        />
        <img
          src="/icons/search.svg"
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        />
      </div>

 
      <div className='flex flex-col sm:flex-row gap-4'>
     
        <Link to={'/add-products'}>
          <GradientButton>
            + Add
          </GradientButton>
        </Link>

        <GradientButton
          onClick={() => setViewOpen(true)}
        >
          Delete
        </GradientButton>
      </div>

      
      <DetailView
        open={isViewOpen}
        onOpenChange={setViewOpen}
        title='Are you sure you want to delete?'
        actionText='Confirm Delete'
        actionClassName='bg-red-600 hover:bg-red-700'
        cancelText='Cancel'
        onActionClick={handleConfirmDelete}
      >
        <p className="text-gray-700">
          This action is permanent and cannot be undone. All product data will be lost.
        </p>
      </DetailView>

    </div>
  )
}

export default InventoryHeader