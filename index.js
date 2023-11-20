// index.js
const express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.send('Welcom to Express!')
})
app.listen(3008, () => {
    console.log('Start server port:3008')
})