import Producttable from '@/Components/ProductTable'
import Title from '@/Components/Title'
import { MOCK_PRODUCTS } from '@/Data/mockdata'
import InventoryHeader from '@/Sections/InventoryHeader'
import React, { useEffect, useMemo, useState } from 'react'



const InventoryPage = ({isSidebarOpen}) => {
  
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    
      useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(search);
      }, 1000); 

        return () => clearTimeout(timer);
      }, [search]);

    const filterItems = useMemo( () =>{

      let filtered = MOCK_PRODUCTS.filter((item)=>
        String(item.product_code).toLowerCase().includes(search.toLowerCase())||
        String(item.name).toLowerCase().includes(search.toLowerCase())||
        String(item.price).toLowerCase().includes(search.toLowerCase())||
        String(item.stock).toLowerCase().includes(search.toLowerCase())
      )
      return filtered;
    },[debouncedSearch]);

    const lowestStockItem = useMemo(() => {
     
      if (filterItems.length === 0) {
        return { name: "N/A", stock: 0 };
      };

      const sorted = [...filterItems].sort((a, b) => a.stock - b.stock);

      return sorted[0];
    }, [filterItems]);

    const totalProducts = MOCK_PRODUCTS.length;
    const filteredCount = filterItems.length;
    const percentage = totalProducts > 0 ? (filteredCount / totalProducts) * 100 : 0;
    
  return (
    <div
  className={`transition-all duration-300 p-6 min-h-screen ${
    isSidebarOpen ? 'ml-[15%]' : 'ml-0]'
  }`}
>

      <Title>Inventory</Title>
      <InventoryHeader
       size={80} 
       label={'Total Products'} 
       count={filteredCount}
       percentage={percentage}
       searchValue={search}
       lowestStockLabel={lowestStockItem.name}
       lowestStockValue={lowestStockItem.stock}
       onSearchChange={(e)=> setSearch(e.target.value)}
       />
      <Producttable items={filterItems}/>
    </div>
  )
}

export default InventoryPage;
