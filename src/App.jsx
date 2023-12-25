import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register.jsx/Register";
import HomePage from "./Pages/Home/HomePage";
import ProductDetails from "./Pages/Product Page/ProductDetails";
import { CartProvider } from "./Helpers/CartContext";
import Cart from "./Pages/CartPage/Cart";
import { WishlistProvider } from "./Helpers/WishListContext";
import WishList from "./Pages/WishList/WishList";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Order from "./Pages/Order/Order";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route element={<UserRoutes/>}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<WishList/>} />
              <Route path="/checkout/:id" element={<CheckOut/>}/>
              <Route path="/orders" element={<Order/>} />
              </Route>     
            </Routes>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </>
  );
}

export default App;
