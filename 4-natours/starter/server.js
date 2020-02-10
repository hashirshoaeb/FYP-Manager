const app = require(`${__dirname}/app`);
const port = 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}...`);
});
