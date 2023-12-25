import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from '../../Helpers/CartContext';
import Swal from 'sweetalert2';


export default function CheckOutForm() {
    const Navigate = useNavigate();
    const { cartItems } = useCart();
    function calculateTotal(cartItems) {
  if (cartItems.length > 0) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

const handlePayment = () => {
  localStorage.setItem('orderDetails', JSON.stringify(cartItems))
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your Order is Confirmed',
    showConfirmButton: false,
    timer: 1500,
  });
    Navigate('/');
  };
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Pin Number
            </label>
            <input
              type="number"
              id="pin number"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-600">
              Card Holder Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-600">
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiration" className="block text-gray-600">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiration"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          {cartItems.length > 0 ? (
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                  <span>Price: ₹ {item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            null
          )}
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹ {calculateTotal(cartItems)}</span>
          </div>
        </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Place Order
        </button>
      </div>
    </div>
  </>

  )
}
