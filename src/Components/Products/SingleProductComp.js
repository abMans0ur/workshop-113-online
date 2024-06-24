import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productStyle from './products.module.css'
const SingleProductComp = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className={productStyle.products}>
            <div className={productStyle.product}>
            <img src={product.thumbnail} alt='product'/>
                <h2>{product.title}</h2>
                <h3>{product.category}</h3>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default SingleProductComp
