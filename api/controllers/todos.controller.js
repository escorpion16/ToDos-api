const { ToDo } = require('../models/todo.model');

const { filterObj } = require('../utils/filterObject');

exports.getAllToDos = async (req, res) => {
  try {
    const todos = await ToDo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: { todos }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createToDo = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      res.status(400).json({
        status: 'error',
        message: 'Must provide a valid task'
      });
      return;
    }

    const newToDo = await ToDo.create({ content });

    res.status(201).json({
      status: 'success',
      data: { newToDo }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    //const data = filterObj(req.body, 'content');
    const { content } = req.body;
    const data = { content: content };
    const todo = await ToDo.findOne({ where: { id: id, status: 'active' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update task'
      });
      return;
    }

    await ToDo.update({ ...data });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await ToDo.findOne({ where: { id, status: 'active' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete task'
      });
      return;
    }

    await todo.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
