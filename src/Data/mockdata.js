export const sidebarLinks = [
  {
    name: "Dashboard",icon: "/icons/dashboard.svg", path: "/"
  },
  {
    name: "Inventory", icon: "/icons/product.svg", path: "/inventory"
  },
  {
    name: "Billing", icon: "/icons/billing.svg", path: "/billing"
    },
    {
    name: "Orders", icon: "/icons/order.svg", path: "/orders"
  }
];


// src/data/mockData.js
export const MOCK_PRODUCTS = [
  {
    id: "p1",
    product_code:"234",
    name: "Classic T-Shirt",
    stock: 150,
    price: 25.00,
  },
  {
    id: "p2",
     product_code:"236",
    name: "colgate",
    stock: 80,
    price: 60.00,
  },
  {
    id: "p3",
     product_code:"235",
    name: "sunrise",
    stock: 45,
    price: 89.99,
  },
  {
    id: "p4",
    product_code:"238",
    name: "bru",
    stock: 45,
    price: 89.99,
  },
  {
    id: "p5",
    product_code:"237",
    name: " brush",
    stock: 45,
    price: 89.99,
  },
];


export const tabs = [
    { key: 'pending', label: 'Pending' },
    { key: 'complete', label: 'Complete' },
    { key: 'canceld', label: 'Canceld' }, // Spelled "Canceld" to match your image
  ];



export const MOCK_ORDERS = [
  { id: 1, orderId: 7874874, name: 'kjkjhjv', qty: 458, price: 45687, status: 'pending' },
  { id: 2, orderId: 7874875, name: 'Customer 2', qty: 1, price: 100, status: 'pending' },
  { id: 3, orderId: 7874876, name: 'Customer 3', qty: 2, price: 200, status: 'pending' },
  { id: 4, orderId: 7874877, name: 'Customer 4', qty: 3, price: 300, status: 'pending' },
  { id: 5, orderId: 7874878, name: 'Customer 5', qty: 1, price: 50, status: 'complete' },
  { id: 6, orderId: 7874879, name: 'Customer 6', qty: 5, price: 500, status: 'canceld' },
  { id: 7, orderId: 7874880, name: 'Customer 7', qty: 1, price: 75, status: 'canceld' },
];

