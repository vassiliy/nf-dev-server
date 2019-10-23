const {ensure} = require('../fn');
const {
  assign,
} = require('./methods-003');
const errors = require('./errors');

const thread = (object, steps, threaded) => {
  threaded = threaded || assign({}, object);
  if (steps.length < 1) return threaded;
  const step = steps.shift();
  if (typeof threaded[step] !== 'object') return errors.keyMissing(step);
  return thread(object, steps, threaded[step]);
};

module.exports = {
  assign,
  ensure: (type) => {
    if (typeof type !== 'string') return false;
    return type;
  },
  failing: (object) => {
    if (!object) return true;
    if (typeof object !== 'object') return true;
    if (Array.isArray(object)) return true;
    if (Object.keys(object).length < 1) return true;
    return false;
  },
  joinKey: (acc, item) => assign(acc, acc[item]),
  parse: (xPath) => {
    if (typeof xPath !== 'string') return false;
    xPath = xPath.split('.');
    tail = xPath.pop();
    return [xPath, tail];
  },
  renderItem: (fn) => (acc, item) => {
    acc = ensure(fn)(acc, item);
    delete acc[item];
    return acc;
  },
  thread,
};
