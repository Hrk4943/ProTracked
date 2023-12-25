import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import CheckOutForm from '../../Components/ChechOutComponent/CheckOutForm'
import Footer from '../../Components/Layout/Footer'
import products from '../../Components/DemoProducts/DemoProducts'

export default function CheckOut() {
  return (
    <>
        <Navbar/>
        <CheckOutForm products={products}/>
        <Footer/>
    </>
  )
}
