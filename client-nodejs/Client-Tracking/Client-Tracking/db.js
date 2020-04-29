//database config file

const Sequelize = require('sequelize');
const sequelize = new Sequelize('computer_by_morgan_client_info', 'computer_morgan', 'wearewright1', {
    host: '206.189.229.100',
    port: '3306',
    dialect: 'mysql'
})
var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;