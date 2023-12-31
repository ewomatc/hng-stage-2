# API Documentation
This is my solution for Stage 2 of the HNG-X internship. The API allows you perform CRUD operations on a Person Resource.
## UML Diagram
This image shows the request and response flow of the API.
![er-hng](https://github.com/ewomatc/hng-stage-2/assets/107651392/a77ccfd2-2477-477a-8f58-5556e3b2228c)

## Getting Started
Refer to [this API's README](https://github.com/ewomatc/hng-stage-2/blob/main/README.md) for information on how to setup and use the API.
## API Endpoints
Using this API you can create, get, update, and delete a Person data. 
### 1. Create a new Person
The Person data contains only the person's name. The name fields are unique so two persons cannot have the same name.
   
   - URL endpoint: ```/api```
   - HTTP method: ```POST```
   - Request Body:
     
     ```JSON
     {
	      "name": "Ewoma"
     }
     ```
   - Response (on success):
     
     ```JSON
     {
	      "savedPerson": {
		    "name": "Ewoma",
		    "_id": "64fff35230e3040677d89717",
	      }
     }
     ```
   - Response (If the user with the provided name has been created already):
     
     ```JSON
     {
        "error": "ConflictError",
	      "message": "This person has already been created"
     }
     ```
### 2. Get Person data
Person data can be retrieved by passing the unique id as well as the person's name.
- URL endpoint: ```/api/:id```
- HTTP method: ```GET```
- Response (on success):
  
  ```JSON
  {
	  "person": {
		  "_id": "64ffefcd7234591bb3c955e9",
		  "name": "Ewoma"
	  }
  }
  ```
- Response (not found):
  
  ```JSON
  {
	  "error": "NotFoundError",
	  "message": "Cannot find this person"
  }
  ```
### 3. Update Person data
A person's data can be updated by passing in the person's id or name as a URL parameter.
- URL endpoint: ```/api/:id```
- HTTP method: ```PUT```
- Request body:
  
  ```JSON
  {
	  "name": "Shinobi"
  }
  ```
- Response (on success):
  
  ```JSON
  {
	  "updatedPerson": {
		  "_id": "64ffefcd7234591bb3c955e9",
		  "name": "Shinobi",
	  }
  }
  ```
- Response (if the id or name was not found)
  
  ```JSON
  {
	  "error": "NotFoundError",
	  "message": "Person with this Id does not exist"
  }
  ```
  > **Note:** You may encounter other errors like ```Validation Errors```, appropriate error handlers are in place to     
    provide clear information about any errors that may come up.

### 3. Delete a Person data
A Person's data can be deleted by passing in their ```id`` as a url parameter.

- URL endpoint: ```/api/:id```
- HTTP method: ```DELETE```
- Response (on success):
  
  ```JSON
  {}
  ```
  The ```DELETE``` operation will simply return an empty object and a status code of ```204``` ```No Content```.
- Response (not found)
  
  ```JSON
  {
	  "error": "NotFoundError",
	  "message": "This person is not registered"
  }
  ```

  > The endpoints can be tested in an API client like **Postman** or **Insomnia**.
