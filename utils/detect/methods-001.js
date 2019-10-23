const {
  full,
} = require('./methods-002.js');

module.exports = {
  applyComplete: (detection) => {
    if (full(detection)) return detection;
    if (detection === false) return [false, false];
    return [detection, true];
  },
};
