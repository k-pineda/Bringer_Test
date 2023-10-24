### README for Node.js Backend

# Parcel Tracking Node.js Backend

This is a Node.js backend for a parcel tracking application. It provides two main endpoints:

1. **Generate Token Endpoint**:
   - URL: `/Generate_Token`
   - Description: This endpoint receives a user's login and password, combines them, and returns a JSON Web Token (JWT) as a response.

2. **Tracking Parcel Endpoint**:
   - URL: `/Tracking_Parcel`
   - Description: This endpoint receives a tracking number, makes a request to a third-party parcel tracking API, and returns the parcel information in JSON format.

## Getting Started

1. **Installation**: To set up and run the Node.js backend, follow these steps:

   ```bash
   # Clone the repository
   git clone https://github.com/your/repo.git

   # Navigate to the project directory
   cd parcel-tracking-api

   # Install dependencies
   npm install

   # Set environment variables (e.g., SECRETKEY, PORT) in a .env file

   # Start the server
   npm start
   ```

2. **Environment Variables**: You need to create a `.env` file in the root directory with the following environment variables:

   ```
   SECRETKEY=your_secret_key
   PORT=3000
   ```

3. **API Endpoints**: The backend provides the following API endpoints:

   - `POST /Generate_Token`: Generate a JWT token by providing a JSON object with `login` and `password` fields in the request body.

   - `GET /Tracking_Parcel`: Retrieve parcel information by providing the `Tracking_number` as a query parameter.
   

https://github.com/k-pineda/Bringer_Test/assets/128410226/c0e85d3a-bd99-4d16-91ca-0c10c8d7361d



4. **Dependencies**: The project uses the following dependencies:
   - `express` for the web server.
   - `jsonwebtoken` for JWT generation and verification.
   - `axios` for making HTTP requests to the third-party API.

### README for React App

# Parcel Tracking React App

This is a React app for parcel tracking that interacts with the Parcel Tracking Node.js backend. It provides two main views:

1. **Tracking View**:
   - URL: `/`
   - Description: This view allows users to enter a tracking number, make a request to the backend for parcel information, and display the tracking events.

2. **Login View**:
   - URL: `/login`
   - Description: This view displays a form for users to enter their login and password, submit the data to the backend's Generate Token endpoint, and display the generated JWT token.

## Getting Started

1. **Installation**: To set up and run the React app, follow these steps:

   ```bash
   # Clone the repository
   git clone https://github.com/your/repo.git

   # Navigate to the project directory
   cd parcel-tracking-app

   # Install dependencies
   npm install

   # Start the development server
   npm start
   ```

2. **API Configuration**: Ensure that the app is configured to make API requests to the Parcel Tracking Node.js backend. You can update the API endpoint URLs in the components that make the requests.

3. **Routing**: The app uses the React Router library for routing. Be sure to define your routes in the `Routes.js` file, specifying the components to render for each route.

4. **Dependencies**: The project uses the following dependencies:
   - `react-router-dom` for client-side routing.
   - `axios` for making HTTP requests to the backend.
   - Other dependencies for React and UI components.

5. **Environment Variables**: If your app requires environment-specific configurations (e.g., API keys), set them as environment variables.
