import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Helpers/CartContext";
import { useWishlist } from "../../Helpers/WishListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCards({ products }) {
  const rating = products.rating;
  const reviews = products.reviews;
  const { addToCart } = useCart();
  const Navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  const handleAddToCart = () => {
    if (localStorage.getItem("token")) {
      addToCart(products);
      toast.success("Added to Cart");
    } else {
      Navigate("/login");
    }
  };

  const isWishlist = wishlistItems.some((item) => item.id === products.id);

  const handleWishlist = () => {
    if (localStorage.getItem("token")) {
      if (isWishlist) {
        removeFromWishlist(products.id);
        toast.error("Removed from WishList");
      } else {
        addToWishlist(products);
        toast.success("Added to Wishlist");
      }
    } else {
      Navigate("/login");
    }
  };

  return (
    <>
      <Toaster />
      <div className="p-4 flex justify-center">
        <div className="mb-7 rounded-lg cursor-pointer overflow-hidden">
          <img
            src={products.image[0]}
            className="w-72 h-60 rounded-lg "
            alt={products.name}
            onClick={() => Navigate(`/productDetails/${products.id}`)}
          />

          <div className="p-4">
            <p className="text-lg flex justify-center font-semibold mb-2">
              {products.name}
            </p>
            <p className="text-xl flex justify-center font-semibold">
              ₹ {products.price}
            </p>
            <div className="flex items-center mt-6 justify-center space-x-4">
              <span className="flex items-center space-x-2 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 590"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-sm font-bold">
                  {Math.round(rating * 100) / 100}
                </span>
              </span>
              <span>{reviews.length} Reviews</span>
            </div>
          </div>

          <div className="p-4 flex justify-center text-center">
            <button
              className="text-black border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={() => handleAddToCart(products)}
            >
              Add To Cart
            </button>
            <FontAwesomeIcon
              icon={faHeart}
              className={`ml-12 cursor-pointer px-4 py-2 h-5 ${
                isWishlist ? "text-red-500" : "text-gray-500"
              }`}
              onClick={handleWishlist}
            />
          </div>
        </div>
      </div>
    </>
  );
}
