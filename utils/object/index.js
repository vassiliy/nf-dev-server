const {reduce} = require('../list');
const {stripSpaces} = require('../string');
const {
  assign,
  fetch,
  fetchJSON,
  join,
  inspectRequested,
  inspectWhole,
  match,
  objectToKeep,
  skip,
} = require('./methods-001');

const stringGiven = (object, key) => typeof object[key] === 'string';

module.exports = {
  assign,
  assignKeep: (...args) => reduce(args, {}, objectToKeep),
  element: (object) => (item) => object[item],
  ensureElement: (object, defaultValue) => (item) => {
    defaultValue = (typeof defaultValue === 'undefined') ? '' : defaultValue;
    return object[item] || defaultValue;
  },
  error: (object) => stringGiven(object, 'error'),
  fetch,
  fetchJSON,
  format: (object, settings) => {
    object = join(object, settings.join);
    return skip(object, settings.skip);
  },
  given: (object, key) => typeof object[key] !== 'undefined',
  inspect: (object, xPath) => {
    if (typeof xPath !== 'string') return inspectWhole(object);
    const [, requested] = fetch(object, xPath);
    return inspectRequested(object, requested);
  },
  match,
  numberGiven: (object, key) => typeof object[key] === 'number',
  stringGiven,
  stripEmpty: (object) => stripSpaces(Object.keys(object).join(' ')),
};
