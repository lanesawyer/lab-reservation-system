var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ComputerSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  isPowered: Boolean,
  isLoggedIn: Boolean,
  isReservable: Boolean,
  memoryUsage: Number,
  remoteConnectionCount: Number
});

module.exports.Computer = mongoose.model('Computer', ComputerSchema);

/*module.exports = function(sequelize, DataTypes) {
  var Computer = sequelize.define('Computer', {
    name: DataTypes.STRING,
    isPowered: DataTypes.BOOLEAN,
    isLoggedIn: DataTypes.BOOLEAN,
    isReservable: DataTypes.BOOLEAN,
    memoryUsage: DataTypes.INTEGER,
    remoteConnectionCount: DataTypes.INTEGER
  }, {
    associate: function(models) {
      Computer.hasMany(models.Reservation);
    }
  });
 
  return Computer;
};
*/