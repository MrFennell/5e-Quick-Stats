'use strict';
module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define('Race', {
    RaceName: DataTypes.STRING
  }, {});
  Race.associate = function(models) {
    // associations can be defined here

  };
  return Race;
};