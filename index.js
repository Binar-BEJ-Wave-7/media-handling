const environment = process.env.NODE_ENV

require('dotenv').config({path: `.env.${environment}`})
const express = require('express')
const auth = require('./domains/auth/auth.router')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', auth)
app.use('/uploads', express.static('uploads')) // serve file ke server

app.use((err, req, res, next) => {
    return res.status(err.code || 500).json({message: 'error', error: err.message})
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})