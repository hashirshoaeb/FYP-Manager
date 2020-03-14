const Tour = require(`${__dirname}/../modals/tourModal`);

exports.getAllTours = (req, res) => {
  Tour.find()
    .then(value => {
      res.status(200).json({
        status: 'success',
        data: value
      });
    })
    .catch(reason => {
      res.status(404).json({
        status: 'error',
        data: reason
      });
    });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success'
  });
};

exports.createTour = (req, res) => {
  const newTour = new Tour(req.body);
  newTour
    .save()
    .then(value => {
      res.status(201).json({
        status: 'success',
        data: value
      });
    })
    .catch(reason => {
      res.status(404).json({
        status: 'error',
        data: reason
      });
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
