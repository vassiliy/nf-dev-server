const {defaultView} = require('../../../settings');
const {fetchRoutes} = require('../../json');

const stripReserved = (dataFilename) => {
  if (/^_generators\//.test(dataFilename)) return defaultView;
  if (/^_core\//.test(dataFilename)) return defaultView;
  if (dataFilename.length < 1) return defaultView;
  return dataFilename;
};

module.exports = async(payload) => {
  payload = payload.join('/');
  const fileName = stripReserved(payload);
  return fetchRoutes(fileName, (p) => ({error: `No data for ${p}`}), payload);
};
