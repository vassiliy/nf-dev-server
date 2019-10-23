const {assign, format} = require('../object');
const {reduce} = require('../list');
const {
  processDataKey,
} = require('./methods-002');

module.exports = {
  renderData: (stack) => assign(stack, {
    structure: reduce(
      Object.keys(stack.data), {}, processDataKey(stack)
    ),
  }),
  format: (stack) => format(stack, {
    join: 'base structure',
    skip: 'data',
  }),
};
