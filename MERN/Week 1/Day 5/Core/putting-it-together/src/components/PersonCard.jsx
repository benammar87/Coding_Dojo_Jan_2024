import React, { useState } from 'react'

const PersonCard = (props) => {

  const [age1 , setAge1] = useState(props.person1.age)
  const [age2 , setAge2] = useState(props.person2.age)


  const incrementAge1 = () => {
    setAge1(age1 + 1)
  }
  const incrementAge2 = () => {
    setAge2(age2 + 1)
  }



  return (
    <div>
        <h1>Hello React</h1>
        <h1>{props.person1.lastName} ,{props.person1.firstName}</h1>
         age : {age1} <br />
         Hair Color : {props.person1.hairColor} <br />
         <button onClick={ ()=> incrementAge1() }>Birthday Button for Jane Doe</button>

         <h1>{props.person2.lastName} ,{props.person2.firstName}</h1>
         age : {age2} <br />
         Hair Color : {props.person2.hairColor} <br />
         <button onClick={ ()=> incrementAge2() }>Birthday Button for Smith John</button>

         <h1>{props.person3.lastName} ,{props.person3.firstName}</h1>
         age : {props.person3.age} <br />
         Hair Color : {props.person3.hairColor} <br />

         <h1>{props.person4.lastName} ,{props.person4.firstName}</h1>
         age : {props.person4.age} <br />
         Hair Color : {props.person4.hairColor} <br />



    </div>
  )
}

export default PersonCard 