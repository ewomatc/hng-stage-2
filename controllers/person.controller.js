const Person = require('../models/person')
const createError = require('http-errors')
const personValidationSchema = require('../middleware/personvalidation')
const person = require('../models/person')
const {ObjectId} = require('mongoose').Types


// healthcheck
exports.api = (req, res) => {
	res.json({
		message: 'Welcome to my API'
	})
}

// create a new Person
exports.create_person = async(req, res, next) => {
	try {
		const { name } = req.body;

		const result = await personValidationSchema.validateAsync(req.body)

		const personExists = await Person.findOne({ name: result.name })
		if(personExists) {
			throw createError.Conflict(`This person has already been created`)
		}

		const person = new Person({
			name: result.name
		})

		const savedPerson = await person.save()
		res.status(201).json({savedPerson})

	} catch (error) {
		next(error)
	}
}



// get a person by id
exports.get_person = async(req, res, next) => {
	try {
		const id = req.params.id

		let person

		if(ObjectId.isValid(id)) {
			person = await Person.findById(id).select('id name')
		} else {
			person = await Person.findOne({ name: id}).select('id name')
		}

		if(!person) {
			throw createError.NotFound(`Cannot find this person`)
		}

		res.status(200).json({person})

	} catch (error) {
		next(error)
	}	
}


// Update a Person by their ID
exports.update_person = async (req, res, next) => {
  try {		
		const id = req.params.id

    const result = await personValidationSchema.validateAsync(req.body);

		let updatedPerson
		if(ObjectId.isValid(id)) {
    	updatedPerson = await Person.findByIdAndUpdate(req.params.id, 
      {
        name: result.name
      })
		} else {
			updatedPerson = await Person.findOneAndUpdate({ name: id }, { name: result.name })
		}

    if (!updatedPerson) {
      throw createError.NotFound(`Person with this Id does not exist`);
    }

    res.json({ updatedPerson });

  } catch (error) {
    next(error);
  }
};


// delete a person
exports.delete_person = async(req, res, next) => {
	try {
			const id = req.params.id

			let person
			if(ObjectId.isValid(id)) {
				 person = await Person.findByIdAndRemove(id);
			} else {
				 person = await Person.findOneAndRemove({ name: id })
			}

			if(!person) {
				throw createError.NotFound('This person is not registered')
			}
			res.status(204).json({})
		} catch (error) {
		next(error)
	}
}