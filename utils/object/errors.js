const {errors} = require('../tuple');

module.exports = errors({
  failingObject: () => 'Failing object given',
  invalidXPath: () => 'Invalid xPath given',
  jsonParseError: (key) => `Key "${key}" contains failing JSON`,
  keyMissing: (key) => `Key "${key}" missing`,
  typeMismatch: (type, gotType) => `Requested ${type}, got ${gotType}`,
});
