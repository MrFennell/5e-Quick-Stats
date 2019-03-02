'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stat = sequelize.define('Stat', {
    StatName: DataTypes.STRING
  }, {});
  Stat.associate = function(models) {
    // associations can be defined here
  };
  return Stat;
};