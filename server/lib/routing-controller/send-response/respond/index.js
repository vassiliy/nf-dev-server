const modes = require('./modes');

module.exports = (stack) => {
  const {
    rendered,
    renderMode,
    res,
  } = stack;
  return modes[renderMode](res, rendered);
};
