import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import productStyle from './../Products/products.module.css'
import { Link } from 'react-router-dom'
import { productSlice } from './productSlice'
import { FaRegTrashAlt } from "react-icons/fa";
const Cart = () => {
    const [products,setProducts]=useState();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.product.items);
    const cartTotal = useSelector((state) => state.product.total);
    useEffect(()=>{
        dispatch(productSlice.actions.calcTotal())
        setProducts(cartProducts)
    },[cartProducts,dispatch])
    return (
        <>
            <NavBar />
            <div className={productStyle.products}>
                {products?.map((el,idx) => (
                    <div className={productStyle.product} key={idx}>
                        <img src={el.thumbnail} alt='' />
                        <h2>{el.title}</h2>
                        <h4>${el.price}</h4>
                        <p>{el.description}</p>
                        <div className={productStyle.buttons}>
                        <button onClick={()=>dispatch(productSlice.actions.removeFromCart(el))} ><FaRegTrashAlt size={20}/></button>
                        <Link to={`/Products/${el.id}`} >Show more</Link>
                        </div>
                    </div>
                )

                )}
            </div>
                    <h1>Total:{cartTotal}</h1>
        </>
    )
}

export default Cart
