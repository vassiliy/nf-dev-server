const fs = require('fs');
const {ensure} = require('../../../utils/fn');
const paths = require('../routing-controller/paths');
const defaultFallback = require('./default-fallback');

const fetchJSON = (fileName, fallback, payload) => {
  fallback = ensure(fallback, defaultFallback);
  try {
    const data = fs.readFileSync(paths.data(fileName), 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return fallback(payload);
  }
};

module.exports = {
  fetchCore: (name) => fetchJSON(`core/${name}`),
  fetchJSON,
  fetchRoutes: (name) => fetchJSON(`routes/${name}`),
  getExports: (name) => {
    try {
      return require(paths.exports(name)); // eslint-disable-line
    } catch (e) {
      return {};
    }
  },
};
