const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const tripsController = require('../controllers/trips');
const authenticationController = require('../controllers/authentication');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET || 'MY_SECRET', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};

router
  .route('/register')
  .post(authenticationController.register);

router
  .route('/login')
  .post(authenticationController.login);

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddOne);

router
  .route('/trips/:tripId')
  .put(authenticateJWT, tripsController.tripsUpdateOne)
  .delete(authenticateJWT, tripsController.tripsDeleteOne);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode);

module.exports = router;