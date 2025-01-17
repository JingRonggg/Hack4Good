# MERN Stack Template

## Tech Stack Used

- **MongoDB**: A NoSQL database for storing application data.
- **Express**: A web application framework for Node.js.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Material-UI**: A popular React UI framework.

## Technical Complexities

- **State Management**: The application uses React's `useState` and `useEffect` hooks for managing state and side effects.
- **Routing**: The client-side routing is handled by `react-router`, enabling navigation between different pages.
- **Asynchronous Operations**: The application performs asynchronous operations using `axios` for making HTTP requests to the backend.
- **Database Connection**: The server establishes a connection to MongoDB using Mongoose, with proper handling of connection states and errors.
- **Environment Configuration**: The application uses `dotenv` to manage environment variables, ensuring sensitive information is not hard-coded.
- **Type Safety**: TypeScript is used throughout the project to provide type safety and reduce runtime errors.

## Security Features

- **JWT Authentication**: The server uses JSON Web Tokens (JWT) for authenticating users. Tokens are signed with a secret key and verified on each request.
- **Password Hashing**: User passwords are hashed using `bcrypt` before being stored in the database, ensuring that plain text passwords are never saved.
- **Bearer Token Middleware**: The server includes middleware to check for valid bearer tokens in incoming requests, ensuring that only authenticated users can access certain routes.
- **Error Handling**: The server has centralized error handling middleware to catch and respond to errors gracefully.
- **CORS**: The server uses the `cors` package to enable Cross-Origin Resource Sharing, allowing the client to communicate with the server securely.

## Optimizations

- **Code Splitting**: The client application uses code splitting to load only the necessary JavaScript for the current page, improving initial load times.
- **Lazy Loading**: Components are lazy-loaded using React's `React.lazy` and `Suspense` to reduce the initial bundle size and improve performance.
- **Memoization**: React's `useMemo` and `useCallback` hooks are used to memoize expensive calculations and functions, reducing unnecessary re-renders.
- **Efficient State Management**: State is managed efficiently using React's context API and custom hooks, minimizing the number of state updates and re-renders.
- **Database Indexing**: MongoDB collections are indexed to improve query performance and reduce response times for database operations.
- **Caching**: HTTP responses are cached using appropriate cache headers to reduce the number of requests to the server and improve performance.

## Setup Procedure

### 1. Install dependencies:

Go to the `server` folder, and run `install`.

```sh
cd ./server
npm i
```

Go to the `client` folder, and run `install`.

```sh
cd ./client
npm i
```

### 2. Prepare MongoDB:

Prepare your MongoDB database (using [Atlas](https://www.mongodb.com/cloud/atlas), or [Community](<https://www.mongodb.com/try/download/community>)). Then configure your database within `server/src/constants/index.ts`, by configuring the `MONGO_URI` variable.

### 3. Configure Environment Variables:

Create a `.env` file in the `server` folder and configure the following variables:

```env
PORT=8080
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the `client` folder and configure the following variable:

```env
REACT_APP_BACKEND_URL=your_backend_url
```

### 4. Start Applications:

Go to the `server` folder, and run `dev`.

```sh
cd ./server
npm run dev
```

Go to the `client` folder, and run `dev`.

```sh
cd ./client
npm run dev
```

### 5. Build for Production:

To build the client application for production, run the following command in the `client` folder:

```sh
npm run build
```

To build the server application for production, run the following command in the `server` folder:

```sh
npm run build
```

### 6. Start Production Server:

To start the production server, run the following command in the `server` folder:

```sh
npm start
```

### 7. Additional Information:

- The client application is served from the `client/build` directory.
- The server application listens on the port specified in the `.env` file.
- The client application communicates with the server using the URL specified in the `.env` file.

For more information, refer to the individual `README.md` files in the `client` and `server` folders.

