import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = () => {
    const [people , setPeople] = useState({})
   

    const {id} = useParams()
    const {option} = useParams()
    console.log(option)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${option}/${id}/`)
        .then((res)=>{
            console.log(res.data)
            setPeople(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    }, [id,option])

  return (
    <div>
        <h1> {people.name} </h1><br />
        <p></p><br />
        <h5>Height:{people.height} </h5><br />
        <h5>Mass:{people.mass}</h5><br />
        <h5>Hair Color:{people.hair_color}</h5><br />
        <h5>Skin Color:{people.skin_color}</h5><br />


    </div>
  )
}

export default People