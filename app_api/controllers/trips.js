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
const tripsDeleteOne = async function(req, res) {
  if (!req.params.tripId) {
    return res.status(404).json({ message: 'Trip ID is required' });
  }

  try {
    const trip = await Trip.findByIdAndDelete(req.params.tripId).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsAddOne = async function(req, res) {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

const tripsUpdateOne = async function(req, res) {
  if (!req.params.tripId) {
    return res.status(404).json({ message: 'Trip ID is required' });
  }

  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.tripId,
      req.body,
      { new: true }
    ).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
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
  tripsFindByCode,
  tripsUpdateOne,
  tripsAddOne,
  tripsDeleteOne
};