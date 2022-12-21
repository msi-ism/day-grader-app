const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
require('./config/database')



const app = express()
const PORT = process.env.PORT || 3001


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// ^ Configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))


// ! API Routes go here BEFORE the 'catch all' routes

app.use('/api/users', require('./routes/api/users'))


// ^ The following 'catch all' route is necessary to return the index.html on all non-AJAX requests

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
})