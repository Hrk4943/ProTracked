import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import MainPage from '../../Components/HomeView/MainPage'
import products from '../../Components/DemoProducts/DemoProducts'
import Footer from '../../Components/Layout/Footer'


export default function HomePage() {
  return (
    <>
        <Navbar/>
        <MainPage products={products}/>
        <Footer/>
    </>
  )
}
