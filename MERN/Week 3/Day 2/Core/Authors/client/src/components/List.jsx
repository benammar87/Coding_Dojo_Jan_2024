import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const List = () => {
    const [authors , setAuthors] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(res=>setAuthors(res.data))
        .catch(err=>console.log(err))
    },[])
    const deleteObj=(id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            setAuthors(authors.filter(c=>c._id !== id))
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <Link className='btn btn-info' to={"/authors/new"}>
        Add an Author
        </Link> <br />
        we have quotes by :
        <table className='table'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Availiable</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author)=>(
                    <tr key={author._id}>
                        <td> <Link to={`/authors/${author._id}/edit`}> {author.name}</Link> </td> 
                        <td>
                            <button className='btn btn-primary' onClick={()=>nav(`/authors/${author._id}/edit`)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteObj(author._id)}>Delete</button>
                         </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default List