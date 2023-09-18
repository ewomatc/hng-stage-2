const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

// create supertest object
const api = supertest(app);

//write a test
test("All persons are returned as json", async () => {
	await api
		.get("/all")
		.expect(200)
		.expect("Content-Type", /application\/json/);
});

// close the app connection to avoid memory leak
afterAll(async () => {
	await mongoose.connection.close();
});