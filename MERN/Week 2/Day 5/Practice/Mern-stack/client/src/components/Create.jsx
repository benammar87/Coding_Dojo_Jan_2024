
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
  const nav = useNavigate()
    const [title , setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description , setDescription] = useState("")
    const [errors , setErrors] = useState([])
    const submitHandler=((e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products` , {title, price , description})
        .then(res=>{
            console.log(res);
            nav("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errArray = []
            for(const key of Object.keys(errorResponse)){
                errArray.push(errorResponse[key].message)
            }
            setErrors(errArray)
        })
    })
  return (
    <div>
      <form onSubmit={submitHandler}>
            {errors.map((err,i)=>(
                <p className='text-danger' key={i}>{err}</p>
            ))}
            <label className='label-control'>Title</label>
            <input type="text"  className='form-control' value={title}  onChange={(e)=>setTitle(e.target.value)} />
            <label className='label-control'>Price</label>
            <input type="number"  className='form-control' value={price}  onChange={(e)=>setPrice(e.target.value)}/>
            <label className='label-control'>Description</label>
            <input type="text"  className='form-control' value={description}  onChange={(e)=>setDescription(e.target.value)}/>
            <button className='btn btn-secondary' onClick={()=>nav("/")}>Create</button>
      </form>

    </div>
  )
}

export default Create