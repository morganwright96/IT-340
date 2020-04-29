/*********************************************************
This model relates to the 'services' table in your database
*********************************************************/
var db = require('../db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Services = sequelize.define('Services', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, },
	ServiceType: { type: Sequelize.STRING, allowNull: false, },
	Price: { type: Sequelize.DOUBLE, allowNull: false },
	createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
})

module.exports = Services; //this exports the model from this page to whatever page imports it