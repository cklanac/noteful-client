'use strict';

const express = require('express');
const morgan = require('morgan');

const { PORT } = require('./config');

// Create an Express application
const app = express();

// Log all requests
app.use(morgan('common'));

// Create a static webserver
app.use(express.static('public'));

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

// Listen for incoming connections
app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
