import db from '../models/model.js'

const controller = {};

controller.getProblems = (req, res, next) => {
  const queryStr = 'SELECT * FROM problems'
  console.log('db:', db);
  try {
    db.query(queryStr).then((result)=> {
      res.locals.data = result.rows
      return next()
    })
  } catch (err) {
    return next({
      err: "error in getProblems controller"
    })
  }
};

controller.save = async(req, res, next) => {
  const {name, user_rating, history, newCode} = req.body;
  
  const historyArr = await JSON.parse(history)
  historyArr.unshift(newCode)
  console.log('Array.isArray:', Array.isArray(historyArr), "historyArr:", historyArr)
  // console.log(newHistoryArr)
  const stringifyArr = JSON.stringify(historyArr)

  const queryStr = `UPDATE problems SET user_rating = '${user_rating}', history = '${stringifyArr}' WHERE name = '${name}';`
  try {
    db.query(queryStr).then((result)=> {
      return next()
    })
  } catch (err) {
    return next({
      err: "error in getProblems controller"
    })
  }
};

// {
//   "name": "Two Sum",
//   "description": "https://leetcode.com/problems/add-two-numbers/",
//   "difficulty": "Easy",
//   "solution": "https://leetcode.com/problems/two-sum/editorial/",
//   "user_rating": null
// }


// controller.saveRequest = (req, res, next) => {
//   const { method, url, json_body } = req.body;
//   console.log('req.body', req.body);
//   const queryString =
//     'INSERT INTO api_endpoint_tests (method, url, json_body) ' +
//     'VALUES ($1, $2, $3) ' +
//     'RETURNING *';
//   const inputs = [method, url, json_body];
//   db.query(queryString, inputs)
//     .then((result) => {
//       console.log('New saved request:', result);
//       return next();
//     })
//     .catch((error) => {
//       return next({
//         log: `Error in controller.saveRequest: ${error}.`,
//         status: 500,
//         message: { err: 'An error occurred' },
//       });
//     });
// };


export default controller;
