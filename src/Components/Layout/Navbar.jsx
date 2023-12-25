import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Helpers/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("token");
    setIsLoggedIn(!!storedUserData);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsUserDropdownOpen(false);
    Navigate("/");
  };
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div
              className="text-white text-2xl cursor-pointer font-bold"
              onClick={() => {
                Navigate("/");
              }}
            >
              ProTracked
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </a>
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Shop
              </a>
              <a
                className="text-white cursor-pointer "
                onClick={() => {
                  Navigate("/");
                }}
              >
                About
              </a>
              <a
                className="text-white cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Contact
              </a>
              {isLoggedIn && (
                <>
                  <a
                    className="text-white cursor-pointer"
                    onClick={() => {
                      Navigate("/cart");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#fffff" }}
                    />
                    {cartItemCount > 0 && (
                      <span className="bg-red-500 text-white rounded-full absolute -top-0 right-16 px-1 py-0">
                        {cartItemCount}
                      </span>
                    )}
                  </a>

                  <a
                    className="text-white cursor-pointer"
                    onClick={() => {
                      Navigate("/wishlist");
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                  <div className="relative">
                    <button
                      id="dropdownHoverButton"
                      data-dropdown-toggle="dropdownHover"
                      onClick={toggleUserDropdown}
                      className="text-white cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      {isUserDropdownOpen && (
                        <div className="absolute top-11 z-10 right-0 bg-slate-200 divide-y divide-gray-100 rounded-lg shadow w-44">
                          <ul className="py-2 text-base text-black">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                  setIsUserDropdownOpen(false);
                                  Navigate("/orders");
                                }}
                              >
                                Orders
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={handleLogout}
                              >
                                LogOut
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </button>
                  </div>
                </>
              )}
              {!isLoggedIn && (
                <a
                  className="text-white cursor-pointer"
                  onClick={() => {
                    Navigate("/login");
                  }}
                >
                  Login
                </a>
              )}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Home
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Shop
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            About
          </a>
          <a
            className="block text-white p-2 cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            Contact
          </a>
          {isLoggedIn && (
            <>
              <a
                className="block text-white p-2 cursor-pointer"
                onClick={() => {
                  Navigate("/cart");
                }}
              >
                Cart
              </a>
              <a
                className="block text-white p-2 cursor-pointer"
                onClick={() => {
                  Navigate("/wishlist");
                }}
              >
                Wishlist
              </a>
              <a
                className="block text-white p-2 cursor-pointer"
                onClick={() => {
                  Navigate("/orders");
                }}
              >
                Orders
              </a>
              <a
                className="block text-white p-2 cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Logout
              </a>
            </>
          )}
          {!isLoggedIn && (
            <>
              <a
                className="text-white p-2 cursor-pointer"
                onClick={() => {
                  Navigate("/login");
                }}
              >
                Login
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
