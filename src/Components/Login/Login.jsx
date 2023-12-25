import React, { useState,useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import shop2 from "../../assets/shop2.jpg";
import Navbar from "../Layout/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const userLogin = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      const token= storedUserData.email
      localStorage.setItem("token", token);
      Navigate("/");
    } else {
      toast.error("Invalid login credentials");
    }
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    if(token){
      Navigate('/')
    }
  }, [token]);


  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          background: `url(${shop2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Toaster />
        <div className="relative z-10 container mx-auto px-4 h-full">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="bg-slate-300 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 mt-32">
                  <div className="rounded-t mb-0 px-6 py-6"></div>
                  <form onSubmit={userLogin}>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-blueGray-400 text-center mb-3 font-bold">
                        <small> Login with Users Credentials</small>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <div className="flex flex-wrap mt-6 relative">
                        <div className="w-1/2">
                          <a href="" className="text-blueGray-200">
                            <small>Forgot password?</small>
                          </a>
                        </div>
                        <div className="w-1/2 text-right">
                          <small
                            className="cursor-pointer text-blueGray-200"
                            onClick={() => {
                              Navigate("/register");
                            }}
                          >
                            Create new account
                          </small>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
