const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

// Controllers
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    reqTime: req.reqTime,
    data: {
      tours: tours
    }
  });
};

const getTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: 'ID not found'
    });
  }
  console.log(tour);
  res.status(200).json({
    status: 'success'
  });
};

const createTour = (req, res) => {
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

const updateTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: 'ID not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: 'updated data'
  });
};

const deleteTour = (req, res) => {
  const tour = tours.find(el => el.id === req.params.id * 1);
  if (!tour) {
    return res.status(404).json({
      status: 'error',
      message: 'ID not found'
    });
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
};
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// Routes
app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}...`);
});
