import React,{ useEffect, useState } from 'react'

export default function OrderComponent() {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const storedOrderDetails = localStorage.getItem('orderDetails');
        if (storedOrderDetails) {
          const orderDetailsArray = JSON.parse(storedOrderDetails);
          setOrderItems(orderDetailsArray);
        }
      }, []);

  return (
    <>
    <div className="container mx-auto mt-120 mb-10 sm:mb-36 rounded-lg p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Orders</h2>
      {orderItems.length === 0 ? (
        <p className="mt-10 mb-10 text-center">No orders have been placed.</p>
      ) : (
        <ul>
          {orderItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row justify-between border-4 items-center sm:mx-60 px-2 sm:px-10 py-2 sm:py-10 mb-5"
            >
              <div className="flex items-center mb-2 sm:mb-0">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-2 sm:mr-4"
                />
                <div>
                  <span className="text-lg">{item.name}</span>
                </div>
              </div>
              <span className="text-lg">Price: ₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </>
  )
}
