import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const ShowAll = () => {
    const [products, setProducts] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    const deleteObj=(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            setProducts(products.filter(c=>c._id !== id))
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => (
                <h3 key={product._id}>
                    <Link to={`/products/${product._id}`}> {product.title}</Link> 
                    <button onClick={()=>nav(`/products/${product._id}/edit` )}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleteObj(product._id)}>Delete</button>
                    </h3>
                    
            ))}


        </div>
    )
}

export default ShowAll