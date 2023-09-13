# HNG-People-API

## Description

## Installation
    Clone the project repository from GitHub
    Install Node.js and npm if not already installed.
    Install project dependencies using npm install.
    Set up a MongoDB database and provide the connection string in the project's .env file.
    Start the API using npm start.
    Access the API endpoints using the base URL (e.g., http://localhost:3000/api).

# Usage
 ## ENDPOINTS
    POST: /api --Create new document/person
    GET: /api --Read all documents/lists of persons
    GET: /api/:user_id --Read a particular document/person
    PUT: /api/:user_id --Update a particular document/person
    DELETE: /api/:userid --Delete a particular document/person

 ## EXAMPLES
   This assuming you are using postman but can also be applied in other cases
  ## To create a new person
   `POST /api`
   Under the body tab, set to "raw" and include the new name in a format like this:
   {
    "name": "Peg"
   }
  ## To read the list of all persons
   `GET /api`
   Under the body tab, set to "none"
  ## To read a particular person
    `GET /api/:user_id`
     Where user_id is the person's name
     Under the body tab, set to "raw" and include the name in a format like this:
     {
     "name": "Peg"
     }
  ## To update a particular list
    `PUT /api/:user_id`
    Where user_id is the name to be updated
    Under the body tab, set to "raw" and include the name in a format like this:
    {
    "name": "Peg"
    }
    name is the new name
  ## To delete a particular list/person
    `DELETE /api/"user_id`
    Where user_id is the name of the person to be deleted
    Under the body tab, set to "raw" and include the name in a format like this:
    {
    "name": "Peg"
    }
## Source code
[Source code](https://github.com/Chimamanda16/HNG-People-API/blob/main/app.js "Visit GitHub")

## UML Diagram
[Diagram](https://lucid.app/lucidchart/e2cf9cca-67e1-4cff-974c-c7ce04873ccf/edit?viewport_loc=-124%2C-205%2C3067%2C1459%2C0_0&invitationId=inv_c81599bf-337d-4db8-b8b5-f6d1c2ac74d3)

