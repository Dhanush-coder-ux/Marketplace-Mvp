import { Route, Routes } from "react-router-dom"
import DashBoardPage from "./Pages/DashBoardPage"
import BillingPage from "./Pages/BillingPage"
import OrdersPage from "./Pages/OrdersPage"
import InventoryPage from "./Pages/InventoryPage"
import AddProductForm from "./Forms/AddProductForm"
import Layout from "./Sections/LayOut"
import { useState } from "react"



const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen">
      <div className="w-full flex" >
         <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className="w-[95%] ml-18 max-sm:w-full my-8 ">
      <Routes>
            <Route path="/" element={<DashBoardPage/>} />
            <Route path="/inventory" element={<InventoryPage isSidebarOpen={isSidebarOpen}/>} />
            <Route path="/billing" element={<BillingPage/>} />
            <Route path="/orders" element={<OrdersPage isSidebarOpen={isSidebarOpen}/>} />
            <Route path="/add-products" element={<AddProductForm isSidebarOpen={isSidebarOpen}/>} />      
      </Routes>
       </div>
       </div>
    </div>
  )
}

export default App
