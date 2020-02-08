const fs = require("fs");
const superagent = require("superagent");

////    Call backs
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) {
//     console.log("FILE READING ERROR", err);
//   } else {
//     console.log(`${data}`);
//     superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`,
//       (err, res) => {
//         if (err) {
//           console.log("FETCHING DOG FROM API ERROR", err);
//         } else {
//           console.log(res.body);
//           fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, err => {
//             if (err) {
//               console.log(`WRITE FILE ERROR`, err);
//             }
//           });
//         }
//       }
//     );
//   }
// });

////    Promises
// const readFilePro = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) return reject("FILE READING ERROR", err);
//       else return resolve(data);
//     });
//   });
// };

// const writefilePro = (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, err => {
//       if (err || !data) reject(`WRITE FILE ERROR`, err);
//       else resolve(`FILE WRITTEN SUCCESSFULLY`);
//     });
//   });
// };

// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body);
//     return writefilePro(`${__dirname}/dog-image.txt`, res.body.message);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log("FETCHING DOG FROM API ERROR", err);
//   });

//// Async await
