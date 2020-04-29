/*********************************************************
This model relates to the 'users' table in your database
*********************************************************/
var db = require('../db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Users = sequelize.define('Users', {
	Userid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, },
	username: { type: Sequelize.STRING, unique: true, allowNull: false, },
	password: { type: Sequelize.STRING, allowNull: false },
	salt: { type: Sequelize.STRING, allowNull: false },
	email: { type: Sequelize.STRING, unique: true, allowNull: false, },
	fname: { type: Sequelize.STRING, allowNull: false },
	lname: { type: Sequelize.STRING, allowNull: false },
	address: { type: Sequelize.STRING, allowNull: false },
	apt: { type: Sequelize.STRING, allowNull: true },
	state: { type: Sequelize.STRING, allowNull: false },
	zip: { type: Sequelize.INTEGER, allowNull: false },
	phone: { type: Sequelize.STRING, allowNull: false },
	country: { type: Sequelize.STRING, allowNull: false },
	isAdmin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: 0 },
	createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
	isLoggedIn: { type: Sequelize.BOOLEAN, allowNull:false, defaultValue: 0}
})

module.exports = Users; //this exports the model from this page to whatever page imports it