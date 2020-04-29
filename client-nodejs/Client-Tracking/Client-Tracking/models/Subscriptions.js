/*********************************************************
This model relates to the 'Subscription' table in your database
*********************************************************/

var db = require('../db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Subscriptions = sequelize.define('Subscriptions', {
	id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, },
	Status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Expired' },
	isUsed: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: 0 },
	StartDate: { type: Sequelize.DATE, allowNull: true, defaultValue: null },
	isPaid: { type: Sequelize.BOOLEAN, allowNull: false, defualtValue: 0 },
	UserID: { type: Sequelize.INTEGER, allowNull: false},
	createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
})

module.exports = Subscriptions; //this exports the model from this page to whatever page imports it