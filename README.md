### HNG-People-API
# My Project

## Description
# This is a brief description of my project.

## Installation
1. Clone this repository 
`git clone https://github.com/Chimamanda16/HNG-People-API.git`
2. Start nom and install the dependencies
   `npm init` 
   `npm install`

# Usage
 ## ENDPOINTS
   1. POST: /api --Create new document/person
   2. GET: /api --Read all documents/lists of persons
   3. GET: /api/:user_id --Read a particular document/person
   4. PUT: /api/:user_id --Update a particular document/person
   5. DELETE: /api/:userid --Delete a particular document/person

 ## EXAMPLES
  ## This assuming you are using postman but can also be applied in other cases
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

