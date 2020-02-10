const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours
    }
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
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
});

app.post('/api/v1/tours', (req, res) => {
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
});

app.patch('/api/v1/tours/:id', (req, res) => {
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
});

app.delete('/api/v1/tours/:id', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}...`);
});
