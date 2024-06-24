import React, { useEffect, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartFlatbed } from "react-icons/fa6";

const NavBar = () => {
  const [items,setItems]=useState([]);
  const cartItems=useSelector((state)=>state.product.items)
  useEffect(()=>{
     setItems(cartItems)
  },[cartItems])
  return (
    <nav>
    <span>LOGO</span>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Products'>Product</NavLink></li>
        <li><NavLink to='/cart'><FaCartFlatbed size={20}/>{items.length}</NavLink></li>
    </ul>
    </nav>
  )
}

export default NavBar
