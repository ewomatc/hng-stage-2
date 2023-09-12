const express = require('express')
const router = express.Router()

const {
	api,
	create_person,
	get_person,
	update_person,
	delete_person,
} = require('../controllers/person.controller')

//run an health check
router.get('/', api)

// create a person
router.post('/', create_person)

// get a single person by their id or unique name
router.get('/:id', get_person)

// update a person by their unique Id
router.put('/:id', update_person)

//delete or remove a person by their unique Id
router.delete('/:id', delete_person)


module.exports = router