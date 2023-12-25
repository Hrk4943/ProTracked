import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import ProductPage from '../../Components/SingleProduct/ProductPage'
import products from '../../Components/DemoProducts/DemoProducts'
import Footer from '../../Components/Layout/Footer'

export default function ProductDetails() {
  return (
    <>
        <Navbar/>
        <ProductPage products={products}/>
        <Footer/>
    </>
  )
}
