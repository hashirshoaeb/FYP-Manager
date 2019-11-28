var data = require("./module");

data(2, 4, (err, response) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(response);
    console.log(response.area(3, 4));
    console.log(response.perimeter(3, 2));
  }
});
