import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';


const Layout = ({isSidebarOpen,toggleSidebar}) => {


  return (
    <div className="flex min-h-screen fixed top-0 left-0 bg-white overflow-hidden">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
{/* 
  
      <main 
        className={`flex-1 max-w-screen p-6 md:p-8 transition-all duration-300 ${
          isSidebarOpen ? 'ml-12' : 'ml-10'
        }`}
      >
        <Outlet />
      </main> */}
    </div>
  );
};

export default Layout;
