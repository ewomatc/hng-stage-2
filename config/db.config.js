const mongoose = require('mongoose')
require('dotenv').config()

async function connectDatabase() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('connected to database')
	} catch (error) {
		console.error('error connecting to database', error)
	}
}

connectDatabase()