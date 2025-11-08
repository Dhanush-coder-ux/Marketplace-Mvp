import React, { useMemo, useState, useEffect } from 'react' 
import DetailView from './DetailView';


const ITEMS_PER_PAGE = 1;

const Producttable = ({ items }) => {

  const [currentPage, setCurrentPage] = useState(1);
  
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setViewOpen] = useState(false);


  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);


  const currentItems = useMemo(() => {
    const lastItemIndex = currentPage * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    return items.slice(firstItemIndex, lastItemIndex);
  }, [items, currentPage]); 

  const handleRowClick = (item) => {
    setViewData(item);
    setViewOpen(true);
  };

  const handleEditClick = () => {
    if (!viewData) return;
    console.log("Editing item:", viewData.product_code);
    setViewOpen(false);
  };

  return (
    <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
      <table className='min-w-full text-left border border-gray-200'>
        <thead className="bg-blue-200 text-black">
          <tr>
            <th className="table-head">Product Code</th>
            <th className="table-head">Name</th>
            <th className="table-head">Price</th>
            <th className="table-head">Stock</th>
          </tr>
        </thead>
        <tbody>
          
          {
            currentItems.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                className='hover:bg-gray-100 transition duration-150 cursor-pointer' >
                <td className="table-data">{item.product_code}</td>
                <td className="table-data">{item.name}</td>
                <td className="table-data">{item.price}</td>
                <td className="table-data">{item.stock}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    
      <div className="flex justify-end items-center gap-2 p-4">
     
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
       
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`
              px-3 py-1 rounded w-8 h-8 flex items-center justify-center
              ${currentPage === page 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-black'}
            `}
          >
            {page}
          </button>
        ))}


        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* View Details */}
      <DetailView
        open={isViewOpen}
        onOpenChange={setViewOpen}
        title="Inventory Details"
        actionText="Edit"
        onActionClick={handleEditClick}
        cancelText="Close"
        actionClassName={"btn-gradient-blue"}
      >
        {viewData && (
          <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-gray-800">
            <span className="view-detail-label">Product Code:</span>
            <span>{viewData.product_code}</span>

            <span className="view-detail-label">Name:</span>
            <span>{viewData.name}</span>

            <span className="view-detail-label">Price:</span>
            <span>${viewData.price}</span>

            <span className="view-detail-label">Stocks:</span>
            <span>{viewData.stock}</span>
          </div>
        )}
      </DetailView>
    </div>
  )
}

export default Producttable