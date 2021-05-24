const Users = require('../models/userModel')

const userCtrl = {
  contact: async (req, res) => {
    try {
      console.log(req.body)
      const { name, lastName, email, phone, message } = req.body
      if (!name || !lastName || !phone || !email || !message)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      if (!validateEmail(email))
        return res.status(400).json({ msg: 'Invalid emails.' })

      const newUser = new Users({
        name,
        lastName,
        phone,
        email,
        message,
      })

      await newUser.save()

      res.json({
        msg: 'Message sent.',
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getUsersAllInfos: async (req, res) => {
    try {
      const users = await Users.find()
      res.json(users)
    } catch (err) {
      return res.status(400).json({ msg: err.message })
    }
  },
  findContact: async (req, res) => {
    const { name } = req.body
    const { email } = req.body
    console.log(email)

    try {
      if (name && email) {
        const result = await Users.find({ email, name })
        if (result) return res.status(200).json(result)
      } else if (name && !email) {
        const result = await Users.find({ name })
        if (result) return res.status(200).json(result)
      } else if (!name && email) {
        const result = await Users.find({ email })
        if (result) return res.status(200).json(result)
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  },
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

module.exports = userCtrl
