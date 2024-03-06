import db from '../models/model.js';

const controller = {};

controller.getProblems = (req, res, next) => {
  const queryStr = 'SELECT * FROM problems';
  try {
    db.query(queryStr).then((result) => {
      res.locals.data = result.rows;
      return next();
    });
  } catch (err) {
    return next({
      err: 'error in getProblems controller',
    });
  }
};

controller.save = async (req, res, next) => {
  const { name, user_rating, history, newCode } = req.body;

  const historyArr = await JSON.parse(history);
  const finalCode = newCode.replaceAll("'", "''");
  historyArr.unshift(finalCode);

  const stringifyArr = JSON.stringify(historyArr);

  const queryStr = `UPDATE problems SET user_rating = '${user_rating}', history = '${stringifyArr}' WHERE name = '${name}';`;
  try {
    db.query(queryStr).then(() => {
      return next();
    });
  } catch (err) {
    return next({
      err: 'error in save controller',
    });
  }
};

controller.favorite = async (req, res, next) => {
  const { name, favorite } = req.body;
  const queryStr = `UPDATE problems SET favorite = '${favorite}' WHERE name = '${name}';`;
  try {
    db.query(queryStr).then(() => {
      return next();
    });
  } catch (err) {
    return next({
      err: 'error in favorite controller',
    });
  }
};

export default controller;
