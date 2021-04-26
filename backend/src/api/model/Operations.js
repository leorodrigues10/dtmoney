const Sequelize = require('sequelize');
const connection = require('../../config/database');


const Operation = connection.define('operations', {
   title: Sequelize.STRING,
   value: Sequelize.STRING,
   type: Sequelize.STRING
});

Operation.sync({force: false});


module.exports = Operation;