import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import Review from "./Review";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Helpers/CartContext";
import { useWishlist } from "../../Helpers/WishListContext";

export default function ProductPage({ products }) {
  const { id } = useParams();
  const Navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const review = selectedProduct.reviews;
  const isWishlist = wishlistItems.some((item) => item.id === selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    toast.success("Added to Cart");
  };

  const handleWishlist = () => {
    if (isWishlist) {
      removeFromWishlist(selectedProduct.id);
      toast.error("Removed from WishList");
    } else {
      addToWishlist(selectedProduct);
      toast.success("Added to Wishlist");
    }
  };
  return (
    <>
      <Toaster />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-24">
        <div className="mb-10 md:mb-0 flex justify-center">
          <ImageSlider
            images={selectedProduct.image}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl flex justify-center items-center sm:text-4xl font-medium text-gray-900 mb-4">
            <span className="font-bold">{selectedProduct.name}</span>
          </h1>
          <span className="flex justify-center items-center text-gray-600 p-1">
            {selectedProduct.description}
          </span>
          <h3 className="text-2xl font-semibold flex justify-center items-center p-2">
            ₹ {selectedProduct?.price}
          </h3>
          <div className="flex justify-center items-center mb-4">
            <span className="text-yellow-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M499.267,198.052c-2.944-9.024-11.008-15.04-20.544-15.04H327.523L277.931,54.308C273.707,43.876,264.611,37,255.491,37    s-18.213,6.876-22.443,17.308L184.479,183.012H32.277c-9.536,0-17.6,6.016-20.544,15.04c-2.944,9.024-0.64,18.816,6.912,25.472    l122.88,122.88L87.043,457.348c-2.368,7.424-1.536,15.36,2.368,22.016c3.904,6.656,10.56,10.624,17.856,10.624    c2.688,0,5.376-0.48,7.936-1.472l143.808-60.48l143.808,60.48c4.352,1.824,8.96,2.752,13.504,2.752c7.68,0,15.36-2.944,21.184-8.832    c3.904-6.656,4.736-14.592,2.368-22.016l-38.912-122.88l122.88-122.88C499.907,216.868,502.211,207.076,499.267,198.052z" />
              </svg>
            </span>
            <span className="text-gray-600 font-bold">
              {Math.round((selectedProduct?.rating * 100) / 100)}
            </span>
            <span className="text-gray-600 mx-2"> </span>
            <span className="text-gray-600"></span>
          </div>
          <div className="flex justify-center items-center text-center mb-4">
            <button
              className="text-black border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
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
      <Review reviews={review} />
    </>
  );
}
