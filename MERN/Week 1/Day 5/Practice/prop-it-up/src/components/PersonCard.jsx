import React from 'react'

const PersonCard = (props) => {


  return (
    <div>
        <h1>Hello React</h1>
        <h1>{props.person1.lastName} ,{props.person1.firstName}</h1>
         age : {props.person1.age} <br />
         Hair Color : {props.person1.hairColor} <br />

         <h1>{props.person2.lastName} ,{props.person2.firstName}</h1>
         age : {props.person2.age} <br />
         Hair Color : {props.person2.hairColor} <br />

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