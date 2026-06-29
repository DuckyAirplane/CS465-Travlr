# Travlr Getaways Full Stack Web Application

## Architecture

In this project, I used two different types of frontend development. The customer-facing side used Express with HTML and Handlebars templates, which rendered pages from the server, and the admin side which uses an Angular single-page application. It loads data from the API and updates the page without constantly reloading the whole site. JavaScript connected both sides by handling logic, routing, form behavior, and communication with the backend.

The backend used MongoDB because the trip data fit well into a flexible NoSQL document structure. Each trip could be stored as a document with fields such as code, name, length, resort, description, and image. MongoDB also worked well with Node, Express, and Mongoose, which made it easier to connect the database to the API.

## Functionality

JSON is different from JavaScript since its a data format, while JavaScript is a programming language. JSON uses a simple text structure to send data between the frontend and backend. Specifically for this project the API returns the trip data as JSON, and the Angular admin page uses that data to display, add, update, and delete trips.

I refactored the project several times to improve the structure and functionality. In early development the trip data was moved out of hardcoded HTML and into reusable data files, then later into MongoDB through API endpoints. I also separated the backend into routes, controllers, and models, which made the code quicker and easier to manage. Reusable UI components in Angular helped avoid repeating the same card and form logic across the admin page.

## Testing

Methods are the actions used by the API, such as GET, POST, PUT, and DELETE. Endpoints were the specific API paths used to access or change trip data, such as getting all trips, adding a new trip, updating a trip, or deleting a trip. I tested these endpoints with Postman to make sure the backend was sending and receiving data correctly.

Security made testing more detailed because the admin side required login authentication before certain actions could be used. After adding security, I had to make sure protected routes only worked when a valid token was included. This helped me understand how the frontend, backend, API, and login system all connect in a full stack application.

## Reflection

This opportunity helped get me get closer to my professional goals by giving me hands-on experience with building a complete full stack web application. I learned how the frontend, backend, database, and API work together instead of seeing them as separate pieces. I also got more comfortable using Angular, Express, Node.js, MongoDB, Mongoose, and Postman.

## AI Usage Acknowledgement

I used ChatGPT to help organize my written reflection for this README file. The final product was reviewed by me before submission.

