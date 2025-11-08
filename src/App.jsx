import { Route, Routes } from "react-router-dom"
import DashBoardPage from "./Pages/DashBoardPage"
import BillingPage from "./Pages/BillingPage"
import OrdersPage from "./Pages/OrdersPage"
import InventoryPage from "./Pages/InventoryPage"
import AddProductForm from "./Forms/AddProductForm"


const App = () => {
  return (
    <div>
      <Routes>
            <Route path="/dashboard" element={<DashBoardPage/>} />
            <Route path="/inventory" element={<InventoryPage/>} />
            <Route path="/billing" element={<BillingPage/>} />
            <Route path="/orders" element={<OrdersPage/>} />
            <Route path="/add-products" element={<AddProductForm/>} />
      </Routes>
    </div>
  )
}

export default App
