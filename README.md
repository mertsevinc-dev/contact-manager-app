# Contact Manager App

This project is a contact manager application that allows users to manage their contacts. It uses MongoDB as the database and Mongoose as the ORM.

## Getting Started

These instructions will help you to run and develop the project on your local machine.

### Prerequisites

Make sure the following software is installed:

- Node.js - [Download from the official website](https://nodejs.org)
- MongoDB - [Download from the official website](https://www.mongodb.com)
- MongoDB database connection string

### Installation

1. Clone the project:

   `git clone https://github.com/mertsevinc-dev/contact-manager-app.git`

2. Navigate to the project directory:

   `cd contact-manager-app`

3. Install the dependencies:

   `npm install`

4. Create an `.env` file and set the following variables:

   `CONNECTION_STRING=your_mongodb_connection_string`
   `JWT_SECRET=your_jwt_secret`

5. Start application:

   `npm run dev`

The application will run by default at `http://localhost:3000`.

## API Routes

### User Routes

- `POST /api/v1/users/register`: Create a new user account.
- `POST /api/v1/users/login`: Perform user login and return a JSON Web Token (JWT).
- `GET /api/v1/users/current`: Get current user information.

### Contact Routes

- `GET /api/v1/contacts`: Get all contacts.
- `GET /api/v1/contacts/:id`: Get a specific contact.
- `POST /api/v1/contacts`: Create a new contact.
- `PATCH /api/v1/contacts/:id`: Update a specific contact.
- `DELETE /api/v1/contacts/:id`: Delete a specific contact.

### Environment Variables

- `CONNECTION_STRING`: MongoDB database connection string.
- `JWT_SECRET`: Secret key for JSON Web Token (JWT) generation.

### Error Handling

The application uses custom middleware for error handling. Errors are handled in the `/api/v1/contacts` and `/api/v1/users` routes and appropriate error messages are returned.
