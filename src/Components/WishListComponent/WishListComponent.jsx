import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../Helpers/WishListContext";

export default function WishListComponent() {
  const Navigate=useNavigate()
  const { wishlistItems, removeFromWishlist } = useWishlist();
  
  return (
    <>
      <div className="container mx-auto mt-12 mb-10 sm:mb-36 rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">WishList</h2>
        {wishlistItems.length === 0 ? (
          <p className="mt-10 mb-10 text-center">Your Wishlist is empty.</p>
        ) : (
          <ul>
            {wishlistItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between border-4 items-center sm:mx-60 px-2 sm:px-10 py-2 sm:py-10 mb-5"
                onClick={() => {
                  Navigate(`/productDetails/${item.id}`);
                }}
              >
                {console.log(item)}
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
                <span className="text-lg">Price: ₹ {item.price}</span>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-800 text-lg mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
