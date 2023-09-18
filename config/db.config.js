const mongoose = require('mongoose')
require('dotenv').config()

// check if the application is running in test or prod environmrnt

const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

async function connectDatabase() {
	try {
		await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('connected to database')
	} catch (error) {
		console.error('error connecting to database', error)
	}
}

connectDatabase()