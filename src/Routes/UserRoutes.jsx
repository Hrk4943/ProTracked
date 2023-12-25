import React,{useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function UserRoutes() {
    const Navigate=useNavigate()
    const [userCheck, setUserCheck] = useState(false)
    useEffect(()=>{
      const token= localStorage.getItem('token')
      if(token){
        setUserCheck(true)
      }else{
        setUserCheck(false)
        Navigate('/login')
      }
    },[])

  return (
      userCheck && <Outlet/>
   
  )
}
