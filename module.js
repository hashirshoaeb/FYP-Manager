// area = (x, y) => {
//   return x * y;
// };

// perimeter = (x, y) => {
//   return 2 * (x + y);
// };

// callback(err, response)
module.exports = (x, y, callback) => {
  callback(null, {
    area: (x, y) => {
      return x * y;
    },
    perimeter: (x, y) => {
      return 2 * (x + y);
    }
  });
};
