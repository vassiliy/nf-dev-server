const {reduce} = require('../../list');
const runSpec = require('./runSpec');

module.exports = (dd, that, regexpSpecsObject) => reduce(
  regexpSpecsObject,
  [],
  runSpec(dd, that, regexpSpecsObject)
);
