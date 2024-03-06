import express from "express";
import controller from "../controllers/controller.js"

const router = express.Router();

router.get("/", controller.getProblems, (req, res) => {
  res.status(200).send(res.locals.data);
});

router.patch("/save", controller.save, (req, res) => {
    res.sendStatus(200);
});

router.patch("/favorite", controller.favorite, (req, res) => {
    res.sendStatus(200);
});

export default router;
