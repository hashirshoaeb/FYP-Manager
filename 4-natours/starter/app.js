const express = require('express');
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

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// Routes
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}...`);
});
