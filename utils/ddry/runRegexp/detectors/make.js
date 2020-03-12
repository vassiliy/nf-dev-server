const {reduce} = require('../../../list');

const should = require('./should');

module.exports = (regexpMethods) => (dd, regexp) => reduce(
  regexpMethods,
  {},
  (item) => ({
    [item]: (spec) => {
      const bounce = regexpMethods[item]
        .split(' ')
        .map((keyword) => (typeof spec[keyword] === 'undefined'))
        .includes(true);
      if (bounce) return false;
      return dd.drive(should[item](spec)(regexp));
    },
  })
);
