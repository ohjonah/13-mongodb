'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const debug = require('debug')('bake:server');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/bakery';

mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.listen(PORT, () => {
  debug(`Server on PORT: ${PORT}`);
});



