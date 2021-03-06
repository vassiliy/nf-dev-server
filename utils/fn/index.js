const {
  defaultFallback,
  ensure,
} = require('./methods-001');

module.exports = {
  ensure: (given, fallback) => {
    fallback = ensure(fallback, defaultFallback);
    return ensure(given, fallback);
  },
  setName: (fn, name) => {
    if (typeof fn !== 'function') throw new Error('First agrument is not a function');
    Object.defineProperty(fn, 'name', {
      value: name,
      configurable: true,
    });
    return fn;
  },
};
