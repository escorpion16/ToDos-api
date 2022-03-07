const express = require('express');

const router = express.Router();

//Controllers
const {
  getAllToDos,
  createToDo,
  updateToDo,
  deleteToDo
} = require('../controllers/todos.controller');

router.get('/', getAllToDos);

router.post('/', createToDo);

router.patch('/:id', updateToDo);

router.delete('/:id', deleteToDo);

module.exports = { todoRouter: router };
