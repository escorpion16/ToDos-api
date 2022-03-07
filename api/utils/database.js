const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'todos',
  dialect: 'postgres'
});

module.exports = { sequelize };
