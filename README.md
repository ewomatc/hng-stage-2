# HNG-X stage 2
This is the README for the stage two task of HNG-X internship.
This project is an API that allows you performs CRUD operations on a Person resource. You can create a new Person, update the Person data, get the person data by their unique id, and delete a Person resource.
## UML Diagram
The database storage schema is represented like so, the different operations that can be performed on the resource are also shown.

![stage-2-uml](https://github.com/ewomatc/hng-stage-2/assets/107651392/60260bc9-f468-4988-a178-9184299fa75d)

## Getting started
Follow these steps to get started using the API
1. Clone this repository:
   ```
   $ git clone https://github.com/ewomatc/hng-stage-2.git
   ```
3. Navigate to the project directory and install the required dependencies:
   ```
   Desktop/ewomatc $ cd hng-stage-2
   Desktop/ewomatc/hng-stage-2 $ npm install
   ```
4. Start the server like so:
   ```
   $ npm run dev
   ```
The API is running locally on your machine and should return this response when you visit ```http://localhost:8080``` in your browser:
```
{
"message": "Welcome to my API"
}
```
