var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  netId: {
    type: String,
    unique: true
  },
  name: String,
  email: String,
  role: String,
});

module.exports.User = mongoose.model('User', UserSchema);

/*module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    netId: { type: DataTypes.STRING, validate: { notNull: true } },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    associate: function(models) {
      User.hasMany(models.Reservation);
      User.hasMany(models.Series);
      User.hasMany(models.ClassSection);
    }
  });
 
  return User;
};
*/