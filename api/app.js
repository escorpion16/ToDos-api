// Create server Express *

// Define endpoint for ToDos *
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress) *

// Create ToDo model *
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils) *

// IMPORTANT: Prettier format *

// Install cors library (npm i cors) *
// app.use(cors()) *

const express = require('express');
const cors = require('cors');
// Routers
const { todoRouter } = require('./routes/todos.routes');

// Utils
const { sequelize } = require('./utils/database');

// Init express app
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/todos', todoRouter);

sequelize
  .authenticate()
  .then(() => console.log('database authenticated'))
  .catch((error) => console.log(error));

sequelize
  .sync()
  .then(() => console.log('database synced'))
  .catch((error) => console.log(error));

app.listen(4000, () => {
  console.log('API running');
});
