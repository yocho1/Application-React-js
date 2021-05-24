import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SendMail = () => {
  const { email } = useParams()

  const [user, setUser] = useState({
    subject: '',
    text: '',
  })

  function handleInputChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    axios
      .post(`/user/mail/${email}`, user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <h1>Contact</h1>

      <label>subject</label>
      <input
        value={user.subject}
        onChange={(event) => handleInputChange(event)}
        type='text'
        placeholder='subject'
        name='subject'
      />

      <label>Text</label>
      <input
        type='text'
        value={user.text}
        onChange={(event) => handleInputChange(event)}
        placeholder='text'
        name='text'
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default SendMail
