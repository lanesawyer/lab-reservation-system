var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClassSectionSchema = new Schema({
  section_num: Number,
  class_num: Number,
  title: String,
  timeslot: Date,
  sunday: Boolean,
  monday: Boolean,
  tuesday: Boolean,
  wednesday: Boolean,
  thursday: Boolean,
  friday: Boolean,
  saturday: Boolean,
  professor: mongoose.Schema.Types.ObjectId
});

mongoose.model('ClassSection', ClassSectionSchema);

/*module.exports = function(sequelize, DataTypes) {
  var ClassSection = sequelize.define('ClassSection', {
    section_num: DataTypes.INTEGER,
    class_num: DataTypes.INTEGER,
    title: DataTypes.STRING,
    timeslot: DataTypes.DATE,
    sunday: DataTypes.BOOLEAN,
    monday: DataTypes.BOOLEAN,
    tuesday: DataTypes.BOOLEAN,
    wednesday: DataTypes.BOOLEAN,
    thursday: DataTypes.BOOLEAN,
    friday: DataTypes.BOOLEAN,
    saturday: DataTypes.BOOLEAN,
  }, {
    associate: function(models) {
      ClassSection.hasOne(models.User, { as: "professor" });
      ClassSection.hasMany(models.User);
    }
  });
 
  return ClassSection;
};
*/