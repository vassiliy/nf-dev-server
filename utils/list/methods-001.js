const {
  collectErrors,
  concat,
} = require('./methods-002');
const {s} = require('../literal');

module.exports = {
  ensureArr: (source) => {
    if (Array.isArray(source)) return source;
    if (typeof source === 'string') return s(source);
    if (typeof source === 'object') return Object.keys(source);
    return [];
  },
  getAccFn: (acc, accFn) => {
    if (typeof accFn === 'function') return accFn;
    if (Array.isArray(acc)) return concat;
    if (accFn === true) return collectErrors;
    return Object.assign;
  },
  iterate: function* iterate(list, fn) {
    if (list.length < 1) return;
    yield fn(list.shift());
    yield* iterate(list, fn);
  },
};
