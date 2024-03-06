import express from 'express';
import controller from '../controllers/controller.js';

const router = express.Router();

router.get('/', controller.getProblems, (req, res) => {
  res.status(200).send(res.locals.data);
});

router.patch('/save', controller.save, controller.getProblems, (req, res) => {
  res.status(200).send(res.locals.data);
});

router.patch(
  '/favorite',
  controller.favorite,
  controller.getProblems,
  (req, res) => {
    res.status(200).send(res.locals.data);
  }
);

export default router;
