const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(value => {
    // console.log('CONNECTION SUCCESSFUL', value.connections);
    console.log('CONNECTION SUCCESSFUL');
  })
  .catch(reason => {
    // console.log('DATABASE CONNECTION ERROR', reason);
    console.log('DATABASE CONNECTION ERROR');
  });

// console.log(process.env);
const app = require(`${__dirname}/app`);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}...`);
});
