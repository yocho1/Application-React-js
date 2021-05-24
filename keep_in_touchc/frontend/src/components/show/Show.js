import React, { useState, useEffect } from 'react'
import '../../App.css'
import './show.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Show() {
  const initialData = {
    email: '',
    name: '',
  }
  const [users, setUsers] = useState([])
  const [q, setQ] = useState(initialData)

  const getInfos = async () => {
    const res = await axios.get('/user/getInfos')
    if (res) setUsers(res.data)
  }

  useEffect(() => {
    getInfos()
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/user/search', q)
      if (data) setUsers(data)
    } catch (error) {
      if (error) console.log(error.response)
    }
  }

  const handelChange = (e) => {
    const { name, value } = e.target
    setQ({ ...q, [name]: value })
  }
  console.log(q.email)

  return (
    <table id='table'>
      <input
        onChange={handelChange}
        name='email'
        type='email'
        className='form-control'
        id='validationCustom01'
        placeholder='Email'
        required
      />
      <input
        onChange={handelChange}
        name='name'
        type='name'
        className='form-control'
        id='validationCustom01'
        placeholder='Name'
        required
      />
      <button
        onClick={handleClick}
        type='submit'
        className='btn btn-primary mb-3'
      >
        Search
      </button>
      <tr>
        <th>Name</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
        <th>Contact</th>
      </tr>
      {users.length > 0 &&
        users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.message}</td>
            <td>
              <Link to={`/sendmail/${user.email}`} className='send'>
                send
              </Link>
            </td>
          </tr>
        ))}
    </table>
  )
}

export default Show
