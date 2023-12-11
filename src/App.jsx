// import React, { useState } from 'react'

// function App() {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [contact, setContact] = useState('')
//   const [email, setEmail] = useState('')

//   const [data, setData] = useState([]);

//   const HandleOnChange = e => {
//     if (e.target.name === "firstName") {
//       setFirstName(e.target.value)
//     }
//     else if (e.target.name === "lastName") {
//       setLastName(e.target.value)
//     }
//     else if (e.target.name === "Contact") {
//       setContact(e.target.value)
//     }
//     else {
//       setEmail(e.target.value)
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (firstName === '') {
//       alert("First name is required")
//     } 
//     if (lastName === '') {
//       alert("Last name is required")
//     } 
//     if (email === '') {
//       alert("Email is required")
//     } 
//     if (contact === '') {
//       alert("Contact is required")
//     } 
//     if(firstName && lastName && email && contact){
//       setData([...data, firstName, lastName, email, contact])
//     }
//   }

//   return (
//     <div>
//       {data.map((item, index) => {
//           return <p key={index}>{item}</p>
//         })}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" placeholder='First Name' onChange={HandleOnChange} name="firstName" />
//         </div>
//         <div>
//           <input type="text" placeholder='Last name' name='lastName' onChange={HandleOnChange} />
//         </div>
//         <div>
//           <input type="email" placeholder='Email' name='Email' onChange={HandleOnChange} />
//         </div>
//         <div>
//           <input type="number" placeholder='Contact' name='Contact' onChange={HandleOnChange} />
//         </div>
//         <div>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App
import React, { useState , useEffect} from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [contactError, setContactError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [error , setError] = useState(false)
  const [formAttempted, setFormAttempted] = useState(false)

  const HandleOnChange = e => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value)
      setFirstNameError(false)
    }
   if (e.target.name === "lastName") {
      setLastName(e.target.value)
      setLastNameError(false)
    }
    if (e.target.name === "Contact") {
      setContact(e.target.value)
      setContactError(false)
    }
    else {
      setEmail(e.target.value)
      setEmailError(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormAttempted(true)
    if (firstName === '') {
      setFirstNameError(true)
    }
    if (lastName === '') {
      setLastNameError(true)
    }
    if (email === '') {
      setEmailError(true)
    }
    if (contact === '') {
      setContactError(true)
    }
  }

  useEffect(() => {
    if (firstNameError || lastNameError || contactError || emailError) {
      setError(true)
    } else {
      setError(false)
    }
  }, [firstNameError, lastNameError, contactError, emailError])

  return (
    <div>
      <form onSubmit={handleSubmit} className='bod'>
        {formAttempted && !error && <p className='success'>Registration Successful!!</p>}
        <div className='input'>
          <input type="text" placeholder='First Name' onChange={HandleOnChange} name="firstName" className='field' />
          {firstNameError && <span>Please enter your first name</span>}
        </div>
        <div className='input'>
          <input type="text" placeholder='Last name' name='lastName' onChange={HandleOnChange} className='field' />
          {lastNameError && <span>Please enter your last name</span>}
        </div>
        <div className='input'>
          <input type="email" placeholder='Email' name='Email' onChange={HandleOnChange} className='field' />
          {emailError && <span>Please enter your email name</span>}
        </div>
        <div className='input'>
          <input type="number" placeholder='Contact' name='Contact' onChange={HandleOnChange} className='field' />
          {contactError && <span>Please enter your Contact number</span>}
        </div>
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default App

