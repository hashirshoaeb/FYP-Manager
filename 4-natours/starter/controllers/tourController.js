const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next) => {
  const tour = tours.find(el => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: 'ID not found'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    reqTime: req.reqTime,
    data: {
      tours: tours
    }
  });
};

exports.getTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);
  console.log(tour);
  res.status(200).json({
    status: 'success'
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: newId }, req.body);
  tours.push(newtour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      if (err) res.status(404).send('Fail to write');
      else
        res.status(201).json({
          status: 'success',
          data: newtour
        });
    }
  );
};

exports.updateTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);

  res.status(200).json({
    status: 'success',
    data: 'updated data'
  });
};

exports.deleteTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);

  res.status(204).json({
    status: 'success',
    data: null
  });
};
