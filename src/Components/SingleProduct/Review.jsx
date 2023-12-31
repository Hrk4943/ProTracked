import React from "react";
import "./Review.css";

export default function Review({ reviews }) {
  return (
    <>
      <div className="mt-10">
        <p className="font-sans text-center text-2xl font-bold mb-6">Reviews</p>
        <div className="flex flex-col bg-white mx-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 review-cards ">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="mr-20 mx-auto w-56 text-center my-4 bg-white rounded-lg shadow-lg"
                  >
                    <div className="px-6 py-4">
                      <div className="font-medium text-xl mb-2">
                        {review.name}
                      </div>
                      <p className="text-gray-700 italic text-base">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
