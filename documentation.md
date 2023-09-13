## Overview

This API provides basic CRUD operations for managing a collection of people. Users can create, read, update, and delete person records.

### Base URL

The base URL for all API endpoints is `http://localhost:3000/api`.

### Authentication

No authentication is required to access the API endpoints.

### Standard Request and Response Formats

#### Create a New Person (POST `/api`)

- **Request Format:**
  - Method: POST
  - Endpoint: `/api`
  - Headers:
    - Content-Type: application/json
  - Body:
    - JSON object with the following property:
      - `name` (string, required): The name of the person.

- **Sample Request:**

  ### POST /api
  ### Content-Type: application/json
  ```json
  {
    "name": "John Doe"
  }
  ```

- **Response Format:**
  - Status Code: 200 OK
  - JSON response with a success message:
    - `{ "message": "Person saved" }`

#### Retrieve All People (GET `/api`)

- **Request Format:**
  - Method: GET
  - Endpoint: `/api`

- **Sample Request:**

  ### GET /api

- **Response Format:**
  - Status Code: 200 OK
  - JSON response containing an array of person objects:
    - Example:

      ```json
      [
        {
            "_id": "6500bad824e747655301e7ca",
            "Name": "Neem",
            "__v": 0
        },
        {
            "_id": "6500c57f3f3444307d221379",
            "Name": "Finn",
            "__v": 0
        },
        {
            "_id": "6500c7467f5e554e848ae54d",
            "Name": "Salamander",
            "__v": 0
        },
        {
            "_id": "6500c7d67f5e554e848ae555",
            "Name": "Simona",
            "__v": 0
        },
        {
            "_id": "65016255f265d20f5b30ba5e",
            "Name": "Peg",
            "__v": 0
        },
        {
            "_id": "650162cff265d20f5b30ba68",
            "Name": "John",
            "__v": 0
        },
        {
            "_id": "65016412f265d20f5b30ba6e",
            "Name": "Chris Doe",
            "__v": 0
        }
      ]
      ```

#### Retrieve a Specific Person (GET `/api/:user_id`)

- **Request Format:**
  - Method: GET
  - Endpoint: `/api/:user_id`
  - Parameters:
    - `user_id` (string, required): The name of the person to retrieve.

- **Sample Request:**

  ### GET /api/Chris%20Doe

- **Response Format:**
  - Status Code: 200 OK
  - JSON response containing the person object:
    - Example:

      ```json
      {
        "_id": "5fbb7ccf26f92e001c7421f5",
        "Name": "John Doe",
        "__v": 0
      }
      ```

- Status Code: 404 Not Found
  - JSON response indicating that the person does not exist:
    - Example:

      ```json
      { "error": "Person does not exist" }
      ```

#### Update a Person (PUT `/api/:user_id`)

- **Request Format:**
  - Method: PUT
  - Endpoint: `/api/:user_id`
  - Parameters:
    - `user_id` (string, required): The name of the person to update.
  - Headers:
    - Content-Type: application/json
  - Body:
    - JSON object with the following property:
      - `name` (string, required): The new name for the person.

- **Sample Request:**

  ### PUT /api/John%20Doe
  ### Content-Type: application/json

  ```json
  {
    "name": "Updated Name"
  }
  ```

- **Response Format:**
  - Status Code: 200 OK
  - JSON response with a success message:
    - `{ "message": "Person updated" }`

- Status Code: 404 Not Found
  - JSON response indicating that the person does not exist:
    - Example:

      ```json
      { "error": "Person does not exist" }
      ```
    - A message indicating that the new name already exists
      - `{ "message": "User with name " + newName + " already exists!" }`

#### Delete a Person (DELETE `/api/:user_id`)

- **Request Format:**
  - Method: DELETE
  - Endpoint: `/api/:user_id`
  - Parameters:
    - `user_id` (string, required): The name of the person to delete.

- **Sample Request:**

  ### DELETE /api/John%20Doe

- **Response Format:**
  - Status Code: 200 OK
  - JSON response with a success message:
    - `{ "message": "Person deleted" }`

- Status Code: 404 Not Found
  - JSON response indicating that the person does not exist:
    - Example:

      ```json
      { "error": "Person does not exist" }
      ```

### Known Limitations
- Error handling is minimal, and more robust error handling can be added to improve the reliability of the API.
- The API currently supports only basic CRUD operations for managing people. Additional features and validation can be added as needed.

### Setting Up and Deploying the API

To set up and deploy the API locally or on a server, follow these steps:

1. Clone the project repository from GitHub
2. Install Node.js and npm if not already installed.
3. Install project dependencies using `npm install`.
4. Set up a MongoDB database and provide the connection string in the project's `.env` file.
5. Start the API using `npm start`.
6. Access the API endpoints using the base URL (e.g., `http://localhost:3000/api`).

For deployment on a server, you can use a hosting platform like Heroku, Glitch, or others as mentioned earlier. Make sure to configure the environment variables, including the database connection string, in the production environment.

---
