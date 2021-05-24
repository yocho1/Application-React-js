const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use('/user', require('./routes/userRouter'))

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err
    console.log('Connected to mongodb')
  }
)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log('server is running', PORT)
})
