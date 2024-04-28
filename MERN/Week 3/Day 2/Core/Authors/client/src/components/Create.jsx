import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const nav = useNavigate()
    const [name , setName] = useState("")
    const [errors , setErrors] = useState([])
    const submitHandler=((e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors/new` , {name})
        .then(res=>{
            console.log(res);
            nav("/authors")
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
        <Link className='btn btn-info' to={"/authors"}>
        Home
        </Link> <br />
<h3>Add a new Author :</h3>
        <form onSubmit={submitHandler}>
            {errors.map((err,i)=>(
                <p className='text-danger' key={i}>{err}</p>
            ))}
            <label className='label-control'>Name</label> <br />
            <input type="text"  className='form-control' value={name}  onChange={(e)=>setName(e.target.value)}/>
            <div className='d-flex justify-content-between'>               
            <button className='btn btn-success'onClick={()=>nav("/authors")}>Cancel</button>
            <button className='btn btn-secondary' >Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Create