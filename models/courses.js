'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      // define association here
      Courses.hasMany(models.followCourse, { foreignKey: 'course_id' });
      Courses.hasMany(models.Topics, { foreignKey: 'course_id' });
    }
  }
  Courses.init({
    description: DataTypes.TEXT,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
