import axios from 'axios'
import React, { useEffect, useState } from 'react'
import productStyle from './products.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productSlice } from '../Redux/productSlice'
const ProductsComp = () => {
    const dispatch =useDispatch();
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    })
    return (
        <>
            <div className={productStyle.products}>
                {products.map((el) => (
                    <div className={productStyle.product} key={el.id}>
                        <img src={el.thumbnail} alt='' />
                        <h2>{el.title}</h2>
                        <h4>${el.price}</h4>
                        <p>{el.description}</p>
                        <div className={productStyle.buttons}>
                        <button onClick={()=>dispatch(productSlice.actions.addToCart(el))} >Add to Cart</button>
                        <Link to={`${el.id}`} >Show more</Link>
                        </div>
                    </div>
                )

                )}
            </div>
        </>
    )
}

export default ProductsComp
