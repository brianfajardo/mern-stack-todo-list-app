# MERN Todos 🏄

I created this todo list as a way to test my current understanding of full stack web development. JavaScript is my bread and butter, so I decided to create this app in JS land, naturally turning to the MongoDB, Express, React and Node (MERN) combo.

## Features:
- React, Redux, Webpack ❤️
  - Keeping application state in a single object tree
  - Send HTTP request to server via action creators, then asynchronously (with redux-thunk `dispatch`), in response to resolved Promise from server, send action object to reducer
  - Updating app state via pure reducers (mutating state is a no-no.)
  - Mapping state to props for use with Container (smart) components
  - Passing state to presentational (dumb) components to 'react' to and re-render.

- Node, Express, MongoDB
  - Node server which routes HTTP request to the appropriate controller.
  - Controller runs MongoDB (database) queries for basic CRUD operations
  - Use and object relational mapper like Mongoose to create a model for database collection

## How to use:
1. Download or clone this repository
2. `npm install`
3. Make sure you have MongoDB with a data folder
4. In three terminal windows run:
* `mongod`
* `npm run server`
* `npm run client`
5. In browser, navigate to localhost:8080


