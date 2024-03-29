require('dotenv').config();
require('isomorphic-fetch');

const entries = require('./services/entries');
const feeds = require('./services/feeds');
const readState = require('./services/readState');

module.exports = {
  entries,
  feeds,
  readState
};

