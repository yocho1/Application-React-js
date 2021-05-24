import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleInputChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    axios
      .post('/user/contact', user)
      .then((res) => console.log('message sent'))
      .catch((err) => console.log(err))
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h1>Contact</h1>

      <label>Name</label>
      <input
        value={user.name}
        onChange={(event) => handleInputChange(event)}
        type='text'
        placeholder='name'
        name='name'
      />

      <label>LastName</label>
      <input
        type='text'
        value={user.lastName}
        onChange={(event) => handleInputChange(event)}
        placeholder='lastName'
        name='lastName'
      />

      <label>Email</label>
      <input
        type='email'
        value={user.email}
        onChange={(event) => handleInputChange(event)}
        placeholder='email'
        name='email'
      />

      <label>Phone</label>
      <input
        type='text'
        value={user.phone}
        onChange={(event) => handleInputChange(event)}
        placeholder='phone'
        name='phone'
      />

      <label>Message</label>
      <textarea
        type='text'
        value={user.message}
        onChange={(event) => handleInputChange(event)}
        placeholder='message'
        name='message'
      ></textarea>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Contact
