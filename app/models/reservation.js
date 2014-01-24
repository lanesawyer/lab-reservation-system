var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  start_time: Date,
  end_time: Date,
  note: String,
  user: mongoose.Schema.Types.ObjectId,
  computer: mongoose.Schema.Types.ObjectId,
  series: mongoose.Schema.Types.ObjectId
});

mongoose.model('Reservation', ReservationSchema);

/*module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('Reservation', {
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    note: DataTypes.TEXT
  }, {
    associate: function(models) {
      Reservation.hasOne(models.User);
      Reservation.hasOne(models.Computer);
      Reservation.hasOne(models.Series);
    }
  });
 
  return Reservation;
};*/
