const {reduce} = require('../list');
const {
  collectErrors,
  error,
  errorFn,
  getError,
} = require('./methods-001');

module.exports = {
  error,
  errors: (errObject) => reduce(Object.keys(errObject), {}, errorFn(errObject, error)),
  getErrors: (acc) => {
    if (Array.isArray(acc)) return collectErrors(acc);
    if (typeof acc === 'object') return getError(acc);
    return [false];
  },
  ok: (payload) => [true, payload],
};
