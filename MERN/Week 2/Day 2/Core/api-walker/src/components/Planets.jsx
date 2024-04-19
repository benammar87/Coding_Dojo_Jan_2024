import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planets = () => {
    const [planet , setPlanet] = useState({})
   

    const {id} = useParams()
    const {option} = useParams()
    console.log(option)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${option}/${id}/`)
        .then((res)=>{
            console.log(res.data)
            setPlanet(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    }, [id,option])

  return (
    <div>
        <h1> {planet.name} </h1><br />
        <p></p><br />
        <h5>Climate:{planet.climate}</h5><br />
        <h5>Terrain:{planet.terrain}</h5><br />
        <h5>Surface Water:{planet.surface_water}</h5><br />
        <h5>Population:{planet.population}</h5><br />


    </div>
  )
}
export default Planets