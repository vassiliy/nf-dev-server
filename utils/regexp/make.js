const {reduce} = require('../list');

module.exports = (regexpObject) => reduce(
  regexpObject,
  {},
  item => ({[item]: (typeof regexpObject[item] === 'function')
    ? (...args) => new RegExp(...regexpObject[item](...args))
    : regexpObject[item]
  })
);
