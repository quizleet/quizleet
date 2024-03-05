import express from "express";
import apiRouter from "./routes/api.js";


const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", apiRouter);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught an unknown middlware error.",
    status: 500,
    message: { err: "An error occured" },
  };
  // Use default err mashed with changes from passed in err
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

// Listen for port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const controller = require('./controllers/controller.js');
// const app = express();
// const PORT = 3000;

// // Parse JSON incoming
// app.use(express.json());

// // Accept requests from any domain - to be updated
// app.use(cors({ origin: '*' }));

// // Serve static files and the index.html file
// app.use('/', express.static(path.join(__dirname, '../client')));
// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

// // Route for saving requests
// app.post('/api/request', controller.saveRequest, (req, res) =>
//   res.status(200).json()
// );

// // Serve 404 error to all other unknown routes
// app.use('*', (req, res) => res.status(404).send('Page not found'));

// // Global error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught an unknown middlware error.',
//     status: 500,
//     message: { err: 'An error occured' },
//   };
//   // Use default err mashed with changes from passed in err
//   const errorObj = Object.assign(defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).send(errorObj.message);
// });

// // Listen for port
// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
