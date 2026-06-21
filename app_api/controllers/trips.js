const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async function(req, res) {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsFindByCode = async function(req, res) {
  if (!req.params.tripCode) {
    return res.status(404).json({ message: 'Trip code is required' });
  }

  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip code not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};