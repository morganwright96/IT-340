'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    UserID: DataTypes.INTEGER,
    ServiceID: DataTypes.INTEGER,
    OrderDate: DataTypes.DATE,
    CompletedDate: DataTypes.DATE
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};