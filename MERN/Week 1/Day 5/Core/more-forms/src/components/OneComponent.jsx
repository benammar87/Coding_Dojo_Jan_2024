import React, { useState } from 'react'

const OneComponent = () => {

    const [FirstName , SetFirstName] = useState("");
    const [FirstNameError , SetFirstNameError ] = useState("");
    const [LastName , SetLastName] = useState("");
    const [LastNameError , SetLastNameError] = useState("");
    const [Email , SetEmail] = useState("");
    const [EmailError , SetEmailError] =  useState("");
    const [Password , SetPassword] = useState("");
    const [PasswordError , SetPasswordError] = useState("");
    const [ConfirmPassword , SetConfirmPassword] = useState("");
    const [ConfirmError , SetConfirmError] = useState("");


    const handleFirstName = (e)=>{
      SetFirstName(e.target.value);
      if(e.target.value.length <=2 ){
        SetFirstNameError("first name must be at least a 2 characters")
      }else{SetFirstNameError("")}
    }
    const handleLastName = (e)=> {
      SetLastName(e.target.value);
      if(e.target.value.length <= 2){
        SetLastNameError("last name must be at least a 2 characters")
      }else{
        SetLastNameError("")
      }
    }
    const handleEmail = (e)=>{
      SetEmail(e.target.value);
      if(e.target.value.length <= 2){
        SetEmailError("email must be at least 2 characters")
      }else{SetEmailError("")}
    }
    const handlePassword = (e)=>{
      SetPassword(e.target.value);
      if(e.target.value.length <= 8){
        SetPasswordError("password must be at least 8 characters")
      }else{
        SetPasswordError("")
      }
    }
    const handleConfirm = (e)=>{
      SetConfirmPassword(e.target.value);
      if (e.target.value === PasswordError){
        SetConfirmError("password must match")
      }else{
        SetConfirmError("")
      }
    }


  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            First Name <input type="text" onChange={handleFirstName} /> <br />
            {FirstNameError ? <p> {FirstNameError}  </p> : <p></p> }

            
            Last Name <input type="text" onChange={handleLastName}     /> <br />
            {LastNameError ? <p>{LastNameError} </p> : <p></p>}
          
            Email  <input type="text" onChange={handleEmail}     /> <br />
            {EmailError ? <p> {EmailError} </p> : <p></p>}
           
            Password  <input type="password" onChange={handlePassword}     /> <br />
            
            {PasswordError ? <p> {PasswordError}  </p> :<p></p> }
            Confirm Password  <input type="password" onChange={handleConfirm} />
            {ConfirmError ? <p> {ConfirmError}  </p> : <p></p>}
            
        </form>

        <p> First Name  :  {FirstName}  </p>
        <p> Last Name  :  {LastName}  </p>
        <p> Email  :  {Email}  </p>
        <p> Password  :  password </p>
        <p> Confirm Password  :  password </p>

    </div>
  )
}

export default OneComponent