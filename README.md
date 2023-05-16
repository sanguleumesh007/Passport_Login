# Passport_Login


## Description
This is a web application that allows users to authenticate and login using Passport authentication.

## Features
- User registration with email and password
- User login with email and password
- Passport authentication for user authentication and session management
- Example protected routes that require authentication
- Example logout functionality

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Passport.js

## Getting Started
1. Clone the repository: `git clone https://github.com/yourusername/your-app.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file based on the provided `.env.example` file and add your MongoDB URI and session secret.
4. Start the server: `npm start`
5. Visit `http://localhost:5000` in your browser.

## Configuration
Before running the application, make sure to set up the following environment variables in the `.env` file:

- `MONGODB_URI`: The MongoDB connection URI.
- `SESSION_SECRET`: A secret key used for session encryption.

## Usage
- Register a new user by visiting the registration page and providing an email and password.
- Log in using the registered email and password on the login page.
- Once logged in, you can access protected routes or customize the application based on your needs.

## Project Structure
- `app.js`: The entry point of the application.
- `config/passport.js`: Passport configuration for authentication strategies.
- `models/User.js`: Mongoose model for the User collection.
- `routes/index.js`: Routes for the home page, registration, login, and protected routes.
- `views/`: Contains the EJS templates for the views.
- `public/`: Static assets such as CSS files and client-side JavaScript.

## Contributing
Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

