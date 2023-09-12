const express = require('express')
require('./config/db.config')
require('dotenv').config()
const createError = require('http-errors')
const errorHandler = require('./middleware/error-handler')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const personRoute = require('./routes/person.route')
const indexRoute = require('./routes/index.route')



const app = express()

// load middlewre
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors())


// routes
app.use('/api', personRoute)
app.use('/', indexRoute)


// error handlers
app.use( async (req, res, next) => {
	next(createError.NotFound('Resource not found'))
})

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
})