const {ensure} = require('../fn');
const {reduce} = require('../list');
const {
  addError,
  errorMisset,
} = require('./methods-002');

module.exports = {
  collectErrors: (arr) => {
    const errors = reduce(arr, [], false, addError);
    if (errors.length < 1) return [false];
    return [true, errors];
  },
  error: (payload) => [false, payload],
  errorFn: (errObject, error) => (item) => {
    const errorFn = ensure(errObject[item], errorMisset(item));
    return {[item]: (...args) => error(errorFn(...args))};
  },
  getError: (obj) => {
    if (typeof obj.error === 'undefined') return [false];
    return [true, obj.error];
  },
};
