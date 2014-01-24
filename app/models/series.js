var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeriesSchema = new Schema({
  name: String,
  endsOn: Date,
  user: mongoose.Schema.Types.ObjectId
});

module.exports.Series = mongoose.model('Series', SeriesSchema);

/*module.exports = function(sequelize, DataTypes) {
  var Series = sequelize.define('Series', {
    name: DataTypes.STRING,
    endsOn: DataTypes.DATE
  }, {
    associate: function(models) {
      Series.hasMany(models.Reservation);
      Series.hasOne(models.User);
    } ,
    freezeTableName: true
  });
 
  return Series;
};
*/