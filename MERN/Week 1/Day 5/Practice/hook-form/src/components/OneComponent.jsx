import React, { useState } from 'react'

const OneComponent = () => {

    const [FirstName , SetFirstName] = useState()
    const [LastName , SetLastName] = useState()
    const [Email , SetEmail] = useState()
    const [Password , SetPassword] = useState()
    const [ConfirmPassword , SetConfirmPassword] = useState()
  return (
    <div>
        <form>
            First Name <input type="text" onChange={(e) => SetFirstName(e.target.value)}     /> <br />
            Last Name <input type="text" onChange={(e) => SetLastName(e.target.value)}     /> <br />
            Email  <input type="text" onChange={(e) => SetEmail(e.target.value)}     /> <br />
            Password  <input type="password" onChange={(e) => SetPassword(e.target.value)}     /> <br />
            Confirm Password  <input type="password" onChange={(e) => SetConfirmPassword(e.target.value)}     />
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