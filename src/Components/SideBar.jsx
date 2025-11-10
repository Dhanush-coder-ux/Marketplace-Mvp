import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  RxDashboard, 
  RxFileText, 
  RxArchive, 
  RxPerson 
} from 'react-icons/rx';
import { IoReceiptOutline, IoChevronBack } from 'react-icons/io5';

const navLinks = [
  { name: 'Dashboard', icon: RxDashboard, path: '/' },
  { name: 'Inventory', icon: RxArchive, path: '/inventory' },
  { name: 'Billing', icon: IoReceiptOutline, path: '/billing' },
  { name: 'Orders', icon: RxFileText, path: '/orders' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.div
      animate={{ width: isOpen ? '240px' : '80px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-screen bg-blue-900  text-white overflow-hidden "
    >
      <div className="flex items-center justify-between p-5 h-20">
        <AnimatePresence>
          {isOpen && (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold"
            >
              Market Place
            </motion.h1>
          )}
        </AnimatePresence>
        
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-full hover:bg-blue-800 transition-colors"
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <IoChevronBack size={24} />
          </motion.div>
        </button>
      </div>

    
      <nav className="flex-1 px-4 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) => `
              flex items-center gap-4 p-3  rounded-lg transition-colors
              ${isActive
                ? 'bg-blue-700 text-white '
                : 'text-blue-200 hover:bg-blue-800'
              }
            `}
          >
            <link.icon size={24} className="flex-shrink-0" />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {link.name}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>

      {/* 4. User Profile (at the bottom) */}
      <div className="p-5 border-t border-blue-800">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
            {/* You can put an <img /> tag here */}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-semibold whitespace-nowrap"
              >
                Dhanush
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;