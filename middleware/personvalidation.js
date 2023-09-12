const Joi = require('joi')

const personValidationSchema = Joi.object({
	name: Joi.string()
	.trim()
	.required()
	.min(3)
	.max(20)
})

module.exports = personValidationSchema