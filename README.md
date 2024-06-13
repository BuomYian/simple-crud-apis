# SIMPLE CRUD APIs

This repository contains a basic CRUD (Create, Read, Update, Delete) API built using the MERN stack (MongoDB, Express, React, Node.js). It provides endpoints for managing a collection of items (e.g., users, products, tasks) with typical CRUD operations.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [License](#license)

## Requirements

- Node.js (>= 14.x)
- MongoDB (>= 4.x)
- NPM or Yarn
- Git

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BuomYian/simple-crud-apis.git
   cd simple-crud-apis
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

## Running the Application

1. **Start MongoDB:** Make sure MongoDB is running locally on the default port (27017).

2. **Start the server:**

   ```bash
   cd server
   npm start
   ```

   The server will start on `http://localhost:5000`.

3. **Start the client:**

   ```bash
   cd ../client
   npm start
   ```

   The client will start on `http://localhost:3000`.

## API Endpoints

The API provides the following endpoints:

- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product by ID.
- **DELETE /api/products/:id**: Delete an product by ID.

### Example Requests

- **Create a new product:**

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "product1", "description": "This is product 1"}' http://localhost:5000/api/products
  ```

- **Get all products:**

  ```bash
  curl http://localhost:5000/api/products
  ```

- **Get a single product by ID:**

  ```bash
  curl http://localhost:5000/api/products/<product_id>
  ```

- **Update an product:**

  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated product", "description": "Updated description"}' http://localhost:5000/api/products/<product_id>
  ```

- **Delete an product:**

  ```bash
  curl -X DELETE http://localhost:5000/api/products/<product_id>
  ```

## Folder Structure

```
simple-crud-apis/
├── client/                 # React front-end
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── server/                 # Express back-end
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md               # This file
```

## Configuration

### Server

- **MongoDB URI**: Configure the MongoDB URI in `server/config/default.json`.

  ```json
  {
    "mongoURI": "mongodb://localhost:27017/merncrud"
  }
  ```

### Client

- **Proxy**: Ensure the proxy in `client/package.json` is set to `http://localhost:5000`.

  ```json
  "proxy": "http://localhost:5000"
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
