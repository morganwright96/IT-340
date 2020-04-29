/*********************************************************
This model relates to the 'Computer Orders' table in your database
*********************************************************/
var db = require('../db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var PCOrders = sequelize.define('PCOrders', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, },
	Type: { type: Sequelize.STRING, allowNull: false, },
	Memory: { type: Sequelize.STRING, allowNull: false, defaultValue: "8 GB DDR4 RAM" },
	Processor: { type: Sequelize.STRING, allowNull: false, defaultValue: "Intel i7 8th gen"},
	GraphicsCard: { type: Sequelize.STRING, allowNull: true, },
	Storage: { type: Sequelize.STRING, allowNull: false, defaultValue: '256 GB SSD' },
	OS: { type: Sequelize.STRING, allowNull: false },
	Price: { type: Sequelize.DOUBLE, allowNull: true },
	Notes: { type: Sequelize.STRING, allowNull: true },
	OrderDate: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	CompletedDate: { type: Sequelize.DATE, allowNull: true, defaultValue: null },
	UserID: { type: Sequelize.INTEGER, allowNull: false },
	createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
})

module.exports = PCOrders; //this exports the model from this page to whatever page imports it