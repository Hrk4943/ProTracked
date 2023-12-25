import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpg'
import img3 from '../../assets/b3.jpg'
import img4 from '../../assets/b4.jpg'

export default function Banner() {
    const images = [
        {
          title: "Apple MacBook",
          image: img1,
        },
        {
          title: "Apple MacBook",
          image: img2,
        },
        {
          title: "Samsung S23 Ultra",
          image: img3,
        },
        {
          title: "Samsung S23 Ultra",
          image: img4,
        },
      ];
  return (
    <>
    <div className=" text-white ">
        <div className="container mx-auto mt-10 px-4">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
          >
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full  h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-center">
                    {img.title}
                  </h3>
                </div> 
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}
