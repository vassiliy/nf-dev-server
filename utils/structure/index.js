const pipe = require('../pipe');
const {
  renderData,
  format,
} = require('./methods-001');

module.exports = (base, data) => pipe({base, data}, [
  renderData,
  format,
]);
