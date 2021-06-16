const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ItemCarrot'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const itemRouter = require('./routes/items')
app.use('/items',itemRouter)

app.listen(9000, () => {
    console.log('Server started')
})