module.exports = {
  full: (detection) => {
    if (!Array.isArray(detection)) return false;
    if (detection.length !== 2) return false;
    if (typeof detection[1] !== 'boolean') return false;
    return true;
  },
};
