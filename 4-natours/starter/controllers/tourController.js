const fs = require('fs');
const Tour = require(`${__dirname}/../modals/tourModal`);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success'
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success'
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: newtour
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success'
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
