import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const One = () => {
    const {id} =useParams()
    const [products, setProducts] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err));
    },[id])
  return (
    <div className='container'>
        <h3>Name: {products.title}</h3>
        <p>Price : {products.price}</p>
        <p>Description : {products.description}</p>
    </div>
  )
}

export default One