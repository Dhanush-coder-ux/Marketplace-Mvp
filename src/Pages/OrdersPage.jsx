import React, { useMemo, useState } from 'react';
import Title from '@/Components/Title'; 
import OrderTabs from '@/Sections/OrdersHeader';
import { MOCK_ORDERS } from '@/Data/mockdata';
import OrderCard from '@/Components/OrderCard';
import StatusButton from '@/Sections/Status';



const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [isOnline, setIsOnline] = useState(true);

  const tabCounts = {
    pending: MOCK_ORDERS.filter(o => o.status === 'pending').length,
    complete: MOCK_ORDERS.filter(o => o.status === 'complete').length,
    canceld: MOCK_ORDERS.filter(o => o.status === 'canceld').length,
  };


  const filteredOrders = useMemo(()=>{
    const filtered = MOCK_ORDERS.filter(order => order.status === activeTab);
    return filtered
  },[activeTab,MOCK_ORDERS]) 

  return (
    <div className="p-4 md:p-8">
        <div className="flex justify-between items-center mb-4">
            <Title showBackIcon={true}>Orders</Title>
          
            <StatusButton isOnline={isOnline} setIsOnline={setIsOnline}/>
          </div>
            
        <OrderTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          counts={tabCounts}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} />
            ))}
        </div>
    </div>
  );
};

export default OrdersPage;