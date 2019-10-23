const {argv} = require('yargs');
const {fetchParam} = require('./methods-001');

module.exports = {
  getParam: (key) => fetchParam(argv, key),
};
