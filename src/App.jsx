import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
  });

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'Contact') {
      setContact(value);
    } else {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (firstName === '') {
      errors.firstName = 'First name is required';
    }
    if (lastName === '') {
      errors.lastName = 'Last name is required';
    }
    if (email === '') {
      errors.email = 'Email is required';
    }
    if (contact === '') {
      errors.contact = 'Contact is required';
    } else if (contact.length !== 10) {
      errors.contact = 'Characters must be of 10 digits';
    }

    if (Object.keys(errors).length === 0) {
      setSuccessMessage('Registration Successful!!');
      setErrorMessages({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setContact('');
    } else {
      setSuccessMessage('');
      setErrorMessages(errors);
    }
  };

  return (
    <div className='bod'>
      <form onSubmit={handleSubmit}>
        <p className='success'>{successMessage}</p>
        <div className='input'>
          <input
            className='value'
            type='text'
            placeholder='First Name'
            onChange={HandleOnChange}
            name='firstName'
            value={firstName}
          />
          <span>{errorMessages.firstName}</span>
        </div>
        <div className='input'>
          <input
            className='value'
            type='text'
            placeholder='Last name'
            name='lastName'
            onChange={HandleOnChange}
            value={lastName}
          />
          <span>{errorMessages.lastName}</span>
        </div>
        <div className='input'>
          <input
            className='value'
            type='email'
            placeholder='Email'
            name='Email'
            onChange={HandleOnChange}
            value={email}
          />
          <span>{errorMessages.email}</span>
        </div>
        <div className='input'>
          <input
            className='value'
            type='number'
            placeholder='Contact'
            name='Contact'
            onChange={HandleOnChange}
            value={contact}
          />
          <span>{errorMessages.contact}</span>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
