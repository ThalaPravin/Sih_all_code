const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const { errorMiddleware } = require('./middlewares/error.middleware');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// API Routes
app.use('/api', routes);

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
