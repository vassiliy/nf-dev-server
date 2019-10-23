module.exports = {
  defaultFallback: (a) => a,
  ensure: (given, fallback) => {
    if (typeof given === 'function') return given;
    return fallback;
  },
};
