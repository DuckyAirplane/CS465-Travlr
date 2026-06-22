const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddOne);

router
  .route('/trips/:tripId')
  .put(tripsController.tripsUpdateOne)
  .delete(tripsController.tripsDeleteOne);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode);

module.exports = router;