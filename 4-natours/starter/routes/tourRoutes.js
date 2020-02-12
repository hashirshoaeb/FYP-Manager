const express = require('express');
const c = require(`${__dirname}/../controllers/tourController.js`);
const tourRouter = express.Router();

// tourRouter.param('id', c.checkID);

tourRouter
  .route('/')
  .get(c.getAllTours)
  .post(c.createTour);

tourRouter
  .route('/:id')
  .get(c.getTour)
  .patch(c.updateTour)
  .delete(c.deleteTour);

module.exports = tourRouter;
